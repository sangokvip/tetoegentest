import { useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { PersonalityCard } from "@/components/personality-card";

export default function Home() {
  const [, setLocation] = useLocation();

  const startTest = () => {
    setLocation("/quiz");
  };

  return (
    <div className="min-h-screen flex flex-col font-korean">
      {/* Header */}
      <header className="relative overflow-hidden bg-gradient-to-r from-red-500 via-purple-500 to-blue-500 p-6 text-white">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="relative z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-black mb-2 animate-fade-in">🧬 TETO-EGEN测试</h1>
          <p className="text-xl md:text-2xl font-medium opacity-90">发现你的恋爱DNA！</p>
          <div className="flex justify-center items-center mt-4 space-x-2">
            <span className="bg-white bg-opacity-20 px-3 py-1 rounded-full text-sm">🔥 热门</span>
            <span className="bg-white bg-opacity-20 px-3 py-1 rounded-full text-sm">✨ 准确度95%</span>
            <span className="bg-white bg-opacity-20 px-3 py-1 rounded-full text-sm">⚡ 3分钟完成</span>
          </div>
        </div>
        {/* Floating decoration elements */}
        <div className="absolute top-10 left-10 w-20 h-20 bg-white bg-opacity-10 rounded-full animate-bounce-slow"></div>
        <div className="absolute bottom-10 right-10 w-16 h-16 bg-white bg-opacity-10 rounded-full animate-pulse-slow"></div>
      </header>

      {/* Introduction Section */}
      <section className="flex-1 px-6 py-12 max-w-4xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Left: Explanation */}
          <div className="space-y-6 animate-slide-up">
            <Card className="bg-white rounded-2xl shadow-lg border border-gray-100">
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">📊 什么是TETO-EGEN性格类型？</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  基于TETO和EGEN的行为特征，
                  分析性格和恋爱风格的新型心理分析工具。
                </p>
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-gradient-to-r from-red-500 to-red-400 text-white p-3 rounded-xl text-center">
                    <div className="text-2xl mb-1">💪</div>
                    <div className="font-semibold text-sm">TETO型</div>
                  </div>
                  <div className="bg-gradient-to-r from-purple-500 to-purple-400 text-white p-3 rounded-xl text-center">
                    <div className="text-2xl mb-1">🌸</div>
                    <div className="font-semibold text-sm">EGEN型</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white rounded-2xl shadow-lg border border-gray-100">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-3">🎯 推荐给这些人！</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center"><span className="text-green-500 mr-2">✓</span>想了解自己恋爱风格的人</li>
                  <li className="flex items-center"><span className="text-green-500 mr-2">✓</span>想知道与对方是否匹配的人</li>
                  <li className="flex items-center"><span className="text-green-500 mr-2">✓</span>想发现新自我的人</li>
                  <li className="flex items-center"><span className="text-green-500 mr-2">✓</span>喜欢有趣心理测试的人</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Right: Preview Cards */}
          <div className="space-y-4 animate-fade-in">
            <h3 className="text-xl font-bold text-center mb-6">🔮 4种性格类型</h3>
            <div className="grid grid-cols-2 gap-4">
              <PersonalityCard
                emoji=""
                title="TETO型男"
                description="领导力强的男性"
                colorClass="from-red-500 to-orange-500"
                image="/테토남.png"
              />
              <PersonalityCard
                emoji=""
                title="EGEN型男"
                description="感性的男性"
                colorClass="from-purple-500 to-pink-500"
                image="/에겐남.png"
              />
              <PersonalityCard
                emoji=""
                title="TETO型女"
                description="活泼的女性"
                colorClass="from-teal-500 to-blue-500"
                image="/테토녀.png"
              />
              <PersonalityCard
                emoji=""
                title="EGEN型女"
                description="温柔的女性"
                colorClass="from-pink-500 to-rose-500"
                image="/에겐녀.png"
              />
            </div>
          </div>
        </div>

        {/* Start Button */}
        <div className="text-center mt-12">
          <Button 
            onClick={startTest}
            className="bg-gradient-to-r from-blue-500 to-teal-500 text-white text-xl font-bold py-4 px-12 h-auto rounded-full shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300 animate-pulse-slow"
          >
            🚀 开始测试
          </Button>
          <p className="text-gray-500 text-sm mt-4">⏱️ 约3分钟 | 🎯 共17道题</p>
        </div>
      </section>
    </div>
  );
}
