import { getData } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";

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
