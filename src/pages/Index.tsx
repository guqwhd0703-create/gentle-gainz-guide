import Hero from "@/components/Hero";
import ProgramCard from "@/components/ProgramCard";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import beginnerImage from "@/assets/beginner-program.jpg";
import homeImage from "@/assets/home-workout.jpg";
import seniorImage from "@/assets/senior-program.jpg";

const programs = [
  {
    title: "초보자 프로그램",
    description: "운동을 처음 시작하는 분들을 위한 기초 체력 향상 프로그램입니다. 쉬운 동작부터 차근차근 시작해요.",
    level: "입문",
    duration: "4주",
    image: beginnerImage
  },
  {
    title: "홈트레이닝",
    description: "집에서 간단한 도구만으로 할 수 있는 효과적인 운동 프로그램입니다. 시간과 장소에 구애받지 않아요.",
    level: "초급-중급",
    duration: "6주",
    image: homeImage
  },
  {
    title: "시니어 프로그램",
    description: "나이가 들어도 건강하게! 안전하고 부담없는 운동으로 활력을 되찾으세요.",
    level: "입문",
    duration: "8주",
    image: seniorImage
  }
];

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-subtle">
      <Hero />
      
      <section className="py-24">
        <div className="container px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4 animate-fade-in">
            <h2 className="text-3xl md:text-5xl font-bold">
              당신에게 맞는 프로그램을 찾아보세요
            </h2>
            <p className="text-lg text-muted-foreground">
              수준과 목표에 따라 선택할 수 있는 다양한 프로그램
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {programs.map((program, index) => (
              <div 
                key={index} 
                className="animate-scale-in"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <ProgramCard {...program} />
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <Features />
      
      <section className="py-24">
        <div className="container px-4 md:px-6">
          <div className="max-w-4xl mx-auto bg-gradient-to-r from-primary to-primary-glow rounded-3xl p-12 md:p-16 text-center text-primary-foreground shadow-[0_0_60px_hsl(var(--primary)_/_0.3)] animate-fade-in">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 animate-float">
              오늘부터 건강한 변화를 시작하세요
            </h2>
            <p className="text-lg md:text-xl mb-8 opacity-95">
              첫 4주 프로그램을 무료로 체험해보세요
            </p>
            <Button 
              size="lg"
              className="bg-white text-primary px-10 py-4 rounded-full text-lg font-semibold hover:scale-110 hover:shadow-2xl transition-all duration-300"
            >
              지금 시작하기
            </Button>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
