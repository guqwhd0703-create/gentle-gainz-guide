import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Calculator } from "lucide-react";

const ProgramRecommendation = () => {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [recommendation, setRecommendation] = useState<{
    bmi: number;
    category: string;
    program: string;
    description: string;
  } | null>(null);

  const calculateBMI = () => {
    const heightInMeters = parseFloat(height) / 100;
    const weightInKg = parseFloat(weight);
    
    if (!heightInMeters || !weightInKg || heightInMeters <= 0 || weightInKg <= 0) {
      return;
    }

    const bmi = weightInKg / (heightInMeters * heightInMeters);
    let category = "";
    let program = "";
    let description = "";

    if (bmi < 18.5) {
      category = "저체중";
      program = "근육 증가 프로그램";
      description = "건강한 체중 증가와 근력 향상을 위한 맞춤 운동과 영양 관리를 제공합니다.";
    } else if (bmi < 23) {
      category = "정상";
      program = "체력 향상 프로그램";
      description = "현재 건강한 체중을 유지하면서 전반적인 체력과 지구력을 강화하는 프로그램입니다.";
    } else if (bmi < 25) {
      category = "과체중";
      program = "체중 관리 프로그램";
      description = "균형잡힌 유산소와 근력 운동으로 건강한 체중 감량을 도와드립니다.";
    } else {
      category = "비만";
      program = "체중 감량 프로그램";
      description = "체계적인 운동과 생활 습관 개선으로 건강한 체중 감량을 실현합니다.";
    }

    setRecommendation({ bmi, category, program, description });
  };

  return (
    <section className="py-24 bg-gradient-to-b from-background to-accent/20">
      <div className="container px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              나에게 맞는 프로그램 찾기
            </h2>
            <p className="text-lg text-muted-foreground">
              키와 몸무게를 입력하면 최적의 운동 프로그램을 추천해드립니다
            </p>
          </div>

          <Card className="shadow-soft hover:shadow-glow transition-all duration-300 animate-scale-in">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calculator className="w-6 h-6 text-primary" />
                신체 정보 입력
              </CardTitle>
              <CardDescription>
                정확한 추천을 위해 현재 키와 몸무게를 입력해주세요
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="height">키 (cm)</Label>
                  <Input
                    id="height"
                    type="number"
                    placeholder="예: 170"
                    value={height}
                    onChange={(e) => setHeight(e.target.value)}
                    className="text-lg"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="weight">몸무게 (kg)</Label>
                  <Input
                    id="weight"
                    type="number"
                    placeholder="예: 65"
                    value={weight}
                    onChange={(e) => setWeight(e.target.value)}
                    className="text-lg"
                  />
                </div>
              </div>

              <Button 
                onClick={calculateBMI}
                className="w-full text-lg py-6"
                size="lg"
              >
                추천 프로그램 확인하기
              </Button>

              {recommendation && (
                <div className="mt-8 p-6 bg-gradient-primary rounded-2xl text-primary-foreground animate-fade-in">
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-lg opacity-90">BMI 지수</span>
                      <span className="text-3xl font-bold">{recommendation.bmi.toFixed(1)}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-lg opacity-90">체중 분류</span>
                      <span className="text-2xl font-semibold">{recommendation.category}</span>
                    </div>
                    <div className="border-t border-white/20 pt-4 mt-4">
                      <h3 className="text-2xl font-bold mb-2">
                        {recommendation.program}
                      </h3>
                      <p className="text-lg opacity-90">
                        {recommendation.description}
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ProgramRecommendation;
