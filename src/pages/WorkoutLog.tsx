import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/hooks/use-toast";

interface WorkoutEntry {
  id: string;
  date: string;
  program: string;
  duration: string;
  notes: string;
}

const WorkoutLog = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState<any>(null);
  const [workouts, setWorkouts] = useState<WorkoutEntry[]>([]);
  const [program, setProgram] = useState("");
  const [duration, setDuration] = useState("");
  const [notes, setNotes] = useState("");

  useEffect(() => {
    const currentUser = localStorage.getItem("currentUser");
    if (!currentUser) {
      navigate("/auth");
      return;
    }
    setUser(JSON.parse(currentUser));
    
    const savedWorkouts = localStorage.getItem(`workouts_${JSON.parse(currentUser).email}`);
    if (savedWorkouts) {
      setWorkouts(JSON.parse(savedWorkouts));
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("currentUser");
    navigate("/");
    toast({ title: "로그아웃 완료" });
  };

  const handleAddWorkout = (e: React.FormEvent) => {
    e.preventDefault();
    
    const newWorkout: WorkoutEntry = {
      id: Date.now().toString(),
      date: new Date().toLocaleDateString("ko-KR"),
      program,
      duration,
      notes
    };

    const updatedWorkouts = [newWorkout, ...workouts];
    setWorkouts(updatedWorkouts);
    localStorage.setItem(`workouts_${user.email}`, JSON.stringify(updatedWorkouts));
    
    setProgram("");
    setDuration("");
    setNotes("");
    
    toast({ title: "운동 기록 추가 완료!" });
  };

  const handleDeleteWorkout = (id: string) => {
    const updatedWorkouts = workouts.filter(w => w.id !== id);
    setWorkouts(updatedWorkouts);
    localStorage.setItem(`workouts_${user.email}`, JSON.stringify(updatedWorkouts));
    toast({ title: "기록이 삭제되었습니다." });
  };

  if (!user) return null;

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted p-4 md:p-8">
      <div className="max-w-4xl mx-auto space-y-6">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold">{user.name}님의 운동 기록</h1>
            <p className="text-muted-foreground mt-1">운동 프로그램을 기록하고 관리하세요</p>
          </div>
          <Button onClick={handleLogout} variant="outline">로그아웃</Button>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>새 운동 기록 추가</CardTitle>
            <CardDescription>오늘의 운동을 기록해보세요</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleAddWorkout} className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="program">프로그램</Label>
                  <Input
                    id="program"
                    placeholder="예: 헬스 트레이닝"
                    value={program}
                    onChange={(e) => setProgram(e.target.value)}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="duration">운동 시간</Label>
                  <Input
                    id="duration"
                    placeholder="예: 60분"
                    value={duration}
                    onChange={(e) => setDuration(e.target.value)}
                    required
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="notes">메모</Label>
                <Textarea
                  id="notes"
                  placeholder="오늘의 운동 내용을 기록하세요"
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  rows={3}
                />
              </div>
              <Button type="submit" className="w-full">기록 추가</Button>
            </form>
          </CardContent>
        </Card>

        <div className="space-y-4">
          <h2 className="text-2xl font-bold">운동 기록</h2>
          {workouts.length === 0 ? (
            <Card>
              <CardContent className="py-8 text-center text-muted-foreground">
                아직 운동 기록이 없습니다. 첫 번째 기록을 추가해보세요!
              </CardContent>
            </Card>
          ) : (
            workouts.map((workout) => (
              <Card key={workout.id}>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle>{workout.program}</CardTitle>
                      <CardDescription>{workout.date} · {workout.duration}</CardDescription>
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => handleDeleteWorkout(workout.id)}
                    >
                      삭제
                    </Button>
                  </div>
                </CardHeader>
                {workout.notes && (
                  <CardContent>
                    <p className="text-sm">{workout.notes}</p>
                  </CardContent>
                )}
              </Card>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default WorkoutLog;
