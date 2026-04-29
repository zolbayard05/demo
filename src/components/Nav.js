let Nav = () => {
  return (
    <nav className="relative z-20 flex items-center pr-50 pl-50 h-30 gap-6">
      <img src="/assets/menu.svg" className="w-10 h-10" />

      <img src="/assets/unread.png" className="w-38 h-5 ml-26" />

      <div className="text-2xl font-thin">|</div>

      <img src="/assets/search.svg" className="w-4 h-4" />

      <div className="flex items-center gap-6 text-sm ml-120">
        <span>СОНИНЫ ЦАХИМ ХУВИЛБАР</span>
        <div className="rounded-full bg-white/40 px-6 py-2.5 font-bold">
          newspaper.mn
        </div>
      </div>
      <div className="flex gap-4 ml-auto items-center">
        <img src="/assets/facebook.svg" className="w-6 h-6"></img>
        <img src="/assets/instagram.svg" className="w-4 h-4"></img>
        <img src="/assets/twitter.svg" className="w-4 h-4"></img>
        <img src="/assets/in.svg" className="w-4 h-4"></img>
      </div>
    </nav>
  );
};
export default Nav;
