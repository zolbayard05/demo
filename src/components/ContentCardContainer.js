import ContentCard from "./ContentCard";

const contents = [
  {
    image: "laptop.jpg",
    category: "TECHWORM",
    title:
      "Unread туршив: Тоглоомын дүрмийг өөрчлөх 600 долларын үнэтэй MacBook",
    time: "3 мин",
  },
  {
    image: "flower.jpg",
    category: "МЭДҮҮШТЭЙ",
    title: "Гоо сайханд золиос хэрэгтэй, гэхдээ золиос нь байгаль төлсөөр байх",
    time: "1 мин",
  },
  {
    image: "guy.jpg",
    category: "МЭДҮҮШТЭЙ",
    title:
      "Flor de Caña ромтой, Эх дэлхийн өдөрт зориулсан коктейлуудыг хаанаас",
    time: "4 мин",
  },
  {
    image: "mail.jpg",
    category: "БЛОГ",
    title: "Unread-ийн 10 жилийн ойд: Уншигчдадаа хүргэх захидал",
    time: "5 мин",
  },
  {
    image: "notebook.jpg",
    category: "ЧӨЛӨӨТ",
    title: "unread.games-ийн “Сүлбээ”-г амжилттай давах 5 шифи",
    time: "4 мин",
  },
];

let ContentCardContainer = () => {
  return (
    <section className="bg-black px-12 pb-20 text-white">
      <div className="mb-8 ml-78">
        <h2 className="text-xl font-bold">Редакцын сонголт</h2>
      </div>
      <div className="mt-12 ml-28">
        <div className="flex gap-8">
          {contents.map((a, i) => (
            <ContentCard key={i} {...a} />
          ))}
        </div>
      </div>
    </section>
  );
};
export default ContentCardContainer;
