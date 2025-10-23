import BackButton from "@/components/ui/back-button";
import GetPosts from "./getPosts";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default async function RenderPosts() {
  return (
    <div className="px-20">
      <BackButton />
      <Card>
        <CardHeader>
          <CardTitle>All blogs</CardTitle>
          <CardDescription>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum
            deserunt, soluta eveniet quod repellendus, autem deleniti facilis
            nobis fuga possimus voluptas?
          </CardDescription>
        </CardHeader>
        <CardContent>
          <GetPosts />
        </CardContent>
      </Card>
    </div>
  );
}
