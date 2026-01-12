export interface PersonalityType {
  type: string;
  emoji: string;
  image: string;
  colorClass: string;
  bgGradient: string;
  title: string;
  analysis: string;
  traits: string[];
  description: string;
  characters: string;
  summary: string;
  compatibility: string;
  loveStyle: string;
}

export const personalityTypes: Record<string, PersonalityType> = {
  "teto_male": {
    type: "TETO型男",
    emoji: "🦁",
    image: "/테토남.png",
    colorClass: "from-red-500 to-orange-500",
    bgGradient: "bg-gradient-to-r from-red-500 to-orange-500",
    title: "领导力强的男性型",
    analysis: "即兴且逻辑为主，更倾向于用行动而非情感来表达。具有典型的T（思考型）特征，是主导型、现实主义的TETO型男。",
    traits: [
      "🎯 目标导向，执行力强",
      "👥 善于社交，具有领导力", 
      "💪 热爱挑战，不惧竞争",
      "🚀 决策迅速，行动果断",
      "🏃‍♂️ 精力充沛，充满活力"
    ],
    description: "不受他人期望左右，重视独立思考。无论别人怎么说，都有自己明确的标准，是选择效率而非情感的类型。在恋爱中也很主动，偏好直接的表达方式。",
    characters: "雷（EVA）、托尼·斯塔克（钢铁侠）、李准基（太阳的后裔）",
    summary: "我按自己的方式生活，不管别人怎么说。",
    compatibility: "与EGEN型女最匹配，与TETO型女可能会产生竞争关系。",
    loveStyle: "喜欢积极直接的追求方式，用行动表达爱意。"
  },
  "egen_male": {
    type: "EGEN型男",
    emoji: "🎨",
    image: "/에겐남.png",
    colorClass: "from-purple-500 to-pink-500",
    bgGradient: "bg-gradient-to-r from-purple-500 to-pink-500",
    title: "感性丰富的男性型",
    analysis: "感受力强，对他人的情感反应敏锐。艺术感觉出色，重视内心世界，是典型的F（情感型）EGEN型男。",
    traits: [
      "🎭 情感表达丰富，共情能力强",
      "🎨 具有艺术感觉和创造力",
      "🤝 重视与他人的和谐与合作",
      "💭 思想深刻，具有哲学性",
      "🌸 细腻体贴，充满关怀"
    ],
    description: "重视内心的情感与感性，追求与他人的深层交流。对潮流敏感，审美能力出色，偏好细腻的沟通方式。",
    characters: "李道贤（德鲁纳酒店）、朴叙俊（梨泰院Class）、车银优（我的ID是江南美人）",
    summary: "情感与艺术让我的生活更加丰富。",
    compatibility: "与TETO型女很匹配，与EGEN型女因性格相似可以深度理解彼此。",
    loveStyle: "偏好浪漫感性的恋爱，重视细心的关怀和共情。"
  },
  "teto_female": {
    type: "TETO型女", 
    emoji: "⚡",
    image: "/테토녀.png",
    colorClass: "from-teal-500 to-blue-500",
    bgGradient: "bg-gradient-to-r from-teal-500 to-blue-500",
    title: "活泼独立的女性型",
    analysis: "活力充沛、积极主动，独立且有主见。是将逻辑判断置于情感之上的TETO型女。",
    traits: [
      "💪 独立自主，自立能力强",
      "🏃‍♀️ 活跃并充满挑战精神",
      "🎯 目标明确，执行力强",
      "👑 具有领导力，自信大方",
      "⚡ 判断迅速，行动果断"
    ],
    description: "相比传统女性特质，更偏好按自己的方式生活。拥有不畏人言的自信和强大的精神力，思维现实且实用。",
    characters: "金智媛（太阳的后裔）、朴敏英（金秘书为何那样）、全智贤（来自星星的你）",
    summary: "我是自己人生的主角，要自信地活下去。",
    compatibility: "与TETO型男很匹配但可能会竞争，与EGEN型男能互补。",
    loveStyle: "追求平等的关系，偏好彼此尊重独立性的恋爱。"
  },
  "egen_female": {
    type: "EGEN型女",
    emoji: "🌺", 
    image: "/에겐녀.png",
    colorClass: "from-pink-500 to-rose-500",
    bgGradient: "bg-gradient-to-r from-pink-500 to-rose-500",
    title: "温柔体贴的女性型",
    analysis: "性格温柔亲切，关心他人，重视和谐。是偏好情感化、直觉化判断的典型EGEN型女。",
    traits: [
      "💕 温暖体贴，关怀他人",
      "🌸 性格温柔和蕰",
      "👂 善于倾听，共情能力强",
      "🎀 细腻敏感，富有感性",
      "🤗 重视与他人的和谐"
    ],
    description: "细心体察他人的情感，充满关爱之心。比起冲突更喜欢和平，擅长通过情感交流建立深厚关系。",
    characters: "宋惠乔（太阳的后裔）、朴信惠（继承者们）、裴秀智（当你沉睡时）",
    summary: "想用温暖的心拥抱每一个人。",
    compatibility: "与TETO型男是最理想的匹配，与EGEN型男也能深度情感交流。",
    loveStyle: "追求浪漫感性的恋爱，偏好相互关爱的关系。"
  }
};
