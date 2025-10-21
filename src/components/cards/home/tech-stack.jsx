import { Globe, Gamepad2, Monitor } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const stacks = {
  web: {
    icon: Globe,
    title: "Web Stack",
    description: "Full-stack web development",
    technologies: [
      { name: "Next.js", category: "Framework" },
      { name: "Supabase", category: "Backend" },
      { name: "AI SDK", category: "AI" },
      { name: "Appwrite", category: "Backend" },
      { name: "shadcn/ui", category: "UI" }
    ]
  },
  game: {
    icon: Gamepad2,
    title: "Game Stack",
    description: "Game development toolkit",
    technologies: [
      { name: "Godot Engine", category: "Engine" },
      { name: "GDScript", category: "Language" }
    ]
  },
  app: {
    icon: Monitor,
    title: "App Stack",
    description: "Cross-platform applications",
    technologies: [
      { name: "React Native", category: "Mobile" },
      { name: "Tauri", category: "Desktop" }
    ]
  }
};

export default function StackCard() {
  return (
    <Card className="w-full mx-auto bg-accent/10 ">
      <CardHeader>
        <CardTitle>Technology Stack</CardTitle>
        <CardDescription>Tools and frameworks I work with</CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="web" className="w-full">
          <TabsList className="grid w-full grid-cols-3 bg-accent/60">
            <TabsTrigger value="web" className="gap-2">
              <Globe className="w-4 h-4" />
              <span className="hidden sm:inline">Web</span>
            </TabsTrigger>
            <TabsTrigger value="game" className="gap-2">
              <Gamepad2 className="w-4 h-4" />
              <span className="hidden sm:inline">Game</span>
            </TabsTrigger>
            <TabsTrigger value="app" className="gap-2">
              <Monitor className="w-4 h-4" />
              <span className="hidden sm:inline">App</span>
            </TabsTrigger>
          </TabsList>

          {Object.entries(stacks).map(([key, stack]) => {
            const Icon = stack.icon;
            return (
              <TabsContent key={key} value={key} className="mt-6">
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-lg border bg-muted/50">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-base">{stack.title}</h3>
                      <p className="text-sm text-muted-foreground">{stack.description}</p>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-4">
                    {stack.technologies.map((tech) => (
                      <div
                        key={tech.name}
                        className="flex items-center gap-2 md:w-62 justify-between p-3 rounded-lg border bg-muted/20 hover:bg-muted/40 transition-colors"
                      >
                        <span className="text-sm font-medium">{tech.name}</span>
                        <Badge variant="outline" className="text-xs">
                          {tech.category}
                        </Badge>
                      </div>
                    ))}
                  </div>
                </div>
              </TabsContent>
            );
          })}
        </Tabs>
      </CardContent>
    </Card>
  );
}