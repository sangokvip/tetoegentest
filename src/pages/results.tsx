import { useRoute, useLocation } from "wouter";
import { personalityTypes } from "@/data/personality-types";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Share2, RotateCcw, Users } from "lucide-react";

export default function Results() {
  const [, params] = useRoute("/results/:type");
  const [, setLocation] = useLocation();
  
  const personalityType = params?.type || "teto_male";
  const result = personalityTypes[personalityType];

  if (!result) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Card className="max-w-md mx-4">
          <CardContent className="pt-6 text-center">
            <h1 className="text-2xl font-bold text-gray-900 mb-4">找不到结果</h1>
            <Button onClick={() => setLocation("/")} className="mt-4">
              返回首页
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  const shareResult = () => {
    if (navigator.share) {
      navigator.share({
        title: `我是${result.type}！TETO-EGEN性格测试结果`,
        text: `${result.summary}`,
        url: window.location.href
      });
    } else {
      // Fallback for browsers that don't support Web Share API
      navigator.clipboard.writeText(window.location.href);
      alert("链接已复制到剪贴板！");
    }
  };

  // 게임 스타일 점수 계산 (의미있는 점수)
  const getMainScore = () => Math.floor(Math.random() * 15) + 85; // 85-99% 범위 (주 특성)
  const getSubScore = () => Math.floor(Math.random() * 25) + 15; // 15-39% 범위 (부 특성)
  const tetoScore = personalityType.includes('teto') ? getMainScore() : getSubScore();
  const egenScore = personalityType.includes('egen') ? getMainScore() : getSubScore();

  return (
    <div className="min-h-screen font-korean bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50">
      {/* 게임 스타일 헤더 */}
      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-6 shadow-lg">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="flex items-center justify-center gap-2 mb-2">
            <span className="text-2xl">💎</span>
            <h1 className="text-2xl font-bold pixel-style">我的EGEN型男/TETO型男测试结果是...</h1>
            <span className="text-2xl">💎</span>
          </div>
        </div>
      </div>

      {/* 메인 결과 카드 (게임 스타일) */}
      <div className="max-w-4xl mx-auto px-6 py-8">
        <div className="bg-white rounded-3xl shadow-2xl border-4 border-indigo-200 overflow-hidden animate-scale-in">
          {/* 타이틀 섹션 */}
          <div className={`bg-gradient-to-r ${result.colorClass} text-white py-8 text-center relative`}>
            <div className="absolute inset-0 bg-black bg-opacity-10"></div>
            <div className="relative z-10">
              <h2 className="text-3xl font-black mb-2 pixel-style tracking-wider">{result.type}</h2>
              <div className="flex justify-center mb-4">
                <img 
                  src={result.image} 
                  alt={result.type} 
                  className="w-24 h-24 object-cover rounded-full border-4 border-white shadow-lg animate-bounce-slow"
                  onError={(e) => {
                    // If image fails to load, replace with emoji
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    const parent = target.parentElement;
                    if (parent) {
                      const emojiDiv = document.createElement('div');
                      emojiDiv.className = 'text-8xl mb-4 animate-bounce-slow drop-shadow-lg';
                      emojiDiv.textContent = result.emoji;
                      parent.appendChild(emojiDiv);
                    }
                  }}
                />
              </div>
              <p className="text-xl font-medium opacity-90">{result.title}</p>
            </div>
          </div>

          {/* 캐릭터 섹션 */}
          <div className="bg-gradient-to-b from-blue-50 to-purple-50 py-8">
            <div className="text-center mb-6">
              <div className="inline-block bg-white rounded-2xl p-6 shadow-lg border-2 border-gray-200">
                {/* 성격 유형 이미지 */}
                <div className="mb-4">
                  <img 
                    src={result.image} 
                    alt={result.type} 
                    className="w-32 h-32 object-cover rounded-full border-4 border-gray-200 shadow-lg mx-auto"
                    onError={(e) => {
                      // If image fails to load, replace with emoji
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      const parent = target.parentElement;
                      if (parent) {
                        const emojiDiv = document.createElement('div');
                        emojiDiv.className = 'text-8xl mb-4 animate-bounce-slow drop-shadow-lg';
                        emojiDiv.textContent = result.emoji;
                        parent.appendChild(emojiDiv);
                      }
                    }}
                  />
                </div>
                <div className="bg-gray-100 rounded-xl p-3 max-w-xs mx-auto">
                  <p className="text-sm font-medium text-gray-700 leading-relaxed">
                    "{result.summary}"
                  </p>
                </div>
              </div>
            </div>

            {/* 점수 진행 바 */}
            <div className="max-w-md mx-auto mb-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <span className="text-2xl">♀️</span>
                  <span className="text-sm font-bold text-pink-600">EGEN力</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-sm font-bold text-blue-600">TETO力</span>
                  <span className="text-2xl">♂️</span>
                </div>
              </div>
              
              <div className="relative bg-gray-200 rounded-full h-8 overflow-hidden shadow-inner">
                {/* 에겐력 바 (왼쪽) */}
                <div 
                  className="absolute left-0 top-0 h-full bg-gradient-to-r from-pink-500 to-pink-600 transition-all duration-2000 ease-out"
                  style={{ width: `${egenScore}%` }}
                >
                  <div className="absolute inset-0 bg-white bg-opacity-20 animate-pulse"></div>
                </div>
                {/* 테토력 바 (오른쪽) */}
                <div 
                  className="absolute right-0 top-0 h-full bg-gradient-to-r from-blue-600 to-blue-500 transition-all duration-2000 ease-out"
                  style={{ width: `${tetoScore}%` }}
                >
                  <div className="absolute inset-0 bg-white bg-opacity-20 animate-pulse"></div>
                </div>
                {/* 중앙 텍스트 */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-white font-bold text-sm drop-shadow-lg bg-black bg-opacity-50 px-2 py-1 rounded">
                    {personalityType.includes('teto') ? `TETO力 ${tetoScore}%` : `EGEN力 ${egenScore}%`}
                  </span>
                </div>
                {/* 점수 표시 */}
                <div className="absolute -bottom-6 left-0 text-xs text-pink-600 font-bold">
                  {egenScore}%
                </div>
                <div className="absolute -bottom-6 right-0 text-xs text-blue-600 font-bold">
                  {tetoScore}%
                </div>
              </div>
            </div>
          </div>

          {/* 상세 결과 섹션들 */}
          <div className="p-8 space-y-6">
            {/* 특성 분석 (게임 RPG 스타일) */}
            <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-2xl p-6 border-2 border-indigo-200">
              <h3 className="text-xl font-bold text-indigo-800 mb-4 flex items-center">
                <span className="text-2xl mr-2">⚡</span> {personalityType.includes('teto') ? 'TETO力' : 'EGEN力'} {personalityType.includes('teto') ? tetoScore : egenScore}%的我
              </h3>
              <div className="space-y-3">
                {result.traits.slice(0, 3).map((trait, index) => (
                  <div key={index} className="flex items-center gap-3 bg-white rounded-xl p-3 shadow-sm">
                    <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                      {index + 1}
                    </div>
                    <p className="text-gray-700 font-medium">{trait}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* 성격 분석 */}
            <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-6 border-2 border-purple-200">
              <h3 className="text-xl font-bold text-purple-800 mb-4 flex items-center">
                <span className="text-2xl mr-2">🧠</span> 性格分析
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">{result.analysis}</p>
              
              <div className="bg-white rounded-xl p-4 border-2 border-dashed border-purple-300">
                <h4 className="font-bold text-gray-800 mb-2 flex items-center">
                  <span className="text-xl mr-2">💕</span> 恋爱风格
                </h4>
                <p className="text-gray-600 text-sm">{result.loveStyle}</p>
              </div>
            </div>

            {/* 궁합 & 캐릭터 */}
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-gradient-to-r from-red-50 to-pink-50 rounded-2xl p-6 border-2 border-pink-200">
                <h3 className="text-lg font-bold text-pink-800 mb-3 flex items-center">
                  <span className="text-xl mr-2">💖</span> 恋爱匹配
                </h3>
                <p className="text-gray-700 text-sm leading-relaxed">{result.compatibility}</p>
              </div>
              
              <div className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-2xl p-6 border-2 border-orange-200">
                <h3 className="text-lg font-bold text-orange-800 mb-3 flex items-center">
                  <span className="text-xl mr-2">🎬</span> 相似角色
                </h3>
                <p className="text-gray-700 text-sm leading-relaxed">{result.characters}</p>
              </div>
            </div>
          </div>
        </div>

        {/* 게임 스타일 액션 버튼들 */}
        <div className="bg-white rounded-3xl shadow-xl border-4 border-indigo-200 p-6 text-center mt-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 pixel-style">🎮 测试完成！ 🎮</h2>
          
          <div className="flex flex-wrap justify-center gap-4 mb-6">
            <Button 
              onClick={shareResult} 
              className="bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white px-8 py-4 rounded-2xl font-bold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              <Share2 className="w-5 h-5 mr-2" />
              分享给朋友 💫
            </Button>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4">
            <Button 
              onClick={() => setLocation("/")} 
              className="bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 text-white px-6 py-3 rounded-xl font-bold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              <RotateCcw className="w-4 h-4 mr-2" />
              重新测试 🔄
            </Button>
            <Button 
              onClick={() => setLocation("/")} 
              variant="outline"
              className="border-2 border-indigo-300 text-indigo-600 hover:bg-indigo-50 px-6 py-3 rounded-xl font-bold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              <Users className="w-4 h-4 mr-2" />
              查看其他结果 👀
            </Button>
          </div>
          
          <div className="mt-6 flex justify-center gap-2">
            <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-medium">⭐ 准确度95%</span>
            <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">🏆 完成！</span>
            <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium">🎯 升级</span>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8 mt-12">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-gray-300 mb-4">本测试仅供娱乐，不以科学依据为基础。</p>
          <p className="text-gray-400 text-sm">© 2024 TETO-EGEN性格测试。保留所有权利。</p>
        </div>
      </footer>
    </div>
  );
}
