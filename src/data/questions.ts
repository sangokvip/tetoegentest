export interface QuizQuestion {
  id: number;
  text: string;
  emoji: string;
  options: {
    text: string;
    value: "teto" | "egen" | "middle";
  }[];
}

export const questions: QuizQuestion[] = [
  {
    id: 1,
    text: "在朋友聚会中我...",
    emoji: "👥",
    options: [
      { text: "主导引领气氛", value: "teto" },
      { text: "配合气氛自然参与", value: "middle" },
      { text: "安静地倾听并参与", value: "egen" }
    ]
  },
  {
    id: 2,
    text: "遇到冲突时我...",
    emoji: "⚡",
    options: [
      { text: "直接解决问题", value: "teto" },
      { text: "观察情况等待时机", value: "middle" },
      { text: "情感上受伤并想回避", value: "egen" }
    ]
  },
  {
    id: 3,
    text: "适应新环境时我...",
    emoji: "🌟",
    options: [
      { text: "快速适应并探索周围", value: "teto" },
      { text: "给自己时间慢慢适应", value: "middle" },
      { text: "感到不安并谨慎行事", value: "egen" }
    ]
  },
  {
    id: 4,
    text: "恋爱时我的风格是...",
    emoji: "💕",
    options: [
      { text: "积极主动追求", value: "teto" },
      { text: "根据情况灵活应对", value: "middle" },
      { text: "等待对方先靠近", value: "egen" }
    ]
  },
  {
    id: 5,
    text: "压力大时我...",
    emoji: "😤",
    options: [
      { text: "通过运动或活动缓解", value: "teto" },
      { text: "通过和朋友聊天缓解", value: "middle" },
      { text: "通过独处时光缓解", value: "egen" }
    ]
  },
  {
    id: 6,
    text: "做决定时我...",
    emoji: "🤔",
    options: [
      { text: "凭直觉和逻辑快速决定", value: "teto" },
      { text: "听取多方意见后决定", value: "middle" },
      { text: "以情感和直觉为主决定", value: "egen" }
    ]
  },
  {
    id: 7,
    text: "选择爱好时我...",
    emoji: "🎪",
    options: [
      { text: "喜欢活跃有挑战性的", value: "teto" },
      { text: "喜欢和人一起的活动", value: "middle" },
      { text: "喜欢安静有创意的", value: "egen" }
    ]
  },
  {
    id: 8,
    text: "关于情感表达我...",
    emoji: "😊",
    options: [
      { text: "用行动表达情感", value: "teto" },
      { text: "根据情况适当表达", value: "middle" },
      { text: "用语言和细腑方式传达", value: "egen" }
    ]
  },
  {
    id: 9,
    text: "关于穿搭和外貌管理...",
    emoji: "👗",
    options: [
      { text: "偏好实用简洁的风格", value: "teto" },
      { text: "根据场合选择合适风格", value: "middle" },
      { text: "对潮流精致的风格很感兴趣", value: "egen" }
    ]
  },
  {
    id: 10,
    text: "在友谊中我...",
    emoji: "🤝",
    options: [
      { text: "维持广泛多样的人际关系", value: "teto" },
      { text: "与适量朋友保持关系", value: "middle" },
      { text: "偏好少数深入的友谊", value: "egen" }
    ]
  },
  {
    id: 11,
    text: "制定计划时我...",
    emoji: "📋",
    options: [
      { text: "只定大框架然后随机应变", value: "teto" },
      { text: "制定基本计划但灵活调整", value: "middle" },
      { text: "谨慎地计划每个细节", value: "egen" }
    ]
  },
  {
    id: 12,
    text: "对于他人的意见我...",
    emoji: "💭",
    options: [
      { text: "明确表达自己的观点", value: "teto" },
      { text: "考虑对方意见并沟通", value: "middle" },
      { text: "共情并配合他人意见", value: "egen" }
    ]
  },
  {
    id: 13,
    text: "在竞争中我...",
    emoji: "🏆",
    options: [
      { text: "积极努力争取胜利", value: "teto" },
      { text: "尽力而为但不执着于结果", value: "middle" },
      { text: "比起竞争更喜欢合作", value: "egen" }
    ]
  },
  {
    id: 14,
    text: "休息时我...",
    emoji: "🛋️",
    options: [
      { text: "做些活跃的事情", value: "teto" },
      { text: "根据情况多样化休息", value: "middle" },
      { text: "安静地享受独处时光", value: "egen" }
    ]
  },
  {
    id: 15,
    text: "解决问题时我...",
    emoji: "🔧",
    options: [
      { text: "偏好实用高效的方法", value: "teto" },
      { text: "从多角度综合考虑", value: "middle" },
      { text: "偏好创意感性的方式", value: "egen" }
    ]
  },
  {
    id: 16,
    text: "社交媒体使用习惯...",
    emoji: "📱",
    options: [
      { text: "快速查看动态并简单互动", value: "teto" },
      { text: "适度使用，有需要时才用", value: "middle" },
      { text: "发布感性内容并细心经营", value: "egen" }
    ]
  },
  {
    id: 17,
    text: "关于音乐品味...",
    emoji: "🎵",
    options: [
      { text: "喜欢欢快充满活力的音乐", value: "teto" },
      { text: "根据情况听各种风格", value: "middle" },
      { text: "喜欢感性担情的音乐", value: "egen" }
    ]
  }
];

export const genderQuestion = {
  id: 18,
  text: "我的性别是？",
  emoji: "⚧️",
  options: [
    { text: "男性", value: "male" },
    { text: "女性", value: "female" }
  ]
};
