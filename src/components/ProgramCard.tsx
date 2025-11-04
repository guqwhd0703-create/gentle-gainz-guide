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
    <Card className="group overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border-2 hover:border-primary/50 bg-card">
      <div className="aspect-square overflow-hidden relative">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>
      
      <CardHeader className="space-y-4">
        <div className="flex gap-2">
          <Badge variant="secondary" className="rounded-full px-3 py-1 font-medium">
            {level}
          </Badge>
          <Badge variant="outline" className="rounded-full px-3 py-1 font-medium">
            {duration}
          </Badge>
        </div>
        
        <CardTitle className="text-2xl group-hover:text-primary transition-colors duration-300">{title}</CardTitle>
        <CardDescription className="text-base leading-relaxed">
          {description}
        </CardDescription>
      </CardHeader>
      
      <CardContent>
        <Button className="w-full rounded-full group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-primary-glow transition-all duration-300" size="lg">
          자세히 보기
        </Button>
      </CardContent>
    </Card>
  );
};

export default ProgramCard;
