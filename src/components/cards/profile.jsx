import { GeistMono } from "geist/font/mono";
import Image from "next/image";
import { Card } from "@/components/ui/card";

export default function Profile() {
  return (
    <Card className="w-full max-w-lg mx-auto bg-accent/10 p-10">
      <div className="h-full gap-5 flex flex-col justify-center w-full items-center">
        <div className="h-35 w-35 overflow-hidden rounded-full flex items-center pointer-events-none select-none">
          <Image
            src="/profile_2.jpg"
            alt="profile picture"
            height={100}
            width={100}
            className="rounded-full h-50 w-50 object-cover object-bottom"
          />
        </div>

        <div className="text-center">
          <h1 className="md:text-4xl font-bold tracking-tight mb-1">
            Pratik Jha
          </h1>
          <p className={`${GeistMono.className} text-sm text-foreground/80`}>
            New Delhi, India
          </p>
        </div>
        <p className="text-center">
          Digital Builder of Website, Apps and Games | Self-Taught & Curious |
          Building with Code, Design & Ideas
        </p>
      </div>
    </Card>
  );
}
