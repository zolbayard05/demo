import Nav from "./Nav";

let Hero = () => {
  return (
    <section className="relative h-[760px] overflow-hidden">
      <div className="absolute inset-0 bg-[url('/assets/hero.jpg')] bg-cover bg-center" />
      <div className="absolute inset-0 bg-black/60" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/40 to-black" />

      <Nav />

      <div className="relative z-20 mx-auto mt-14 flex max-w-7xl items-center gap-20 px-12">
        <div className="w-[520px] overflow-hidden rounded-3xl">
          <img
            src="/assets/basketball.jpg"
            className="h-[500px] w-full object-cover"
          />
        </div>

        <div className="max-w-[620px]">
          <p className="mb-2 text-4xl font-bold text-white/40">Мэдүүштэй</p>

          <h1 className="text-4xl font-bold uppercase font-serif leading-snug">
            Гурвантэс сумын оюутнуудын спорт өдөрлөгөөс онцлох нь + 165 сая
            төгрөгийн сургалтын тэтгэлэг
          </h1>

          <div className="mt-10 flex items-center gap-3">
            <img
              src="/assets/girl.png"
              className="h-12 w-12 rounded-full object-cover ring-1 ring-gray-300 ring-offset-3 ring-offset-black"
            />
            <div>
              <p className="font-bold">Saranchimeg Batdorj</p>
              <p className="text-sm text-white/80">4 сарын 28, 2026 • 6 мин</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Hero;
