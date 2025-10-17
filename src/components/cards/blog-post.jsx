import { Card } from "../ui/card";
import Link from "next/link";
import Image from "next/image";
import { Button } from "../ui/button";

export default function BlogPost({ items }) {
  return (
    <Card className=" w-full bg-accent/20 p-5 ">
      <div className="flex w-full gap-8 justify-between">
        <div className="h-55 min-w-100">
          <Image
            className="h-full w-full object-center object-cover rounded-2xl"
            src={items.imgSrc}
            alt={items.slug}
            width={100}
            height={100}
          />
        </div>

        <div className="flex flex-col justify-between ">
          <div className="flex flex-col gap-2 ">
            <h1 className="text-2xl font-semibold  ">{items.title}</h1>
            <div className="flex gap-2">
              <p>{items.author}</p> • <p>{items.datePublished}</p>
            </div>
            <p className="line-clamp-4 text-[15px] text-foreground/80">{items.exerpt}</p>
          </div>
          <div className="gap-5 flex ">
            <Link href="{`/posts/${items.slug}`}">
              <Button className="font-semibold">Read blog</Button>
            </Link>
            <Link href="/">
              <Button variant="outline" className="font-semibold ">
                View on medium
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </Card>
  );
}
