import { formatDate } from "@/lib/utils";
import { BookOpenTextIcon } from "lucide-react";
import Image from "next/image";


export const revalidate = 3600;

const query = `
  query GetPost($id: ID!) {
    post(id: $id) {
      title
      subtitle
      coverImage {
        url
      }
      author {
        name
        profilePicture
      }
      readTimeInMinutes
      publishedAt
      content {
        html
        markdown
      }
    }
  }
`;

export default async function GetBlogs({ params }) {
  const { slug } = await params;



  const res = await fetch("https://gql.hashnode.com", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ 
      query,
      variables: { id: slug }
    }),
  });

  const data = await res.json();
  const post = data.data.post;

  

  return (
    <div className="prose mx-auto px-30 flex flex-col justify-center w-full">
      <Image
        src={post.coverImage?.url}
        width={10000}
        height={10000}
        alt={post.title}
        className="rounded-2xl mb-4 pointer-events-none select-none"
      />
      <h1 className="text-6xl font-bold py-4 text-center px-10 leading-18">
        {post.title}
      </h1>
      <h3 className="text-3xl font-medium py-2 text-center px-20 text-foreground/70">
        {post.subtitle}
      </h3>
      <div className="flex w-full justify-center gap-5 my-5 mt-10 items-center text-foreground/70">
        <div className="flex gap-2 items-center">
          <img
            src={post.author.profilePicture}
            className="w-10 rounded-full"
            alt={post.author.name}
          />
          <h1 className="text-xl text-foreground font-medium">
            {post.author.name}
          </h1>
        </div>
        <p>•</p>
        <h1 className="text-xl">{formatDate(post.publishedAt)}</h1>
        <p>•</p>
        <div className="flex gap-2 items-center">
          <BookOpenTextIcon />
          <h1 className="text-xl">{post.readTimeInMinutes} min read</h1>
        </div>
      </div>
      <div
        className="blog-content mx-auto my-10 max-w-3xl"
        dangerouslySetInnerHTML={{ __html: post.content.html }}
      />
    </div>
  );
}