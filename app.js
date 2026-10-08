(() => {
  const CLASSES = [
    {
      id: 1,
      title: "少儿足球启蒙班",
      kind: "兴趣课",
      category: "足球",
      level: "初级",
      ageMin: 6,
      ageMax: 8,
      distance: 1.2,
      venue: "朝阳公园东门足球场",
      capacity: 12,
      enrolled: 9,
      price: 128,
      teacher: "陈教练",
      credit: 92.4,
      fee: 117,
      time: "周六 09:00–10:30",
      status: "招募中",
      art: "images/ad-pool.svg",
    },
    {
      id: 2,
      title: "青少年篮球提高班",
      kind: "兴趣课",
      category: "篮球",
      level: "中级",
      ageMin: 9,
      ageMax: 12,
      distance: 2.8,
      venue: "望京 SOHO 体育馆",
      capacity: 10,
      enrolled: 7,
      price: 148,
      teacher: "周老师",
      credit: 88.1,
      fee: 112,
      time: "周日 14:00–15:30",
      status: "招募中",
      art: "images/ad-teacher.svg",
    },
    {
      id: 3,
      title: "钢琴启蒙一对多",
      kind: "兴趣课",
      category: "钢琴",
      level: "初级",
      ageMin: 6,
      ageMax: 10,
      distance: 1.6,
      venue: "共享琴房 · 三里屯",
      capacity: 6,
      enrolled: 4,
      price: 168,
      teacher: "林老师",
      credit: 95.0,
      fee: 128,
      time: "周三 18:30–19:30",
      status: "招募中",
      art: "images/ad-points.svg",
    },
    {
      id: 4,
      title: "儿童创意绘画班",
      kind: "兴趣课",
      category: "绘画",
      level: "初级",
      ageMin: 5,
      ageMax: 8,
      distance: 3.2,
      venue: "艺术空间 · 望京",
      capacity: 10,
      enrolled: 6,
      price: 118,
      teacher: "何老师",
      credit: 90.5,
      fee: 110,
      time: "周六 15:00–16:30",
      status: "招募中",
      art: "images/ad-pay.svg",
    },
    {
      id: 14,
      title: "少儿流行吉他入门",
      kind: "兴趣课",
      category: "吉他",
      level: "初级",
      ageMin: 8,
      ageMax: 14,
      distance: 2.4,
      venue: "共享琴房 · 望京",
      capacity: 6,
      enrolled: 3,
      price: 158,
      teacher: "高老师",
      credit: 93.6,
      fee: 122,
      time: "周六 11:00–12:00",
      status: "招募中",
      art: "images/ad-points.svg",
    },
    {
      id: 15,
      title: "少儿中国舞基础班",
      kind: "兴趣课",
      category: "舞蹈",
      level: "初级",
      ageMin: 5,
      ageMax: 9,
      distance: 1.9,
      venue: "舞蹈教室 · 三里屯",
      capacity: 12,
      enrolled: 8,
      price: 138,
      teacher: "唐老师",
      credit: 94.2,
      fee: 115,
      time: "周日 10:00–11:30",
      status: "招募中",
      art: "images/ad-pool.svg",
    },
    {
      id: 5,
      title: "小学数学培优班",
      kind: "学业课",
      category: "数学",
      grade: "小学四年级",
      level: "提高",
      ageMin: 9,
      ageMax: 12,
      distance: 2.1,
      venue: "共享教室 · 太阳宫",
      capacity: 8,
      enrolled: 5,
      price: 138,
      teacher: "王老师",
      credit: 93.2,
      fee: 120,
      time: "周六 10:00–11:30",
      status: "招募中",
      art: "images/ad-hero.svg",
    },
    {
      id: 6,
      title: "初中英语听说课",
      kind: "学业课",
      category: "英语",
      grade: "初二",
      level: "中级",
      ageMin: 12,
      ageMax: 15,
      distance: 4.5,
      venue: "语言工作室 · 国贸",
      capacity: 8,
      enrolled: 3,
      price: 158,
      teacher: "赵老师",
      credit: 91.0,
      fee: 125,
      time: "周日 09:30–11:00",
      status: "招募中",
      art: "images/ad-teacher.svg",
    },
    {
      id: 7,
      title: "小学语文阅读写作",
      kind: "学业课",
      category: "语文",
      grade: "小学三年级",
      level: "初级",
      ageMin: 8,
      ageMax: 11,
      distance: 1.8,
      venue: "共享教室 · 朝阳大悦城",
      capacity: 10,
      enrolled: 8,
      price: 128,
      teacher: "孙老师",
      credit: 89.6,
      fee: 115,
      time: "周五 19:00–20:30",
      status: "招募中",
      art: "images/ad-points.svg",
    },
    {
      id: 8,
      title: "高一物理同步辅导",
      kind: "学业课",
      category: "物理",
      grade: "高一",
      level: "高级",
      ageMin: 15,
      ageMax: 17,
      distance: 5.6,
      venue: "学业中心 · 亚运村",
      capacity: 6,
      enrolled: 2,
      price: 188,
      teacher: "刘老师",
      credit: 96.1,
      fee: 145,
      time: "周六 14:00–16:00",
      status: "招募中",
      art: "images/ad-pool.svg",
    },
    {
      id: 9,
      title: "初三化学冲刺小班",
      kind: "学业课",
      category: "化学",
      grade: "初三",
      level: "中级",
      ageMin: 14,
      ageMax: 16,
      distance: 3.4,
      venue: "学业中心 · 望京",
      capacity: 8,
      enrolled: 5,
      price: 158,
      teacher: "周老师",
      credit: 93.2,
      fee: 125,
      time: "周日 10:00–11:30",
      status: "招募中",
      art: "images/ad-teacher.svg",
    },
    {
      id: 10,
      title: "高中生物实验精讲",
      kind: "学业课",
      category: "生物",
      grade: "高二",
      level: "高级",
      ageMin: 15,
      ageMax: 17,
      distance: 4.2,
      venue: "共享教室 · 三里屯",
      capacity: 6,
      enrolled: 3,
      price: 168,
      teacher: "吴老师",
      credit: 94.8,
      fee: 130,
      time: "周六 16:00–17:30",
      status: "招募中",
      art: "images/ad-points.svg",
    },
    {
      id: 11,
      title: "初中地理考点梳理",
      kind: "学业课",
      category: "地理",
      grade: "初一",
      level: "中级",
      ageMin: 12,
      ageMax: 15,
      distance: 2.9,
      venue: "社区教室 · 太阳宫",
      capacity: 10,
      enrolled: 6,
      price: 118,
      teacher: "郑老师",
      credit: 91.5,
      fee: 95,
      time: "周五 18:30–20:00",
      status: "招募中",
      art: "images/ad-pool.svg",
    },
    {
      id: 12,
      title: "高中历史专题班",
      kind: "学业课",
      category: "历史",
      grade: "高二",
      level: "高级",
      ageMin: 15,
      ageMax: 18,
      distance: 6.1,
      venue: "学业中心 · 亚运村",
      capacity: 8,
      enrolled: 4,
      price: 148,
      teacher: "冯老师",
      credit: 95.0,
      fee: 120,
      time: "周日 14:00–15:30",
      status: "招募中",
      art: "images/ad-teacher.svg",
    },
    {
      id: 13,
      title: "初中政治开卷提分",
      kind: "学业课",
      category: "政治",
      grade: "初二",
      level: "中级",
      ageMin: 13,
      ageMax: 15,
      distance: 3.8,
      venue: "共享教室 · 朝阳大悦城",
      capacity: 10,
      enrolled: 7,
      price: 108,
      teacher: "韩老师",
      credit: 90.4,
      fee: 88,
      time: "周六 09:00–10:30",
      status: "招募中",
      art: "images/ad-points.svg",
    },
    {
      id: 16,
      title: "周末亲子足球趣味课",
      kind: "兴趣课",
      category: "足球",
      level: "初级",
      ageMin: 5,
      ageMax: 8,
      distance: 3.6,
      venue: "奥体中心外场",
      capacity: 14,
      enrolled: 10,
      price: 118,
      teacher: "马教练",
      credit: 90.8,
      fee: 100,
      time: "周日 09:00–10:00",
      status: "招募中",
      art: "images/ad-pool.svg",
    },
    {
      id: 17,
      title: "青少年篮球投篮专项",
      kind: "兴趣课",
      category: "篮球",
      level: "中级",
      ageMin: 11,
      ageMax: 15,
      distance: 4.8,
      venue: "国家体育馆训练馆",
      capacity: 8,
      enrolled: 5,
      price: 168,
      teacher: "徐教练",
      credit: 94.5,
      fee: 130,
      time: "周六 16:00–17:30",
      status: "招募中",
      art: "images/ad-teacher.svg",
    },
    {
      id: 18,
      title: "钢琴考级冲刺小班",
      kind: "兴趣课",
      category: "钢琴",
      level: "中级",
      ageMin: 8,
      ageMax: 14,
      distance: 2.2,
      venue: "共享琴房 · 望京",
      capacity: 4,
      enrolled: 2,
      price: 198,
      teacher: "沈老师",
      credit: 97.2,
      fee: 150,
      time: "周六 14:00–15:00",
      status: "招募中",
      art: "images/ad-points.svg",
    },
    {
      id: 19,
      title: "青少年吉他弹唱班",
      kind: "兴趣课",
      category: "吉他",
      level: "中级",
      ageMin: 12,
      ageMax: 16,
      distance: 5.2,
      venue: "音乐教室 · 国贸",
      capacity: 6,
      enrolled: 4,
      price: 178,
      teacher: "叶老师",
      credit: 92.0,
      fee: 135,
      time: "周日 15:00–16:30",
      status: "招募中",
      art: "images/ad-pay.svg",
    },
    {
      id: 20,
      title: "少儿爵士舞启蒙",
      kind: "兴趣课",
      category: "舞蹈",
      level: "初级",
      ageMin: 7,
      ageMax: 11,
      distance: 2.7,
      venue: "舞蹈教室 · 望京",
      capacity: 12,
      enrolled: 9,
      price: 148,
      teacher: "白老师",
      credit: 93.8,
      fee: 118,
      time: "周六 10:30–12:00",
      status: "招募中",
      art: "images/ad-pool.svg",
    },
    {
      id: 21,
      title: "少儿素描基础课",
      kind: "兴趣课",
      category: "绘画",
      level: "初级",
      ageMin: 8,
      ageMax: 12,
      distance: 1.5,
      venue: "艺术空间 · 三里屯",
      capacity: 8,
      enrolled: 5,
      price: 128,
      teacher: "蒋老师",
      credit: 91.3,
      fee: 105,
      time: "周日 13:30–15:00",
      status: "招募中",
      art: "images/ad-pay.svg",
    },
    {
      id: 22,
      title: "小学一年级识字启蒙",
      kind: "学业课",
      category: "语文",
      grade: "小学一年级",
      level: "初级",
      ageMin: 6,
      ageMax: 7,
      distance: 1.4,
      venue: "社区教室 · 太阳宫",
      capacity: 8,
      enrolled: 6,
      price: 98,
      teacher: "宋老师",
      credit: 88.9,
      fee: 80,
      time: "周六 09:30–10:30",
      status: "招募中",
      art: "images/ad-hero.svg",
    },
    {
      id: 23,
      title: "小学二年级口算巧练",
      kind: "学业课",
      category: "数学",
      grade: "小学二年级",
      level: "初级",
      ageMin: 7,
      ageMax: 8,
      distance: 2.6,
      venue: "共享教室 · 望京",
      capacity: 10,
      enrolled: 7,
      price: 108,
      teacher: "曹老师",
      credit: 90.1,
      fee: 88,
      time: "周日 10:00–11:00",
      status: "招募中",
      art: "images/ad-points.svg",
    },
    {
      id: 24,
      title: "小学五年级作文提升",
      kind: "学业课",
      category: "语文",
      grade: "小学五年级",
      level: "提高",
      ageMin: 10,
      ageMax: 12,
      distance: 3.1,
      venue: "共享教室 · 朝阳大悦城",
      capacity: 8,
      enrolled: 4,
      price: 138,
      teacher: "袁老师",
      credit: 92.7,
      fee: 112,
      time: "周五 18:30–20:00",
      status: "招募中",
      art: "images/ad-teacher.svg",
    },
    {
      id: 25,
      title: "小学六年级奥数入门",
      kind: "学业课",
      category: "数学",
      grade: "小学六年级",
      level: "提高",
      ageMin: 11,
      ageMax: 13,
      distance: 4.0,
      venue: "学业中心 · 望京",
      capacity: 6,
      enrolled: 3,
      price: 168,
      teacher: "丁老师",
      credit: 95.4,
      fee: 130,
      time: "周六 15:00–16:30",
      status: "招募中",
      art: "images/ad-hero.svg",
    },
    {
      id: 26,
      title: "小学英语自然拼读",
      kind: "学业课",
      category: "英语",
      grade: "小学三年级",
      level: "初级",
      ageMin: 8,
      ageMax: 10,
      distance: 2.3,
      venue: "语言工作室 · 三里屯",
      capacity: 8,
      enrolled: 5,
      price: 128,
      teacher: "Amy 老师",
      credit: 94.0,
      fee: 105,
      time: "周日 11:00–12:00",
      status: "招募中",
      art: "images/ad-teacher.svg",
    },
    {
      id: 27,
      title: "初一数学衔接课",
      kind: "学业课",
      category: "数学",
      grade: "初一",
      level: "中级",
      ageMin: 12,
      ageMax: 13,
      distance: 3.3,
      venue: "学业中心 · 太阳宫",
      capacity: 8,
      enrolled: 6,
      price: 148,
      teacher: "罗老师",
      credit: 93.5,
      fee: 118,
      time: "周六 09:00–10:30",
      status: "招募中",
      art: "images/ad-pool.svg",
    },
    {
      id: 28,
      title: "初一文史合班导读",
      kind: "学业课",
      category: "历史",
      grade: "初一",
      level: "初级",
      ageMin: 12,
      ageMax: 13,
      distance: 4.4,
      venue: "社区教室 · 国贸",
      capacity: 10,
      enrolled: 4,
      price: 118,
      teacher: "崔老师",
      credit: 89.8,
      fee: 95,
      time: "周日 14:00–15:30",
      status: "招募中",
      art: "images/ad-points.svg",
    },
    {
      id: 29,
      title: "初二物理入门实验",
      kind: "学业课",
      category: "物理",
      grade: "初二",
      level: "中级",
      ageMin: 13,
      ageMax: 14,
      distance: 2.8,
      venue: "学业中心 · 望京",
      capacity: 8,
      enrolled: 5,
      price: 158,
      teacher: "潘老师",
      credit: 94.6,
      fee: 125,
      time: "周六 13:30–15:00",
      status: "招募中",
      art: "images/ad-teacher.svg",
    },
    {
      id: 30,
      title: "初二英语语法精练",
      kind: "学业课",
      category: "英语",
      grade: "初二",
      level: "中级",
      ageMin: 13,
      ageMax: 14,
      distance: 1.7,
      venue: "共享教室 · 三里屯",
      capacity: 8,
      enrolled: 7,
      price: 148,
      teacher: "魏老师",
      credit: 92.3,
      fee: 118,
      time: "周五 19:00–20:30",
      status: "招募中",
      art: "images/ad-pay.svg",
    },
    {
      id: 31,
      title: "初三数学压轴专练",
      kind: "学业课",
      category: "数学",
      grade: "初三",
      level: "高级",
      ageMin: 14,
      ageMax: 16,
      distance: 3.9,
      venue: "学业中心 · 亚运村",
      capacity: 6,
      enrolled: 4,
      price: 188,
      teacher: "陆老师",
      credit: 96.8,
      fee: 145,
      time: "周日 09:00–11:00",
      status: "招募中",
      art: "images/ad-hero.svg",
    },
    {
      id: 32,
      title: "初三语文阅读冲刺",
      kind: "学业课",
      category: "语文",
      grade: "初三",
      level: "提高",
      ageMin: 14,
      ageMax: 16,
      distance: 5.0,
      venue: "共享教室 · 国贸",
      capacity: 8,
      enrolled: 3,
      price: 158,
      teacher: "姚老师",
      credit: 93.0,
      fee: 122,
      time: "周六 16:30–18:00",
      status: "招募中",
      art: "images/ad-points.svg",
    },
    {
      id: 33,
      title: "初三政治时政热点",
      kind: "学业课",
      category: "政治",
      grade: "初三",
      level: "中级",
      ageMin: 14,
      ageMax: 16,
      distance: 2.5,
      venue: "社区教室 · 望京",
      capacity: 10,
      enrolled: 6,
      price: 118,
      teacher: "贺老师",
      credit: 91.2,
      fee: 95,
      time: "周日 16:00–17:30",
      status: "招募中",
      art: "images/ad-pool.svg",
    },
    {
      id: 34,
      title: "高一数学函数专题",
      kind: "学业课",
      category: "数学",
      grade: "高一",
      level: "高级",
      ageMin: 15,
      ageMax: 16,
      distance: 4.6,
      venue: "学业中心 · 亚运村",
      capacity: 6,
      enrolled: 2,
      price: 198,
      teacher: "方老师",
      credit: 97.5,
      fee: 155,
      time: "周六 09:00–11:00",
      status: "招募中",
      art: "images/ad-hero.svg",
    },
    {
      id: 35,
      title: "高一英语听说强化",
      kind: "学业课",
      category: "英语",
      grade: "高一",
      level: "中级",
      ageMin: 15,
      ageMax: 16,
      distance: 3.0,
      venue: "语言工作室 · 望京",
      capacity: 8,
      enrolled: 5,
      price: 168,
      teacher: "Grace 老师",
      credit: 95.1,
      fee: 130,
      time: "周日 10:00–11:30",
      status: "招募中",
      art: "images/ad-teacher.svg",
    },
    {
      id: 36,
      title: "高一地理区域专题",
      kind: "学业课",
      category: "地理",
      grade: "高一",
      level: "中级",
      ageMin: 15,
      ageMax: 16,
      distance: 6.5,
      venue: "学业中心 · 奥体",
      capacity: 8,
      enrolled: 3,
      price: 138,
      teacher: "邵老师",
      credit: 90.6,
      fee: 110,
      time: "周五 18:30–20:00",
      status: "招募中",
      art: "images/ad-pool.svg",
    },
    {
      id: 37,
      title: "高二化学有机突破",
      kind: "学业课",
      category: "化学",
      grade: "高二",
      level: "高级",
      ageMin: 16,
      ageMax: 17,
      distance: 3.7,
      venue: "学业中心 · 望京",
      capacity: 6,
      enrolled: 4,
      price: 198,
      teacher: "秦老师",
      credit: 96.3,
      fee: 150,
      time: "周六 14:00–16:00",
      status: "招募中",
      art: "images/ad-points.svg",
    },
    {
      id: 38,
      title: "高二政治哲学精讲",
      kind: "学业课",
      category: "政治",
      grade: "高二",
      level: "中级",
      ageMin: 16,
      ageMax: 17,
      distance: 4.9,
      venue: "共享教室 · 朝阳大悦城",
      capacity: 8,
      enrolled: 2,
      price: 148,
      teacher: "孔老师",
      credit: 92.8,
      fee: 118,
      time: "周日 15:00–16:30",
      status: "招募中",
      art: "images/ad-pay.svg",
    },
    {
      id: 39,
      title: "高三数学一轮复习",
      kind: "学业课",
      category: "数学",
      grade: "高三",
      level: "高级",
      ageMin: 17,
      ageMax: 18,
      distance: 5.4,
      venue: "学业中心 · 亚运村",
      capacity: 6,
      enrolled: 5,
      price: 228,
      teacher: "严老师",
      credit: 98.1,
      fee: 175,
      time: "周六 08:30–11:00",
      status: "招募中",
      art: "images/ad-hero.svg",
    },
    {
      id: 40,
      title: "高三物理大题突破",
      kind: "学业课",
      category: "物理",
      grade: "高三",
      level: "高级",
      ageMin: 17,
      ageMax: 18,
      distance: 4.1,
      venue: "学业中心 · 望京",
      capacity: 6,
      enrolled: 3,
      price: 218,
      teacher: "姜老师",
      credit: 97.0,
      fee: 165,
      time: "周日 13:00–15:30",
      status: "招募中",
      art: "images/ad-teacher.svg",
    },
    {
      id: 41,
      title: "高三生物选修冲刺",
      kind: "学业课",
      category: "生物",
      grade: "高三",
      level: "高级",
      ageMin: 17,
      ageMax: 18,
      distance: 6.8,
      venue: "共享教室 · 国贸",
      capacity: 6,
      enrolled: 2,
      price: 198,
      teacher: "莫老师",
      credit: 95.9,
      fee: 150,
      time: "周六 16:00–18:00",
      status: "招募中",
      art: "images/ad-points.svg",
    },
    {
      id: 42,
      title: "高三历史材料题专训",
      kind: "学业课",
      category: "历史",
      grade: "高三",
      level: "高级",
      ageMin: 17,
      ageMax: 18,
      distance: 7.2,
      venue: "学业中心 · 奥体",
      capacity: 8,
      enrolled: 4,
      price: 178,
      teacher: "顾老师",
      credit: 94.4,
      fee: 138,
      time: "周日 09:30–11:30",
      status: "招募中",
      art: "images/ad-pool.svg",
    },
  ];

  /** 场地关键字 → 高德坐标（GCJ-02），用于地图标点与距离计算 */
  const VENUE_COORDS = [
    { key: "朝阳公园", lng: 116.4865, lat: 39.9438 },
    { key: "望京 SOHO", lng: 116.4808, lat: 39.9962 },
    { key: "望京", lng: 116.4702, lat: 39.9935 },
    { key: "三里屯", lng: 116.4553, lat: 39.9372 },
    { key: "太阳宫", lng: 116.4471, lat: 39.9724 },
    { key: "国贸", lng: 116.4612, lat: 39.9091 },
    { key: "朝阳大悦城", lng: 116.5184, lat: 39.9238 },
    { key: "亚运村", lng: 116.4075, lat: 39.9948 },
    { key: "奥体", lng: 116.3968, lat: 39.9926 },
    { key: "国家体育馆", lng: 116.3904, lat: 39.9949 },
  ];

  function assignClassCoords(list) {
    list.forEach((c) => {
      const hit = VENUE_COORDS.find((v) => c.venue.includes(v.key));
      if (hit) {
        c.lng = hit.lng + ((c.id % 5) - 2) * 0.0022;
        c.lat = hit.lat + ((c.id % 3) - 1) * 0.0018;
      } else {
        c.lng = 116.4435 + ((c.id % 9) - 4) * 0.012;
        c.lat = 39.9219 + ((c.id % 7) - 3) * 0.01;
      }
      c.baseDistance = c.distance;
    });
  }
  assignClassCoords(CLASSES);

  function haversineKm(lng1, lat1, lng2, lat2) {
    const toRad = (d) => (d * Math.PI) / 180;
    const R = 6371;
    const dLat = toRad(lat2 - lat1);
    const dLng = toRad(lng2 - lng1);
    const a =
      Math.sin(dLat / 2) ** 2 +
      Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) * Math.sin(dLng / 2) ** 2;
    return R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  }

  function refreshDistancesFromUser() {
    if (state.userLng == null || state.userLat == null) return;
    CLASSES.forEach((c) => {
      c.distance = Math.round(haversineKm(state.userLng, state.userLat, c.lng, c.lat) * 10) / 10;
    });
  }

  const ORDERS = [
    {
      id: "o1",
      title: "少儿足球启蒙班",
      kind: "兴趣课",
      time: "本周六 09:00",
      status: "待上课",
      amount: 128,
      tip: "上课前可请假；爽约未请假将收取全价",
    },
    {
      id: "o2",
      title: "小学数学培优班",
      kind: "学业课",
      time: "本周六 10:00",
      status: "待付本节",
      amount: 138,
      tip: "一次一付 · 上完课再结算给老师",
      pay: true,
    },
    {
      id: "o3",
      title: "钢琴启蒙一对多",
      kind: "兴趣课",
      time: "上周三 18:30",
      status: "已结算",
      amount: 168,
      tip: "已生成 168 积分，灌溉成长树",
      done: true,
    },
  ];

  const GIFTS = [
    { name: "精选绘本套装", points: 500 },
    { name: "儿童运动器材", points: 800 },
    { name: "课时抵扣券", points: 300 },
    { name: "少儿赛事门票", points: 1200 },
  ];

  const TEACHER_CLASSES = [
    { title: "少儿足球启蒙班", kind: "兴趣课", meta: "朝阳公园 · 12 人满员 · 已报 9", status: "招募中 75%" },
    { title: "小学数学培优班", kind: "学业课", meta: "太阳宫教室 · 8 人满员 · 已报 5", status: "招募中 63%" },
    { title: "钢琴启蒙一对多", kind: "兴趣课", meta: "三里屯琴房 · 6 人满员 · 已报 4", status: "招募中 67%" },
    { title: "高一物理同步辅导", kind: "学业课", meta: "亚运村 · 待发布确认", status: "草稿" },
  ];

  const RECHARGE_PACKS = [
    { id: "p100", pay: 100, bonus: 10, hot: false, label: "体验充值" },
    { id: "p300", pay: 300, bonus: 45, hot: true, label: "热门推荐" },
    { id: "p500", pay: 500, bonus: 90, hot: false, label: "超值加赠" },
    { id: "p1000", pay: 1000, bonus: 220, hot: false, label: "学期优选" },
  ];

  const AUTH_KEY = "zanban_auth";
  const TOKEN_KEY = "zanban_token";
  const WALLET_KEY = "zanban_wallet";
  const API_BASE = "";
  const STUDENT_VIEWS = new Set(["discover", "detail", "orders", "tree", "wallet"]);
  const TEACHER_VIEWS = new Set(["teacher", "teacher-classes"]);

  const state = {
    view: "landing",
    radius: 5,
    kind: "全部",
    category: "全部",
    grade: "all",
    age: "all",
    detailId: null,
    points: 1280,
    balance: 0,
    ledger: [],
    user: null,
    token: null,
    afterLogin: "discover",
    authConfig: { sms_ready: false, wechat_ready: false, amap_ready: false },
    userLng: null,
    userLat: null,
    locationLabel: "",
    mapReady: false,
  };

  const els = {
    landing: document.getElementById("view-landing"),
    shell: document.getElementById("appShell"),
    classList: document.getElementById("classList"),
    detail: document.getElementById("detailContent"),
    orderList: document.getElementById("orderList"),
    giftRow: document.getElementById("giftRow"),
    teacherList: document.getElementById("teacherClassList"),
    toast: document.getElementById("toast"),
    modal: document.getElementById("modal"),
    modalTitle: document.getElementById("modalTitle"),
    modalBody: document.getElementById("modalBody"),
    modalCancel: document.getElementById("modalCancel"),
    modalConfirm: document.getElementById("modalConfirm"),
    userPoints: document.getElementById("userPoints"),
    userBalance: document.getElementById("userBalance"),
    walletBalance: document.getElementById("walletBalance"),
    rechargeGrid: document.getElementById("rechargeGrid"),
    walletLedger: document.getElementById("walletLedger"),
    treePoints: document.getElementById("treePoints"),
    headerLoginBtn: document.getElementById("headerLoginBtn"),
    userLogged: document.getElementById("userLogged"),
    userAvatar: document.getElementById("userAvatar"),
    loginModal: document.getElementById("loginModal"),
    roleModal: document.getElementById("roleModal"),
    loginPhone: document.getElementById("loginPhone"),
    loginCode: document.getElementById("loginCode"),
    sendCodeBtn: document.getElementById("sendCodeBtn"),
    phoneLoginBtn: document.getElementById("phoneLoginBtn"),
    wechatLoginBtn: document.getElementById("wechatLoginBtn"),
    loginClose: document.getElementById("loginClose"),
  };

  let pendingEnroll = null;
  let codeTimer = null;
  let pendingAuth = null;
  let wechatQrLoaded = false;

  async function api(path, options = {}) {
    const headers = Object.assign({ "Content-Type": "application/json" }, options.headers || {});
    if (state.token) headers.Authorization = `Bearer ${state.token}`;
    const resp = await fetch(`${API_BASE}${path}`, {
      ...options,
      headers,
    });
    let data = null;
    try {
      data = await resp.json();
    } catch {
      data = null;
    }
    if (!resp.ok) {
      const detail = data?.detail;
      const msg = typeof detail === "string" ? detail : Array.isArray(detail) ? detail[0]?.msg : null;
      throw new Error(msg || `请求失败 (${resp.status})`);
    }
    return data;
  }

  function saveSession(user, token) {
    if (user && token) {
      localStorage.setItem(AUTH_KEY, JSON.stringify(user));
      localStorage.setItem(TOKEN_KEY, token);
      state.token = token;
    } else {
      localStorage.removeItem(AUTH_KEY);
      localStorage.removeItem(TOKEN_KEY);
      state.token = null;
    }
  }

  function loadSession() {
    try {
      const user = JSON.parse(localStorage.getItem(AUTH_KEY) || "null");
      const token = localStorage.getItem(TOKEN_KEY);
      if (user && token) {
        state.token = token;
        return user;
      }
    } catch {
      /* ignore */
    }
    return null;
  }

  function setMapLocText(text) {
    const el = document.getElementById("mapLoc");
    if (el) el.textContent = text;
  }

  function syncMapMarkers(opts = {}) {
    if (!window.ZanbanMap?.isReady?.()) return;
    const list = filteredClasses().map((c) => ({
      id: c.id,
      title: c.title,
      lng: c.lng,
      lat: c.lat,
    }));
    window.ZanbanMap.setMarkers(list, {
      fitView: opts.fitView === true && state.userLng == null,
      keepUserFocus: !!state.userLng,
    });
  }

  async function runLocate() {
    setMapLocText("定位中…");
    const btn = document.getElementById("mapLocateBtn");
    if (btn) btn.disabled = true;
    let result = null;
    try {
      if (window.ZanbanMap?.isReady?.()) {
        result = await window.ZanbanMap.locate();
      } else if (navigator.geolocation) {
        result = await new Promise((resolve) => {
          navigator.geolocation.getCurrentPosition(
            (pos) =>
              resolve({
                lng: pos.coords.longitude,
                lat: pos.coords.latitude,
                address: "",
                source: "browser",
              }),
            () => resolve(null),
            { enableHighAccuracy: true, timeout: 15000, maximumAge: 0 }
          );
        });
      }
    } finally {
      if (btn) btn.disabled = false;
    }

    if (!result) {
      setMapLocText(state.mapReady ? "定位失败 · 请允许浏览器定位权限后重试" : "未配置地图 · 已用默认朝阳距离");
      showToast("定位失败，请检查浏览器定位权限");
      return;
    }

    state.userLng = result.lng;
    state.userLat = result.lat;
    state.locationLabel = result.address || "当前位置";
    refreshDistancesFromUser();
    setMapLocText(
      result.address ? `我的位置 · ${result.address}` : `我的位置 · ${result.lat.toFixed(4)}, ${result.lng.toFixed(4)}`
    );
    if (state.view === "discover") {
      renderClasses();
    } else {
      syncMapMarkers();
    }
    // 刷新课程点后再次对准当前位置，避免视野被拉走
    requestAnimationFrame(() => window.ZanbanMap?.focusUser?.(16));
    showToast("已定位到当前位置");
  }

  async function ensureMap() {
    const plane = document.getElementById("mapPlane");
    const container = document.getElementById("amapContainer");
    const cfg = state.authConfig || {};
    if (!cfg.amap_ready || !cfg.amap_key || !window.ZanbanMap) {
      state.mapReady = false;
      plane?.classList.remove("is-live");
      setMapLocText("示意地图 · 配置 AMAP_KEY 后启用真实地图");
      await runLocate();
      return;
    }

    const ok = await window.ZanbanMap.init({
      key: cfg.amap_key,
      securityJsCode: cfg.amap_security_js_code || "",
      container,
      onMarkerClick: (id) => setView("detail", { detailId: Number(id) }),
      onError: () => {
        state.mapReady = false;
        plane?.classList.remove("is-live");
        setMapLocText("地图加载失败 · 请检查 Key / 安全密钥");
      },
    });

    state.mapReady = ok;
    if (ok) {
      plane?.classList.add("is-live");
      setMapLocText("地图已就绪 · 正在定位…");
      await runLocate();
      syncMapMarkers();
      requestAnimationFrame(() => window.ZanbanMap.resize?.());
    } else {
      plane?.classList.remove("is-live");
      await runLocate();
    }
  }

  async function refreshAuthConfig() {
    try {
      state.authConfig = await api("/api/auth/config");
      const hint = document.getElementById("loginHint");
      const whint = document.getElementById("wechatHint");
      if (hint) {
        if (state.authConfig.sms_ready) {
          hint.textContent = "验证码将发送至你的手机，5 分钟内有效";
        } else if (state.authConfig.sms_echo_mode) {
          hint.textContent = "当前为联调模式：点获取验证码后会直接显示验证码";
        } else {
          hint.textContent = "服务端未配置短信，请先在 .env 填写阿里云短信参数";
        }
      }
      if (whint) {
        whint.textContent = state.authConfig.wechat_ready
          ? "请使用微信扫描上方二维码完成登录"
          : "服务端未配置微信，请先在 .env 填写 WECHAT_APP_ID / SECRET";
      }
      ensureMap();
    } catch {
      state.authConfig = { sms_ready: false, wechat_ready: false, amap_ready: false };
      ensureMap();
    }
  }

  function walletStorageKey() {
    const uid = state.user?.id || "guest";
    return `${WALLET_KEY}:${uid}`;
  }

  function loadWallet() {
    try {
      const data = JSON.parse(localStorage.getItem(walletStorageKey()) || "null");
      if (data) {
        state.balance = Number(data.balance) || 0;
        state.ledger = Array.isArray(data.ledger) ? data.ledger : [];
      } else {
        state.balance = 0;
        state.ledger = [];
      }
    } catch {
      state.balance = 0;
      state.ledger = [];
    }
  }

  function saveWallet() {
    localStorage.setItem(
      walletStorageKey(),
      JSON.stringify({ balance: state.balance, ledger: state.ledger.slice(0, 30) })
    );
  }

  function pushLedger(title, amount, meta) {
    state.ledger.unshift({
      title,
      amount,
      meta,
      at: new Date().toLocaleString("zh-CN", { hour12: false }),
    });
    saveWallet();
  }

  function syncBalanceUI() {
    if (els.userBalance) els.userBalance.textContent = `余额 ¥${state.balance}`;
    if (els.walletBalance) els.walletBalance.textContent = String(state.balance);
  }

  function showToast(msg) {
    els.toast.textContent = msg;
    els.toast.hidden = false;
    clearTimeout(showToast._t);
    showToast._t = setTimeout(() => {
      els.toast.hidden = true;
    }, 2200);
  }

  function syncAuthUI() {
    const logged = !!state.user;
    const role = state.user?.role || null;
    if (els.headerLoginBtn) els.headerLoginBtn.hidden = logged;
    if (els.userLogged) els.userLogged.hidden = !logged;

    const landingLogin = document.getElementById("landingLoginBtn") || document.querySelector(".top-links .login-btn");
    if (landingLogin) {
      if (logged) {
        landingLogin.textContent = "进入平台";
        landingLogin.removeAttribute("data-login");
        landingLogin.dataset.nav = role === "teacher" ? "teacher" : "discover";
      } else {
        landingLogin.textContent = "登录";
        landingLogin.setAttribute("data-login", "");
        delete landingLogin.dataset.nav;
      }
    }

    document.querySelectorAll(".app-nav-item").forEach((btn) => {
      const forRole = btn.dataset.for;
      const show = !forRole || forRole === role;
      btn.hidden = !show;
      if (!show) btn.classList.remove("is-active");
    });

    if (els.shell) {
      els.shell.classList.toggle("role-student", role === "student");
      els.shell.classList.toggle("role-teacher", role === "teacher");
    }

    if (logged) {
      const mark = role === "teacher" ? "师" : "学";
      if (els.userAvatar) els.userAvatar.textContent = mark;
      if (els.userPoints) {
        els.userPoints.hidden = role === "teacher";
        els.userPoints.textContent = `${state.points} 积分`;
      }
      if (els.userBalance) {
        els.userBalance.hidden = role === "teacher";
      }
      if (els.treePoints) els.treePoints.textContent = String(state.points);
      if (role === "student") {
        loadWallet();
        syncBalanceUI();
      }
    }
  }

  function defaultViewForRole(role) {
    return role === "teacher" ? "teacher" : "discover";
  }

  function resolveViewForRole(name) {
    const role = state.user?.role;
    if (!role) return name === "landing" ? "landing" : name;
    if (role === "student" && TEACHER_VIEWS.has(name)) return "discover";
    if (role === "teacher" && STUDENT_VIEWS.has(name)) return "teacher";
    return name;
  }

  function openLogin(after = "discover") {
    if (state.user) {
      setView(resolveViewForRole(after || defaultViewForRole(state.user.role)));
      return;
    }
    state.afterLogin = after || "discover";
    els.loginModal.hidden = false;
    switchLoginTab("phone");
    refreshAuthConfig();
    els.loginPhone?.focus();
  }

  function closeLogin() {
    els.loginModal.hidden = true;
  }

  function switchLoginTab(tab) {
    document.querySelectorAll(".login-tab").forEach((t) => {
      const on = t.dataset.loginTab === tab;
      t.classList.toggle("is-active", on);
      t.setAttribute("aria-selected", on ? "true" : "false");
    });
    document.querySelectorAll(".login-panel").forEach((p) => {
      p.hidden = p.dataset.panel !== tab;
      p.classList.toggle("is-active", p.dataset.panel === tab);
    });
    if (tab === "wechat") {
      loadWechatQr().catch((err) => showToast(err.message || "微信二维码加载失败"));
    }
  }

  function startCodeCountdown(seconds = 60) {
    let left = seconds;
    els.sendCodeBtn.disabled = true;
    els.sendCodeBtn.textContent = `${left}s 后重发`;
    clearInterval(codeTimer);
    codeTimer = setInterval(() => {
      left -= 1;
      if (left <= 0) {
        clearInterval(codeTimer);
        els.sendCodeBtn.disabled = false;
        els.sendCodeBtn.textContent = "获取验证码";
      } else {
        els.sendCodeBtn.textContent = `${left}s 后重发`;
      }
    }, 1000);
  }

  function finishServerLogin({ token, user, is_new: isNew }) {
    closeLogin();
    state.token = token;
    if (isNew || !user.role) {
      pendingAuth = { token, user };
      saveSession({ ...user, role: null }, token);
      els.roleModal.hidden = false;
      return;
    }
    applyUser(user, token);
    enterAfterLogin();
  }

  function applyUser(user, token = state.token) {
    state.user = user;
    state.points = user.points ?? 0;
    saveSession(user, token);
    loadWallet();
    syncAuthUI();
  }

  function enterAfterLogin() {
    let after = state.afterLogin || defaultViewForRole(state.user.role);
    after = resolveViewForRole(after);
    setView(after);
    const label = state.user.role === "teacher" ? "老师" : "学生";
    showToast(`登录成功 · 已进入${label}端`);
  }

  async function completeRole(role) {
    if (!state.token && !pendingAuth?.token) return;
    if (pendingAuth?.token) state.token = pendingAuth.token;
    try {
      const data = await api("/api/auth/role", {
        method: "POST",
        body: JSON.stringify({ role }),
      });
      pendingAuth = null;
      els.roleModal.hidden = true;
      applyUser(data.user, data.token);
      state.afterLogin = defaultViewForRole(role);
      enterAfterLogin();
    } catch (err) {
      showToast(err.message || "身份设置失败");
    }
  }

  function logout() {
    state.user = null;
    saveSession(null);
    syncAuthUI();
    wechatQrLoaded = false;
    showToast("已退出登录");
    setView("landing");
  }

  async function sendSmsCode() {
    const phone = (els.loginPhone.value || "").trim();
    if (!/^1\d{10}$/.test(phone)) {
      showToast("请先输入正确手机号");
      return;
    }
    els.sendCodeBtn.disabled = true;
    try {
      const data = await api("/api/auth/sms/send", {
        method: "POST",
        body: JSON.stringify({ phone }),
      });
      startCodeCountdown(data.cooldown || 60);
      if (data.dev_code) {
        if (els.loginCode) els.loginCode.value = data.dev_code;
        showToast(`联调验证码：${data.dev_code}`);
      } else {
        showToast(data.message || "验证码已发送");
      }
    } catch (err) {
      els.sendCodeBtn.disabled = false;
      showToast(err.message || "发送失败");
    }
  }

  async function attemptPhoneLogin() {
    const phone = (els.loginPhone.value || "").trim();
    const code = (els.loginCode.value || "").trim();
    if (!/^1\d{10}$/.test(phone)) {
      showToast("请输入正确的 11 位手机号");
      return;
    }
    if (!/^\d{4,8}$/.test(code)) {
      showToast("请输入短信验证码");
      return;
    }
    els.phoneLoginBtn.disabled = true;
    try {
      const data = await api("/api/auth/sms/login", {
        method: "POST",
        body: JSON.stringify({ phone, code }),
      });
      finishServerLogin(data);
    } catch (err) {
      showToast(err.message || "登录失败");
    } finally {
      els.phoneLoginBtn.disabled = false;
    }
  }

  async function loadWechatQr() {
    const host = document.getElementById("wechatQrHost");
    const placeholder = document.getElementById("wechatQrPlaceholder");
    if (!host) return;
    if (!state.authConfig.wechat_ready) {
      await refreshAuthConfig();
    }
    if (!state.authConfig.wechat_ready) {
      if (placeholder) placeholder.textContent = "未配置微信扫码，请检查服务端 .env";
      throw new Error("未配置微信开放平台扫码登录");
    }

    const prepare = await api("/api/auth/wechat/prepare");
    host.innerHTML = "";
    if (typeof WwLogin !== "undefined" || typeof WxLogin !== "undefined") {
      const Ctor = window.WxLogin || window.WwLogin;
      // eslint-disable-next-line no-new
      new Ctor({
        self_redirect: false,
        id: "wechatQrHost",
        appid: prepare.appid,
        scope: prepare.scope || "snsapi_login",
        redirect_uri: encodeURIComponent(prepare.redirect_uri),
        state: prepare.state,
        style: "black",
        href: "",
      });
      wechatQrLoaded = true;
      els.wechatLoginBtn.textContent = "刷新二维码";
      return;
    }

    // SDK 不可用时，退化为新窗口打开官方扫码页
    host.innerHTML = `<p class="wechat-qr-placeholder">即将打开微信扫码页</p>`;
    window.open(prepare.qrconnect_url, "_blank", "width=520,height=640");
    wechatQrLoaded = true;
    els.wechatLoginBtn.textContent = "重新打开扫码";
  }

  async function attemptWechatLogin() {
    try {
      await loadWechatQr();
      if (wechatQrLoaded) showToast("请使用微信扫描二维码");
    } catch (err) {
      showToast(err.message || "微信登录不可用");
    }
  }

  function handleWechatCallbackFromUrl() {
    const params = new URLSearchParams(location.search);
    const token = params.get("wechat_token");
    if (!token) return false;
    const isNew = params.get("is_new") === "1";
    // 清掉 URL 参数，避免刷新重复消费
    history.replaceState(null, "", location.pathname + location.hash);
    state.token = token;
    api("/api/auth/me")
      .then((data) => {
        finishServerLogin({ token, user: data.user, is_new: isNew || !data.user.role });
      })
      .catch(() => showToast("微信登录态无效，请重试"));
    return true;
  }

  function setView(name, opts = {}) {
    if (name !== "landing" && state.user) {
      name = resolveViewForRole(name);
    }
    state.view = name;
    if (opts.detailId != null) state.detailId = opts.detailId;

    const isLanding = name === "landing";
    els.landing.classList.toggle("is-active", isLanding);
    els.shell.hidden = isLanding;

    if (!isLanding) {
      syncAuthUI();
      document.querySelectorAll(".app-main > .view").forEach((v) => {
        v.classList.toggle("is-active", v.dataset.view === name);
      });
      document.querySelectorAll(".app-nav-item").forEach((btn) => {
        const active =
          btn.dataset.nav === name ||
          (name === "detail" && btn.dataset.nav === "discover");
        btn.classList.toggle("is-active", active && !btn.hidden);
      });
    }

    if (name === "discover") {
      updateSubjectChips();
      updateGradeFilter();
      renderClasses();
      requestAnimationFrame(() => window.ZanbanMap?.resize?.());
    }
    if (name === "detail") renderDetail();
    if (name === "orders") renderOrders();
    if (name === "wallet") renderWallet();
    if (name === "tree") renderGifts();
    if (name === "teacher" || name === "teacher-classes") renderTeacher();

    window.scrollTo({ top: 0, behavior: "smooth" });
    history.replaceState(null, "", `#${name}`);
  }

  function updateSubjectChips() {
    const wrap = document.getElementById("filterCategory");
    if (!wrap) return;
    wrap.querySelectorAll(".chip[data-kind-tag]").forEach((chip) => {
      const show = state.kind === "全部" || chip.dataset.kindTag === state.kind;
      chip.hidden = !show;
      if (!show && chip.classList.contains("is-active")) {
        chip.classList.remove("is-active");
        state.category = "全部";
        wrap.querySelector('[data-cat="全部"]')?.classList.add("is-active");
      }
    });
  }

  function isAcademicCategory(category) {
    if (!category || category === "全部") return false;
    const chip = document.querySelector(`#filterCategory .chip[data-cat="${category}"]`);
    return chip?.dataset.kindTag === "学业课";
  }

  function updateGradeFilter() {
    const block = document.getElementById("filterGradeBlock");
    if (!block) return;
    const show = state.kind === "学业课" || (state.kind === "全部" && isAcademicCategory(state.category));
    block.hidden = !show;
    if (!show && state.grade !== "all") {
      state.grade = "all";
      const wrap = document.getElementById("filterGrade");
      wrap?.querySelectorAll(".chip").forEach((c) => c.classList.remove("is-active"));
      wrap?.querySelector('[data-grade="all"]')?.classList.add("is-active");
    }
  }

  function matchGrade(grade, filter) {
    if (!grade) return false;
    if (filter === "小学") return grade.startsWith("小学");
    return grade === filter;
  }

  function filteredClasses() {
    return CLASSES.filter((c) => {
      if (c.distance > state.radius) return false;
      if (state.kind !== "全部" && c.kind !== state.kind) return false;
      if (state.category !== "全部" && c.category !== state.category) return false;
      if (state.grade !== "all") {
        if (c.kind !== "学业课" || !matchGrade(c.grade, state.grade)) return false;
      }
      if (state.age !== "all") {
        const a = Number(state.age);
        if (a === 6 && (c.ageMax < 6 || c.ageMin > 8)) return false;
        if (a === 9 && (c.ageMax < 9 || c.ageMin > 12)) return false;
        if (a === 13 && c.ageMax < 13) return false;
      }
      return true;
    });
  }

  function renderClasses() {
    const list = filteredClasses();
    if (!list.length) {
      els.classList.innerHTML = `<p class="page-desc" style="padding:1.5rem var(--pad-x)">附近暂无匹配课程，试试切换兴趣课 / 学业课或扩大距离。</p>`;
      syncMapMarkers();
      return;
    }
    els.classList.innerHTML = list
      .map((c) => {
        const pct = Math.round((c.enrolled / c.capacity) * 100);
        return `
        <button type="button" class="class-item" data-open="${c.id}">
          <div>
            <h3>${c.title}</h3>
            <p class="class-meta"><span class="kind-pill">${c.kind}</span> ${c.category}${c.grade ? ` · ${c.grade}` : ""} · ${c.level} · ${c.ageMin}–${c.ageMax} 岁 · ${c.distance} km</p>
            <p class="class-meta">${c.venue} · ${c.time}</p>
          </div>
          <div class="class-price">¥${c.price}<small>一课一结</small></div>
          <div class="progress-mini">
            <div class="track"><i style="width:${pct}%"></i></div>
            <span class="label">${c.enrolled}/${c.capacity} · ${c.status}</span>
          </div>
        </button>`;
      })
      .join("");
    syncMapMarkers();
  }

  function renderDetail() {
    const c = CLASSES.find((x) => x.id === state.detailId) || CLASSES[0];
    const pct = Math.round((c.enrolled / c.capacity) * 100);
    const full = c.enrolled >= c.capacity;
    const balOk = state.balance >= c.price;
    els.detail.innerHTML = `
      <div class="detail-info">
        <div class="detail-tags">
          <span class="tag tag-kind">${c.kind}</span>
          <span class="tag">${c.category}</span>
          ${c.grade ? `<span class="tag">${c.grade}</span>` : ""}
          <span class="tag">${c.level}</span>
          <span class="tag">${c.ageMin}–${c.ageMax} 岁</span>
          <span class="tag">${c.distance} km</span>
        </div>
        <h2>${c.title}</h2>
        <div class="detail-block">
          <h4>场地与时间</h4>
          <p>${c.venue}</p>
          <p>${c.time}</p>
        </div>
        <div class="detail-block">
          <h4>成班规则</h4>
          <ul>
            <li>满 ${c.capacity} 人开班，人齐后通知开课</li>
            <li>报名 24 小时冷静期，无条件全额退</li>
            <li>未成班自动全额退；提前 ≥24h 请假不计课</li>
          </ul>
        </div>
        <div class="detail-block">
          <h4>付费说明</h4>
          <p>先充值课卡（充得多送得多），开课后自动从余额扣一节；也可单节支付。不上课不收费，资金由平台托管。</p>
        </div>
      </div>
      <aside class="detail-aside">
        <div class="enroll-card">
          <p class="enroll-price">¥${c.price}<span>/ 节</span></p>
          <p class="enroll-balance-tip">${
            state.user?.role === "student"
              ? balOk
                ? `课卡余额 ¥${state.balance} · 开课后可自动扣款`
                : `课卡余额 ¥${state.balance} · <button type="button" class="linkish" data-nav="wallet">去充值享优惠</button>`
              : "登录学生账号后可用课卡余额自动扣款"
          }</p>
          <div class="enroll-progress">
            <div class="nums"><span>成班进度</span><span>${c.enrolled} / ${c.capacity}</span></div>
            <div class="bar"><i style="width:${pct}%"></i></div>
          </div>
          <button type="button" class="btn-primary" style="width:100%" data-enroll="${c.id}" ${full ? "disabled" : ""}>
            ${full ? "已满员 · 已成班" : "报名占坑"}
          </button>
          <div class="teacher-line">
            <div class="teacher-avatar">${c.teacher.slice(0, 1)}</div>
            <div>
              <strong>${c.teacher}</strong>
              <span>信用 ${c.credit} · 课时费 ¥${c.fee}</span>
            </div>
          </div>
        </div>
        <div class="detail-art"><img src="${c.art}" alt="" /></div>
      </aside>`;
  }

  function renderOrders() {
    els.orderList.innerHTML = ORDERS.map((o) => {
      let payBtn = "";
      if (o.pay) {
        if (state.balance >= o.amount) {
          payBtn = `<button type="button" class="pay" data-pay="${o.id}">课卡支付 ¥${o.amount}</button>`;
        } else {
          payBtn = `<button type="button" class="pay" data-pay="${o.id}" data-need-recharge="1">余额不足 · 去充值</button>`;
        }
      }
      return `
      <article class="order-item">
        <h3>${o.title}</h3>
        <span class="order-status ${o.done ? "done" : ""}">${o.status}</span>
        <p class="order-meta"><span class="kind-pill">${o.kind || "课程"}</span> ${o.time} · ¥${o.amount} · ${o.tip}</p>
        <div class="order-actions">
          ${payBtn}
          ${!o.done && !o.pay ? `<button type="button" data-leave="${o.id}">请假</button>` : ""}
          ${!o.done ? `<button type="button" data-refund="${o.id}">申请退款</button>` : ""}
          ${o.done ? `<button type="button" data-review="${o.id}">评价老师</button>` : ""}
        </div>
      </article>`;
    }).join("");
  }

  function renderWallet() {
    if (!els.rechargeGrid || !els.walletLedger) return;
    syncBalanceUI();
    els.rechargeGrid.innerHTML = RECHARGE_PACKS.map(
      (p) => `
      <button type="button" class="recharge-pack${p.hot ? " is-hot" : ""}" data-recharge="${p.id}">
        <span class="pay">¥${p.pay}<small>实付</small></span>
        <span class="bonus">送 ¥${p.bonus}${p.hot ? " · 热门" : ""}</span>
        <span class="get">到账 ¥${p.pay + p.bonus} · ${p.label}</span>
      </button>`
    ).join("");

    if (!state.ledger.length) {
      els.walletLedger.innerHTML = `<p class="ledger-empty">暂无流水 · 充值或上课扣款后会出现在这里</p>`;
      return;
    }
    els.walletLedger.innerHTML = state.ledger
      .map(
        (row) => `
      <div class="ledger-item">
        <div>
          <span class="title">${row.title}</span>
          <span class="meta">${row.meta || ""} · ${row.at}</span>
        </div>
        <span class="amt ${row.amount >= 0 ? "plus" : "minus"}">${row.amount >= 0 ? "+" : ""}¥${Math.abs(row.amount)}</span>
      </div>`
      )
      .join("");
  }

  function doRecharge(packId) {
    if (!state.user) {
      openLogin("wallet");
      showToast("请先登录后再充值");
      return;
    }
    if (state.user.role !== "student") {
      showToast("课卡充值仅对学生开放");
      return;
    }
    const pack = RECHARGE_PACKS.find((p) => p.id === packId);
    if (!pack) return;
    const credit = pack.pay + pack.bonus;
    state.balance += credit;
    pushLedger(`充值 ¥${pack.pay}`, credit, `赠送 ¥${pack.bonus} · ${pack.label}`);
    syncBalanceUI();
    renderWallet();
    showToast(`充值成功 · 到账 ¥${credit}（含赠送 ¥${pack.bonus}）`);
  }

  function payWithWallet(order) {
    if (state.balance < order.amount) {
      showToast(`余额不足，还差 ¥${order.amount - state.balance}，去课卡充值更划算`);
      setView("wallet");
      return false;
    }
    state.balance -= order.amount;
    state.points += order.amount;
    if (state.user) {
      state.user.points = state.points;
      saveSession(state.user, state.token);
    }
    pushLedger(`上课扣款 · ${order.title}`, -order.amount, `一课一结 · ¥${order.amount}`);
    order.pay = false;
    order.done = true;
    order.status = "已结算";
    order.tip = `课卡已扣 ¥${order.amount}，积分 +${order.amount}`;
    syncBalanceUI();
    if (els.userPoints) els.userPoints.textContent = `${state.points} 积分`;
    if (els.treePoints) els.treePoints.textContent = String(state.points);
    renderOrders();
    showToast(`课卡支付成功 · 已扣 ¥${order.amount}，积分 +${order.amount}`);
    return true;
  }

  function renderGifts() {
    els.giftRow.innerHTML = GIFTS.map(
      (g) => `
      <button type="button" class="gift-item" data-gift="${g.points}">
        <strong>${g.name}</strong>
        <span>${g.points} 积分兑换</span>
      </button>`
    ).join("");
  }

  function renderTeacher() {
    els.teacherList.innerHTML = TEACHER_CLASSES.map(
      (t) => `
      <article class="t-class-item">
        <h4>${t.title}</h4>
        <span class="status">${t.status}</span>
        <p class="meta"><span class="kind-pill">${t.kind || "课程"}</span> ${t.meta}</p>
      </article>`
    ).join("");
  }

  function openEnrollModal(id) {
    if (!state.user) {
      openLogin("discover");
      showToast("请先登录后再报名");
      return;
    }
    const c = CLASSES.find((x) => x.id === id);
    if (!c) return;
    pendingEnroll = c;
    els.modalTitle.textContent = "确认报名占坑";
    const balTip =
      state.balance >= c.price
        ? `课卡余额 ¥${state.balance}，开课后将自动扣款 ¥${c.price}。`
        : `课卡余额 ¥${state.balance}，建议先充值（有赠送），开课后可自动扣款。`;
    els.modalBody.textContent = `「${c.title}」当前 ${c.enrolled}/${c.capacity} 人。占坑后进入 24 小时冷静期，未成班将全额退款。${balTip}`;
    els.modal.hidden = false;
  }

  function confirmEnroll() {
    if (!pendingEnroll) return;
    const c = pendingEnroll;
    if (c.enrolled < c.capacity) c.enrolled += 1;
    pendingEnroll = null;
    els.modal.hidden = true;
    showToast("报名成功，已为你占好位置");
    setView("orders");
  }

  function bindChips(containerId, attr, key) {
    const wrap = document.getElementById(containerId);
    if (!wrap) return;
    wrap.addEventListener("click", (e) => {
      const btn = e.target.closest(".chip");
      if (!btn || btn.hidden) return;
      wrap.querySelectorAll(".chip").forEach((c) => c.classList.remove("is-active"));
      btn.classList.add("is-active");
      const val = btn.dataset[attr];
      if (attr === "radius" || attr === "age") {
        state[key] = val === "all" ? "all" : Number(val);
      } else {
        state[key] = val;
      }
      if (key === "kind") {
        state.category = "全部";
        updateSubjectChips();
        const catWrap = document.getElementById("filterCategory");
        catWrap?.querySelectorAll(".chip").forEach((c) => c.classList.remove("is-active"));
        catWrap?.querySelector('[data-cat="全部"]')?.classList.add("is-active");
      }
      if (key === "kind" || key === "category") {
        updateGradeFilter();
      }
      renderClasses();
    });
  }

  document.addEventListener("click", (e) => {
    const loginBtn = e.target.closest("[data-login]");
    if (loginBtn) {
      e.preventDefault();
      openLogin(loginBtn.dataset.after || "discover");
      return;
    }

    const loginTab = e.target.closest("[data-login-tab]");
    if (loginTab) {
      switchLoginTab(loginTab.dataset.loginTab);
      return;
    }

    const roleCard = e.target.closest("[data-role]");
    if (roleCard) {
      completeRole(roleCard.dataset.role);
      return;
    }

    const nav = e.target.closest("[data-nav]");
    if (nav) {
      e.preventDefault();
      setView(nav.dataset.nav);
      return;
    }

    const open = e.target.closest("[data-open]");
    if (open) {
      setView("detail", { detailId: Number(open.dataset.open) });
      return;
    }

    const enroll = e.target.closest("[data-enroll]");
    if (enroll && !enroll.disabled) {
      openEnrollModal(Number(enroll.dataset.enroll));
      return;
    }

    const recharge = e.target.closest("[data-recharge]");
    if (recharge) {
      doRecharge(recharge.dataset.recharge);
      return;
    }

    const pay = e.target.closest("[data-pay]");
    if (pay) {
      if (!state.user) {
        openLogin("orders");
        return;
      }
      if (state.user.role !== "student") {
        showToast("请使用学生账号支付课程");
        return;
      }
      const order = ORDERS.find((o) => o.id === pay.dataset.pay);
      if (!order || !order.pay) return;
      if (pay.dataset.needRecharge === "1" || state.balance < order.amount) {
        showToast("余额不足，先充值课卡可享赠送优惠");
        setView("wallet");
        return;
      }
      payWithWallet(order);
      return;
    }

    const leave = e.target.closest("[data-leave]");
    if (leave) {
      showToast("请假成功，本节不计课时");
      return;
    }

    const refund = e.target.closest("[data-refund]");
    if (refund) {
      showToast("退款申请已提交，未消费课时将原路退回");
      return;
    }

    const review = e.target.closest("[data-review]");
    if (review) {
      showToast("感谢评价，老师信用分已更新");
      return;
    }

    const gift = e.target.closest("[data-gift]");
    if (gift) {
      if (!state.user) {
        openLogin("tree");
        return;
      }
      const need = Number(gift.dataset.gift);
      if (state.points >= need) {
        state.points -= need;
        state.user.points = state.points;
        saveSession(state.user, state.token);
        els.userPoints.textContent = `${state.points} 积分`;
        els.treePoints.textContent = String(state.points);
        showToast("兑换成功，礼物将寄送到绑定地址");
      } else {
        showToast("积分不足，继续上课就能攒够");
      }
    }
  });

  els.modalCancel.addEventListener("click", () => {
    els.modal.hidden = true;
    pendingEnroll = null;
  });
  els.modalConfirm.addEventListener("click", confirmEnroll);
  els.modal.addEventListener("click", (e) => {
    if (e.target === els.modal) {
      els.modal.hidden = true;
      pendingEnroll = null;
    }
  });

  els.loginClose?.addEventListener("click", closeLogin);
  els.loginModal?.addEventListener("click", (e) => {
    if (e.target === els.loginModal) closeLogin();
  });
  els.sendCodeBtn?.addEventListener("click", () => {
    sendSmsCode();
  });
  els.phoneLoginBtn?.addEventListener("click", attemptPhoneLogin);
  els.wechatLoginBtn?.addEventListener("click", attemptWechatLogin);
  els.loginCode?.addEventListener("keydown", (e) => {
    if (e.key === "Enter") attemptPhoneLogin();
  });
  els.userAvatar?.addEventListener("click", logout);
  els.userBalance?.addEventListener("click", () => {
    if (state.user?.role === "student") setView("wallet");
  });

  window.addEventListener("message", (event) => {
    const data = event.data;
    if (!data || data.type !== "zanban-wechat-login" || !data.token) return;
    state.token = data.token;
    api("/api/auth/me")
      .then((res) => {
        finishServerLogin({
          token: data.token,
          user: res.user,
          is_new: !!data.is_new || !res.user.role,
        });
      })
      .catch(() => showToast("微信登录失败"));
  });

  const publishBtn = document.getElementById("publishBtn");
  if (publishBtn) {
    publishBtn.addEventListener("click", () => {
      if (!state.user) {
        openLogin("teacher-classes");
        return;
      }
      if (state.user.role !== "teacher") {
        showToast("请使用老师身份发布课程");
        return;
      }
      showToast("可发布兴趣课或学业课 · 完整表单稍后接入");
    });
  }

  bindChips("filterKind", "kind", "kind");
  bindChips("filterDistance", "radius", "radius");
  bindChips("filterCategory", "cat", "category");
  bindChips("filterGrade", "grade", "grade");
  bindChips("filterAge", "age", "age");

  document.getElementById("mapLocateBtn")?.addEventListener("click", () => {
    runLocate();
  });

  refreshAuthConfig();

  if (!handleWechatCallbackFromUrl()) {
    const session = loadSession();
    if (session && state.token) {
      api("/api/auth/me")
        .then((data) => {
          applyUser(data.user, state.token);
          const hash = location.hash.replace("#", "");
          const start = ["landing", "discover", "detail", "orders", "wallet", "tree", "teacher", "teacher-classes"].includes(hash)
            ? hash
            : "landing";
          if (start === "detail") setView("discover");
          else if (start !== "landing" && !data.user.role) setView("landing");
          else setView(start);
        })
        .catch(() => {
          saveSession(null);
          syncAuthUI();
          setView("landing");
        });
    } else {
      syncAuthUI();
      const hash = location.hash.replace("#", "");
      const start = ["landing", "discover", "detail", "orders", "wallet", "tree", "teacher", "teacher-classes"].includes(hash)
        ? hash
        : "landing";
      if (start === "detail") setView("discover");
      else if (start !== "landing" && !state.user) setView("landing");
      else setView(start);
    }
  } else {
    syncAuthUI();
    setView("landing");
  }
})();
