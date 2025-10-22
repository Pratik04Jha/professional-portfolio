import BlogsCardSkeleton from "@/components/skeletons/blogs-card-skeleton";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { formatDate } from "@/lib/utils";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { Suspense } from "react";

const query = `
query {
  publication(host: "pratikjha.hashnode.dev") {
    posts(first: 5) {
      edges {
        node {
          id
          title
          subtitle
          slug
          brief
          url
          publishedAt
          author {
            name
            profilePicture
          }
          coverImage {
            url
          }
        }
      }
    }
  }
}
`;

export default async function GetPosts() {
  const res = await fetch("https://gql.hashnode.com", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    cache: "no-store",
    body: JSON.stringify({ query }),
  });

  const data = await res.json();
  const posts = data.data.publication.posts.edges.map((e) => e.node);

  return (
    <div className="flex flex-col gap-5">
      {posts.map((items) => (
        <Suspense key={items.slug} fallback={<BlogsCardSkeleton />}>
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
                      <Button>Read</Button>
                    </Link>
                    <Link href={items.url} target="_blank">
                      <Button variant="outline">Read on hashnode</Button>
                    </Link>
                  </div>
                </CardContent>
              </div>
            </div>
          </Card>
        </Suspense>
      ))}
    </div>
  );
}
