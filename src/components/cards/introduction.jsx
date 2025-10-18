import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Introduction() {
  return (
    <Card className="w-full bg-accent/10">
      <CardHeader>
        <CardTitle className="">Introduction</CardTitle>
        <CardDescription>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia
          porro sapiente aliquid illo.
        </CardDescription>
      </CardHeader>
      <CardContent>
        I'm a self-taught programmer who creates <strong>websites</strong>,
        <strong> games</strong>, and <strong>apps</strong>. My favorite tech
        stack for websites is <strong>Next.js</strong>, <strong>Supabase</strong>
        , and <strong>shadcn UI</strong>, which helps me make my sites look
        clean, consistent, and professional. I also work with
        <strong> AI SDKs</strong> and <strong>Appwrite</strong> for specific use
        cases. <br />
        <br /> I enjoy creating games for fun, especially 2D games, using the
        <strong> Godot engine</strong> and <strong>GDScript</strong> for
        scripting. For desktop apps, I use <strong>Tauri</strong> , which lets
        me leverage my web development knowledge to build lightweight
        applications. I used to make apps with <strong>Electron</strong> , but
        it was too heavy, so I switched immediately. For mobile apps, I use
        <strong> React Native </strong> because it just makes sense. <br />
        <br />
        It's been
        <strong>
          <em> 2 years </em>
        </strong>
        since I started coding. I began with HTML on my phone, never imagining I
        would come this far so quickly. I'm still in school, counting down the
        days until I can fully dive into the projects I want to build.
      </CardContent>
    </Card>
  );
};