import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../../../ui/card";
import { Button } from "../../../ui/button";
import Link from "next/link";
import GetPosts from "@/app/blogs/page";

export default function Blogs() {
  return (
    <Card className="bg-accent/10">
      <CardHeader>
        <CardTitle>Featured Blogs</CardTitle>
        <CardDescription>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab delectus
          et, at similique voluptates maxime magnam facilis, voluptate natus
          itaque culpa?
        </CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-5">
        <GetPosts  />
        <Link href="/blogs" className="w-full">
          <Button variant="outline" className=" py-6 w-full">
            Real all blogs
          </Button>
        </Link>
      </CardContent>
    </Card>
  );
}
