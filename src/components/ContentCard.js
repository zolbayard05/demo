let ContentCard = ({ image, category, title, time }) => {
  return (
    <div className="relative overflow-hidden rounded-xl">
      <img
        src={`/assets/${image}`}
        className="h-[450px] w-[290px] object-cover"
      />

      <div className="absolute inset-0 bg-gradient-to-t via-black/40 to-transparent" />

      <div className="absolute left-4 top-4 flex w-[90%] justify-between text-sm">
        <span className="text-blue-500">●</span>
        <span>{time}</span>
      </div>

      <div className="absolute bottom-5 left-5 right-5">
        <p className="mb-5 text-lg font-bold leading-snug">{title}</p>

        <span className="rounded-full bg-blue-600 px-4 py-2 text-xs font-semibold">
          {category}
        </span>
      </div>
    </div>
  );
};
export default ContentCard;
