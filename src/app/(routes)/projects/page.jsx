import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { projectDetails } from "@/lib/constants";
import { ExternalLink } from "lucide-react";
import { Badge } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";



const page = () => {
  return (
    <div className="grid md:grid-rows-2 md:grid-cols-3 gap-10">
      {projectDetails.map((items, index) => (
        <Card className="flex flex-col bg-accent/20" key={index}>
          <CardHeader>
            <Image
              src={items.imgSrc}
              alt={items.title}
              height={100}
              width={100}
              className="w-full rounded-2xl object-cover object-center pointer-events-none select-none border border-[#292A2A]"
            />
            <CardTitle className="text-lg font-semibold">
              {items.title}
            </CardTitle>
            <CardDescription className="text-sm text-foreground/90 line-clamp-4">
              {items.description}
            </CardDescription>
          </CardHeader>

          <CardContent>
            <div className="flex flex-col gap-5">
              <div className="flex flex-col gap-2">
                <h1 className="font-semibold">Stack: </h1>
                <div className="flex gap-2 flex-wrap">
                  {items.stack.map((itm, idx) => (
                    <Badge key={idx} variant="outline" className="px-4 py-1">
                      {itm}
                    </Badge>
                  ))}
                </div>
              </div>

              <div className="flex gap-3">
                <Link href={items.href}>
                  <Button className="font-semibold">
                    <ExternalLink /> <p className="pr-2">Visit</p>
                  </Button>
                </Link>
                <Link href={`/projects/${items.slug}`}>
                <Button className="font-semibold" variant="outline">
                  View details
                </Button>
                </Link>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default page;
