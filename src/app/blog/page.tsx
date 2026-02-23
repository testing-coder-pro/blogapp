import Image from "next/image";
import Link from "next/link";

const blogList = [
  {
    id: 1,
    title: "title",
    desc: "desc",
    imgUrl: "/1g.png",
  },
  {
    id: 2,
    title: "title",
    desc: "desc",
    imgUrl: "/1g.png",
  },
  {
    id: 3,
    title: "title",
    desc: "desc",
    imgUrl: "/1g.png",
  },
  {
    id: 4,
    title: "title",
    desc: "desc",
    imgUrl: "/1g.png",
  },
  {
    id: 5,
    title: "title",
    desc: "desc",
    imgUrl: "/1g.png",
  },
  {
    id: 6,
    title: "title",
    desc: "desc",
    imgUrl: "/1g.png",
  },
];

const getData = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");

  if (!res.ok) {
    throw new Error("Something went wrong data not fetched");
  }

  return await res.json();
};

const BlogPage = async () => {
  const blogData = await getData();

  return (
    <div className="flex flex-wrap gap-5 items-center justify-between p-4">
      {blogData.map(
        (blog: { userId: number; id: number; title: string; body: string }) => (
          <div key={blog.id} className="relative w-75">
            <Link href={`blog/${blog.id}`}>
              <Image
                src={"/1g.png"}
                alt={blog.title}
                width={300}
                height={400}
              />
            </Link>
            <h2>{blog.title}</h2>
            <p>{blog.body}</p>
            <div className="absolute top-50 -right-43 rotate-90">
              Created by Mahesh Saini at 15/04/2026
            </div>
          </div>
        ),
      )}
    </div>
  );
};

export default BlogPage;
