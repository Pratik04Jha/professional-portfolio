import { GeistMono } from "geist/font/mono";
import Image from "next/image";
import { Card } from "@/components/ui/card";

export default function () {
  return (
    <div className="flex justify-center gap-5 px-20">

      <Card className="w-full max-w-lg mx-auto bg-accent/10 p-10">
        
        
          <div className="h-full gap-5 flex flex-col justify-center w-full items-center">
            
            <div className="h-35 w-35 overflow-hidden rounded-full flex items-center">
              <Image
                src="/profile_2.jpg"
                alt="profile picture"
                height={100}
                width={100}
                className="rounded-full h-50 w-50 object-cover object-bottom"
              />
            </div>

            <div className="text-center">
              <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-1">
                Pratik Jha
              </h1>
              <p
                className={`${GeistMono.className} text-sm text-foreground/80`}
              >
                New Delhi, India
              </p>
            </div>
            <p className="text-center">
              Digital Builder of Website, Apps and Games | Self-Taught & Curious
              | Building with Code, Design & Ideas
            </p>
          </div>

      </Card>

      <Card className="w-full  mx-auto bg-accent/10 p-10">
        <h1
          className={`${GeistMono.className} text-3xl md:text-4xl font-bold tracking-tight  mb-2`}
        >
          Introduction
        </h1>
        <p>
          I'm a self-taught programmer who creates <strong>websites</strong>,{" "}
          <strong>games</strong>, and <strong>apps</strong>. My favorite tech
          stack for websites is <strong>Next.js</strong>,{" "}
          <strong>Supabase</strong>, and <strong>shadcn UI</strong>, which helps
          me make my sites look clean, consistent, and professional. I also work
          with <strong>AI SDKs</strong> and <strong>Appwrite</strong> for
          specific use cases. <br />
          <br /> I enjoy creating games for fun, especially 2D games, using the{" "}
          <strong>Godot engine</strong> and <strong>GDScript</strong> for
          scripting. For desktop apps, I use <strong>Tauri</strong> , which lets
          me leverage my web development knowledge to build lightweight
          applications. I used to make apps with <strong>Electron</strong> , but
          it was too heavy, so I switched immediately. For mobile apps, I use{" "}
          <strong>React Native</strong> because it just makes sense. <br />
          <br />
          It's been{" "}
          <strong>
            <em>2 years</em>
          </strong>{" "}
          since I started coding. I began with HTML on my phone, never imagining
          I would come this far so quickly. I'm still in school, counting down
          the days until I can fully dive into the projects I want to build.
        </p>
      </Card>
    </div>
  );
}
