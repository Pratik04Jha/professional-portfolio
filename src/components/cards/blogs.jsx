import { GeistMono } from "geist/font/mono";
import { Card } from "../ui/card";

export default function Blogs() {
  return (
    <Card className="bg-accent/10 p-10">
      <h1
        className={`${GeistMono.className} text-3xl md:text-4xl font-bold tracking-tight  mb-2`}
      >
        Blog posts
      </h1>
    </Card>
  );
}
