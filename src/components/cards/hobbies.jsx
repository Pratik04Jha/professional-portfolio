import { Palette, Code, Crown, Box } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const hobbies = [
  {
    name: "Sketching",
    icon: Palette,
    description:
      "Creating visual art and illustrations through pencil and paper",
  },
  {
    name: "Coding",
    icon: Code,
    description: "Building projects and solving problems through programming",
  },
  {
    name: "Chess",
    icon: Crown,
    description: "Strategic thinking and competitive gameplay on the board",
  },
  {
    name: "Rubik's Cube",
    icon: Box,
    description: "Solving puzzles and improving speed-cubing techniques",
  },
];

export default function HobbiesCard() {
  return (
    <Card className="min-w-[50%] bg-accent/10">
      <CardHeader>
        <CardTitle>Hobbies & Interests</CardTitle>
        <CardDescription>Things I enjoy doing in my free time</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 gap-4">
          {hobbies.map((hobby) => {
            const Icon = hobby.icon;
            return (
              <Card key={hobby.name} className="bg-accent/20">
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="p-2.5 rounded-lg border bg-muted/50">
                        <Icon className="w-5 h-5" />
                      </div>
                      <h3 className="font-semibold text-base">{hobby.name}</h3>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {hobby.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
}
