import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import heroImage from "@/assets/hero-fitness.jpg";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/85 to-background/70" />
      </div>
      
      <div className="container relative z-10 px-4 md:px-6 py-20">
        <div className="max-w-3xl space-y-6">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight text-foreground animate-fade-in">
            누구나 시작할 수 있는
            <span className="block bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent animate-slide-in-left" style={{ animationDelay: "0.2s" }}>
              맞춤형 운동 프로그램
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl animate-fade-in" style={{ animationDelay: "0.4s" }}>
            운동이 어렵게만 느껴지셨나요? 걱정하지 마세요. 
            당신의 수준과 목표에 맞는 프로그램으로 건강한 변화를 시작하세요.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 pt-4 animate-fade-in" style={{ animationDelay: "0.6s" }}>
            <Button 
              size="lg" 
              className="text-lg px-8 py-6 rounded-full bg-gradient-to-r from-primary to-primary-glow hover:shadow-[0_0_40px_hsl(var(--primary-glow)_/_0.4)] hover:scale-105 transition-all duration-300"
              onClick={() => navigate("/auth")}
            >
              무료로 시작하기
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="text-lg px-8 py-6 rounded-full border-2 hover:bg-accent hover:border-primary hover:scale-105 transition-all duration-300"
            >
              프로그램 둘러보기
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
