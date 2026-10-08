(() => {
  const DEFAULT_CENTER = [116.4435, 39.9219]; // 北京朝阳

  let map = null;
  let AMapRef = null;
  let userMarker = null;
  let userCircle = null;
  let classMarkers = [];
  let geolocation = null;
  let opts = null;
  let ready = false;
  let hasUserPos = false;

  function loadScript(key) {
    return new Promise((resolve, reject) => {
      if (window.AMap) {
        resolve(window.AMap);
        return;
      }
      const existing = document.querySelector("script[data-amap]");
      if (existing) {
        existing.addEventListener("load", () => resolve(window.AMap));
        existing.addEventListener("error", () => reject(new Error("高德地图脚本加载失败")));
        return;
      }
      const s = document.createElement("script");
      s.dataset.amap = "1";
      s.src = `https://webapi.amap.com/maps?v=2.0&key=${encodeURIComponent(key)}&plugin=AMap.Geolocation,AMap.Scale,AMap.GeometryUtil`;
      s.async = true;
      s.onload = () => resolve(window.AMap);
      s.onerror = () => reject(new Error("高德地图脚本加载失败"));
      document.head.appendChild(s);
    });
  }

  function clearClassMarkers() {
    if (!map || !classMarkers.length) return;
    map.remove(classMarkers);
    classMarkers = [];
  }

  async function init(options) {
    opts = options || {};
    const { key, securityJsCode, container } = opts;
    if (!key || !container) {
      ready = false;
      return false;
    }

    if (securityJsCode) {
      window._AMapSecurityConfig = { securityJsCode };
    }

    try {
      AMapRef = await loadScript(key);
      if (map) {
        ready = true;
        return true;
      }

      map = new AMapRef.Map(container, {
        zoom: 12,
        center: DEFAULT_CENTER,
        viewMode: "2D",
        mapStyle: "amap://styles/whitesmoke",
      });
      map.addControl(new AMapRef.Scale({ position: "LB" }));

      geolocation = new AMapRef.Geolocation({
        enableHighAccuracy: true,
        timeout: 15000,
        zoomToAccuracy: true,
        panToLocation: true,
        showButton: false,
        showMarker: false,
        showCircle: false,
        convert: true,
      });
      map.addControl(geolocation);

      ready = true;
      opts.onReady?.(map);
      return true;
    } catch (err) {
      ready = false;
      opts.onError?.(err);
      return false;
    }
  }

  function focusUser(zoom = 16) {
    if (!map || !userMarker) return;
    const pos = userMarker.getPosition();
    map.setZoomAndCenter(zoom, [pos.lng, pos.lat]);
  }

  function setUserPosition(lng, lat, address, accuracy) {
    if (!map || !AMapRef) return;
    const pos = [lng, lat];
    hasUserPos = true;

    if (!userMarker) {
      userMarker = new AMapRef.Marker({
        position: pos,
        title: "我的位置",
        zIndex: 200,
        content: `<div class="amap-user-dot" title="我的位置"><span class="amap-user-pulse"></span></div>`,
        offset: new AMapRef.Pixel(-10, -10),
      });
      map.add(userMarker);
    } else {
      userMarker.setPosition(pos);
    }

    const radius = Math.max(40, Math.min(Number(accuracy) || 80, 300));
    if (!userCircle) {
      userCircle = new AMapRef.Circle({
        center: pos,
        radius,
        strokeColor: "#2a7de1",
        strokeOpacity: 0.55,
        strokeWeight: 1,
        fillColor: "#2a7de1",
        fillOpacity: 0.12,
        zIndex: 80,
        bubble: true,
      });
      map.add(userCircle);
    } else {
      userCircle.setCenter(pos);
      userCircle.setRadius(radius);
    }

    focusUser(16);
    opts.onLocate?.({ lng, lat, address: address || "" });
  }

  function convertGpsToGcj(lng, lat) {
    return new Promise((resolve) => {
      if (!AMapRef?.convertFrom) {
        resolve({ lng, lat });
        return;
      }
      AMapRef.convertFrom([lng, lat], "gps", (status, result) => {
        if (status === "complete" && result?.locations?.[0]) {
          const p = result.locations[0];
          resolve({ lng: p.lng, lat: p.lat });
        } else {
          resolve({ lng, lat });
        }
      });
    });
  }

  function locateWithBrowser() {
    return new Promise((resolve) => {
      if (!navigator.geolocation) {
        resolve(null);
        return;
      }
      navigator.geolocation.getCurrentPosition(
        async (pos) => {
          const rawLng = pos.coords.longitude;
          const rawLat = pos.coords.latitude;
          const converted = await convertGpsToGcj(rawLng, rawLat);
          setUserPosition(converted.lng, converted.lat, "", pos.coords.accuracy);
          resolve({
            lng: converted.lng,
            lat: converted.lat,
            address: "",
            source: "browser",
            accuracy: pos.coords.accuracy,
          });
        },
        () => resolve(null),
        { enableHighAccuracy: true, timeout: 15000, maximumAge: 0 }
      );
    });
  }

  function locate() {
    return new Promise((resolve) => {
      if (!ready || !geolocation) {
        locateWithBrowser().then(resolve);
        return;
      }

      geolocation.getCurrentPosition(async (status, result) => {
        if (status === "complete" && result?.position) {
          const lng = result.position.lng;
          const lat = result.position.lat;
          const address =
            result.formattedAddress ||
            result.addressComponent?.district ||
            result.addressComponent?.township ||
            "";
          setUserPosition(lng, lat, address, result.accuracy);
          resolve({ lng, lat, address, source: "amap", accuracy: result.accuracy });
          return;
        }
        const fallback = await locateWithBrowser();
        resolve(fallback);
      });
    });
  }

  function setMarkers(list, options = {}) {
    if (!ready || !map || !AMapRef) return;
    const fitView = options.fitView === true && !hasUserPos;
    clearClassMarkers();
    const points = [];

    (list || []).forEach((item) => {
      if (item.lng == null || item.lat == null) return;
      const pos = [item.lng, item.lat];
      points.push(pos);
      const marker = new AMapRef.Marker({
        position: pos,
        title: item.title,
        zIndex: 100,
        content: `<button type="button" class="amap-class-pin" data-class-id="${item.id}" title="${item.title}"></button>`,
        offset: new AMapRef.Pixel(-8, -8),
      });
      marker.on("click", () => opts.onMarkerClick?.(item.id));
      classMarkers.push(marker);
    });

    if (classMarkers.length) {
      map.add(classMarkers);
      if (fitView) {
        if (points.length === 1) {
          map.setZoomAndCenter(14, points[0]);
        } else {
          map.setFitView(classMarkers, false, [48, 48, 48, 48]);
        }
      }
    }

    // 已有定位时，刷新课程点后仍回到我的位置附近
    if (hasUserPos && options.keepUserFocus) {
      focusUser(map.getZoom() < 14 ? 15 : map.getZoom());
    }
  }

  function isReady() {
    return ready;
  }

  function resize() {
    map?.resize();
  }

  window.ZanbanMap = {
    init,
    locate,
    setMarkers,
    focusUser,
    isReady,
    resize,
    DEFAULT_CENTER,
  };
})();
