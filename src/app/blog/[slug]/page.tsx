import Image from "next/image";

const getSinglePost = async (id: number) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);

  if (!res.ok) {
    throw new Error("Single post data not fetched something went wrong!");
  }
  return await res.json();
};

const SingleBlogPage = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  const { slug } = await params;
  const data: { userId: number; id: number; title: string; body: string } =
    await getSinglePost(+slug);
  return (
    <div className="flex items-center justify-between gap-8 p-4">
      <div className="flex-1">
        <div className="relative w-full h-120">
          <Image src={"/1g.png"} alt="img" fill className="object-cover" />
        </div>
      </div>
      <div className="flex-2 flex flex-col gap-4">
        <h1 className="text-3xl w-4/5">{data.title}</h1>
        <div className="flex  items-center gap-4">
          <div className="relative w-10 h-10 rounded-full overflow-hidden">
            <Image
              src={"/1g.png"}
              fill
              className="w-full h-full object-cover"
              alt="img"
            />
          </div>
          <div>
            <p className="text-xs text-gray-400">Published by</p>
            <p className="text-sm">Mahesh Saini</p>
          </div>
          <div>
            <p className="text-xs text-gray-400">Pulished at</p>
            <p className="text-sm">24/05/2026</p>
          </div>
        </div>
        <div>
          <p className="pr-10">{data.body}</p>
        </div>
      </div>
    </div>
  );
};

export default SingleBlogPage;
