import { Languages } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { GeistMono } from "geist/font/mono";

const languages = [
  { name: "English", level: 90, projects: "Professional" },
  { name: "Hindi", level: 95, projects: "Native" },
  { name: "Mathili", level: 90, projects: "Mother tongue" },
  { name: "German", level: 20, projects: "Beginner" },
];

export default function LanguagesCard() {
  return (
    <Card className="w-full mx-auto max-w-lg bg-accent/10">
      <CardHeader>
        <div className="flex flex-col text-center items-center gap-3">
          <div className="p-5 rounded-full border bg-accent/30">
            <Languages className="w-12 h-12" />
          </div>
          <div>
            <CardTitle>
              <span className={`${GeistMono.className} text-3xl`}>
                {" "}
                Languages
              </span>
            </CardTitle>
            <CardDescription className="pt-2">
              Programming languages and proficiency
            </CardDescription>
          </div>
        </div>
      </CardHeader>

      <CardContent>
        <div className="space-y-5">
          {languages.map((lang) => (
            <div key={lang.name} className="space-y-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="text-sm font-medium">{lang.name}</span>
                  <Badge variant="secondary" className="text-xs">
                    {lang.projects}
                  </Badge>
                </div>
                <span className="text-sm text-muted-foreground">
                  {lang.level}%
                </span>
              </div>
              <Progress value={lang.level} className="h-2" />
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
