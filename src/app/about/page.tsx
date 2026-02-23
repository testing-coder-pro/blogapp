import Image from "next/image";

const AboutPage = () => {
  return (
    <div className="p-4 flex flex-col md:flex-row">
      <div className="relative w-full h-[calc(100vh/2)]">
        <Image src={"/apple.png"} alt="shirt" fill className="object-contain" />
      </div>
      <div className="flex flex-col gap-4">
        <h1 className="text-3xl font-bold w-1/2">About thinks here</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt sint
          sequi maiores, iste possimus iusto vero dolorum! Amet, dolorum est.
        </p>
        <div>
          <button className="py-2 px-3 bg-btn">Button 1</button>
          <button className="py-2 px-3 bg-gray-600">Button 2</button>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
