import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Button } from "../ui/button";
import GetPosts from "@/app/(routes)/blogs/page";

export default function Blogs() {
  return (
    <Card className="bg-accent/10">
      <CardHeader>
        <CardTitle>Blog posts</CardTitle>
        <CardDescription>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab delectus
          et, at similique voluptates maxime magnam facilis, voluptate natus
          itaque culpa?
        </CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-5">
        <GetPosts />
        <Button variant="outline" className="py-6">
          Real all blogs
        </Button>
      </CardContent>
    </Card>
  );
}
