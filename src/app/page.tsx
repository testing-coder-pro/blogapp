import Image from "next/image";

const HomePage = () => {
  return (
    <div className="flex items-center justify-between gap-4 p-4 flex-col-reverse md:flex-row">
      <div className="flex-1 flex-col flex gap-5">
        <h1 className="text-6xl w-3/4 font-bold">Here Your Main Text Goes</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum qui
          quasi voluptatum eius ea eveniet cumque sed, quisquam sunt asperiores.
        </p>
        <div>
          <button className="bg-btn text-white px-3 py-2 cursor-pointer">
            Learn More
          </button>
          <button className="bg-gray-600 text-white px-3 py-2 cursor-pointer">
            Do Something
          </button>
        </div>
      </div>
      <div className="flex-1">
        <div className="relative w-120 md:w-full h-120">
          <Image src={"/1g.png"} alt="img" fill className="object-cover" />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
