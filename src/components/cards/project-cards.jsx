import Image from "next/image";
import { Card } from "../ui/card";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";

export default function ProjectCards({ items }) {
  return (
    <Card className="px-5 h-120 flex flex-col justify-center">
      <div className="h-45 rounded-2xl overflow-hidden w-full ">
        <Image
          src={items.imgSrc}
          alt=""
          height={100}
          width={100}
          className="h-full w-full object-cover object-center"
        />
      </div>
      <div className="flex flex-col gap-2 ">
        <h1 className="text-lg font-semibold">{items.title}</h1>
        <p className="text-sm text-foreground/90 line-clamp-4">{items.description}</p>
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
      </div>

      <div className="flex gap-3">
        <Button className="font-semibold">Visit</Button> <Button className="font-semibold" variant="outline">View details</Button>
      </div>
    </Card>
  );
}
