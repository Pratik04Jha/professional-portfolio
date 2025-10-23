import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { formatDate } from "@/lib/utils";
import Link from "next/link";

const BlogsCardSection = ({ items }) => {
  return (
    <Card className="bg-accent/10">
      <div className="flex gap-2 px-5 w-full ">
        <img
          src={items.coverImage.url}
          alt={items.slug}
          className="w-100 rounded-2xl pointer-events-none select-none"
        />

        <div className="flex flex-col gap-5">
          <CardHeader>
            <CardTitle className="text-2xl">{items.title}</CardTitle>
            <CardDescription>{items.subtitle}</CardDescription>
            <div className="flex gap-2 text-foreground/80">
              <div className="flex gap-2 items-center">
                <img
                  src={items.author.profilePicture}
                  className="w-6 rounded-full"
                />{" "}
                <p className="text-foreground">{items.author.name}</p>
              </div>
              <p>•</p>
              <p>{formatDate(items.publishedAt)}</p>
            </div>
          </CardHeader>
          <CardContent className="flex flex-col justify-between h-full">
            <p>{items.brief}</p>
            <div className="flex gap-2">
              <Link href={`/blogs/posts/${items.id}`}>
                <Button variant="outline">Read more</Button>
              </Link>
              <Link href={items.url} target="_blank">
                <Button variant="link">Read on hashnode</Button>
              </Link>
            </div>
          </CardContent>
        </div>
      </div>
    </Card>
  );
};

export default BlogsCardSection;
