import { GeistMono } from "geist/font/mono";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Button } from "../ui/button";
import BlogPost from "./blog-post";

const blogsData = [
  {
    imgSrc: "/blog_img/blog_1.jpg",
    title: "Why Small Steps Matter More Than Big Dreams",
    exerpt:
      "Big dreams sound exciting, but without small, consistent actions, they usually stay stuck in our imagination. Success isn’t built overnight—it’s the result of daily habits, tiny progress, and patience. Whether you want to write a book, build a business, or get fit, the secret lies in taking one small step at a time. This post dives into why “slow and steady” always beats “all at once.”",
    slug: "small-steps-big-dreams",
    author: "Pratik Jha",
    datePublished: "September 8, 2025",
    authorImgSrc: "/profile.jpg",
  },
  {
    imgSrc: "/blog_img/blog_2.jpg",
    title: "5 Simple Habits That Can Change Your Life",
    exerpt:
      "Life doesn’t transform because of one big event—it changes because of the small habits you practice every day. Waking up early, reading regularly, moving your body, journaling, and reducing social media can shift your mindset, energy, and productivity. In this article, we’ll break down five habits that seem simple but can create massive, lasting impact over time.",
    slug: "small-steps-big-dreams",
    author: "Pratik Jha",
    datePublished: "Octorber 8, 2025",
    authorImgSrc: "/profile.jpg",
  },
  {
    imgSrc: "/blog_img/blog_3.jpg",
    title: "The Mystery of Black Holes: Gateways or Graveyards?",
    exerpt:
      "Black holes are cosmic monsters—places where gravity is so strong that even light can’t escape. Are they the graveyards of dead stars or gateways to new dimensions? In this post, we explore the science, theories, and mysteries behind these mind-bending objects.",
    slug: "small-steps-big-dreams",
    author: "Pratik Jha",
    datePublished: "October 13, 2025",
    authorImgSrc: "/profile.jpg",
  },
];

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
        {blogsData.map((items, index) => (
          <BlogPost items={items} key={index} />
        ))}
        <Button variant="outline" className="py-6">
          Real all blogs
        </Button>
      </CardContent>
    </Card>
  );
}
