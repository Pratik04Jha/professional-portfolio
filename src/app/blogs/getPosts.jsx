import BlogsCardSection from "@/components/cards/home/blogs/blogs-card";

export const revalidate = 3600;


export default async function GetPosts({limit}) {
  const query = `
  query {
    publication(host: "pratikjha.hashnode.dev") {
      posts(first: ${limit || 10}) {
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
  const res = await fetch("https://gql.hashnode.com", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ query }),
  });

  const data = await res.json();
  const posts = data.data.publication.posts.edges.map((e) => e.node);

  return (
    <div className="flex flex-col gap-5">
      {posts.map((items, index) => (
        <BlogsCardSection items={items} key={index} />
      ))}
    </div>
  );
}
