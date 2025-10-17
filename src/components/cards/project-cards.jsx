import Image from "next/image";
import { Card } from "../ui/card";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";

export default function ProjectCards({ items }) {
  return (
    <Card>
      <div>
        <Image src={items.imgSrc} alt="" height={100} width={100} />
      </div>
      <div>
        <h1>{items.title}</h1>
        <p>{items.description}</p>
        <div>
          <h1>Stack: </h1>{" "}
          {items.stack.map((itm, idx) => (
            <Badge variant="outline" key={idx}>
              {itm}
            </Badge>
          ))}
        </div>
      </div>

      <div>
        <Button>Visit</Button> <Button variant="outline" >View details</Button>
      </div>
    </Card>
  );
}
