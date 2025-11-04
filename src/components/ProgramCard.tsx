import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface ProgramCardProps {
  title: string;
  description: string;
  level: string;
  duration: string;
  image: string;
}

const ProgramCard = ({ title, description, level, duration, image }: ProgramCardProps) => {
  return (
    <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2">
      <div className="aspect-square overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
        />
      </div>
      
      <CardHeader className="space-y-3">
        <div className="flex gap-2">
          <Badge variant="secondary" className="rounded-full">
            {level}
          </Badge>
          <Badge variant="outline" className="rounded-full">
            {duration}
          </Badge>
        </div>
        
        <CardTitle className="text-2xl">{title}</CardTitle>
        <CardDescription className="text-base leading-relaxed">
          {description}
        </CardDescription>
      </CardHeader>
      
      <CardContent>
        <Button className="w-full rounded-full" size="lg">
          자세히 보기
        </Button>
      </CardContent>
    </Card>
  );
};

export default ProgramCard;
