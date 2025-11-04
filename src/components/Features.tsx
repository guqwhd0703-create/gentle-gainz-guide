import { Heart, Users, Clock, TrendingUp } from "lucide-react";

const features = [
  {
    icon: Heart,
    title: "맞춤형 프로그램",
    description: "개인의 체력과 목표에 맞춘 운동 계획을 제공합니다."
  },
  {
    icon: Users,
    title: "전문가 지도",
    description: "경험 많은 트레이너의 체계적인 가이드를 받으세요."
  },
  {
    icon: Clock,
    title: "유연한 시간",
    description: "언제 어디서나 원하는 시간에 운동할 수 있습니다."
  },
  {
    icon: TrendingUp,
    title: "꾸준한 성장",
    description: "단계별 프로그램으로 지속 가능한 변화를 만들어요."
  }
];

const Features = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-accent/30 to-background">
      <div className="container px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-3xl md:text-5xl font-bold">
            왜 우리와 함께 시작해야 할까요?
          </h2>
          <p className="text-lg text-muted-foreground">
            초보자도 쉽게 따라할 수 있는 체계적인 시스템을 제공합니다.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-card p-8 rounded-3xl border-2 hover:shadow-soft transition-all duration-300 hover:-translate-y-1 space-y-4"
            >
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary to-primary-glow flex items-center justify-center">
                <feature.icon className="w-7 h-7 text-primary-foreground" />
              </div>
              
              <h3 className="text-xl font-bold">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
