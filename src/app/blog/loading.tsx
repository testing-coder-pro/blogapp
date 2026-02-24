const Loading = () => {
  return (
    <div className="flex flex-wrap gap-5 items-center justify-between p-4">
      {[1, 2, 3, 4, 5, 6].map((item) => (
        <div key={item} className="relative w-75">
          <div className="w-75 h-100 bg-gray-500/30 rounded-2xl" />

          <div className="w-20 h-8 bg-gray-400/20 mt-2 rounded-4xl"></div>
          <div className="w-40 h-8 bg-gray-400/20 mt-1 rounded-4xl"></div>
          <div className="absolute top-50 -right-30 rotate-90 bg-gray-500/20 h-5 w-50 rounded-4xl"></div>
        </div>
      ))}
    </div>
  );
};

export default Loading;
