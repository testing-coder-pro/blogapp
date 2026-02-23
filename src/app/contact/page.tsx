import Image from "next/image";

const ContactPage = () => {
  return (
    <div className="flex items-center gap-5">
      <div className="flex-1">
        <div className="relative w-full h-120">
          <Image src={"/apple.png"} alt="apple" fill className="object-cover" />
        </div>
      </div>
      <div className="flex-1">
        <form action="" className="flex flex-col gap-5 p-5">
          <div className="flex flex-col gap-2">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              placeholder="Your name"
              className="bg-gray-600/50 px-4 py-2 rounded-lg"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="name">Email address</label>
            <input
              type="email"
              id="email"
              placeholder="email@example.com"
              className="bg-gray-600/50 px-4 py-2 rounded-lg"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="mobile">Mobile number</label>
            <input
              type="number"
              id="mobile"
              placeholder="XXXXXXXXX (Optional)"
              className="bg-gray-600/50 px-4 py-2 rounded-lg"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              rows={4}
              placeholder="Write your message here..."
              className="bg-gray-600/50 px-4 py-2 rounded-lg"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
