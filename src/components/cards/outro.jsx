import { GeistMono } from "geist/font/mono";
import { Card } from "@/components/ui/card";

export default function Outro() {
  return (
    <Card className="w-full mx-auto bg-accent/10 p-10">
      <h1
        className={`${GeistMono.className} text-3xl md:text-4xl font-bold tracking-tight  mb-2`}
      >
        Outroduction
      </h1>
      <p>
        This is not a portfolio this is a website that showcase everything, my
        main focus was on the content not in the ui even though the ui looks
        life Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
        blanditiis illum placeat accusamus exercitationem vitae, omnis dicta
        harum possimus nemo magni reiciendis quos, voluptas iste sed. Iure
        reprehenderit voluptas voluptates laborum eius possimus cumque, in
        asperiores voluptatem ea ratione omnis magnam et itaque quo unde hic
        culpa corrupti ipsa rerum minima, porro amet ut autem. Possimus libero
        iste tempora nihil mollitia. <br />
        <br /> Quas id quisquam fugiat, dolorum voluptates accusamus possimus ea
        aliquid aliquam ipsum ad dolorem ut provident, eum iste totam veniam
        nulla, doloribus temporibus quidem nesciunt animi. Minus a natus error.
        Officiis, veritatis a dolor iusto vel sapiente enim sint. Lorem ipsum,
        dolor sit amet consectetur adipisicing elit. Sed explicabo omnis eos
        aliquid. <br /> <br />
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi ratione
        nihil cumque. Nobis recusandae odio et culpa repellat! Beatae, maxime
        omnis? Quaerat cupiditate numquam expedita voluptates fugiat perferendis
        similique hic odio aut amet exercitationem laudantium.
      </p>
    </Card>
  );
}
