// import Butten from "@/components/Butten";
// import Image from "next/image";
// import Hero from "@/components/Hero";
// import ContentCardContainer from "@/components/ContentCardContainer";

// let Home = () => {
//   return (
//     <main className="min-h-screen bg-black text-white">
//       <Hero />
//       <ContentCardContainer />
//     </main>
//   );
// };

// export default Home;

// import Username from "@/components/Username";
// import Box from "@/components/Box";
// let Home = () => {
//   return (
//     <div className="flex gap-5">
//       <Box
//         time="10min"
//         views="1000"
//         comments="100"
//         title="Unread туршив: Тоглоо&#1084;ын дур&#1084;ийг верчлех 600 долларын
//           унэтэй MacBook"
//         category="Techworm"
//       ></Box>

//       <Box
//         time="5min"
//         views="500"
//         comments="10"
//         title="Unread туршив: Тоглоо&#1084;ын дур&#1084;ийг верчлех 600 долларын
//           унэтэй MacBook"
//         category="News"
//       ></Box>
//     </div>
//   );
// };
// export default Home;
"use client";
import Button from "@/components/Button";
import Todo from "@/components/Todo";

let Home = () => {
  const data = [
    { title: "All", status: true },
    { title: "Active", status: false },
    { title: "Complated", status: false },
  ];
  let test = "";

  let inputValue = (event) => {
    console.log(event.target.value);
    test = event.target.value;
  };
  let handleOnClick = () => {
    console.log("working...");
  };

  const todos = [{ title: "todo", isChecked: true }];

  return (
    <div className="flex flex-col gap-8">
      <div className="flex gap-2">
        <input onChange={inputValue} className="border rounded-md" />
        <butten
          onClick={handleOnClick}
          className="w-fit rounded-[6px] px-3 py-1 bg-[#3c82f6]"
        >
          add
        </butten>
      </div>
      <div className="flex gap-2">
        {data.map((element, index) => {
          return (
            <Button
              key={index}
              title={element.title}
              status={element.status}
            ></Button>
          );
        })}
      </div>
      {todos.map((e, i) => {
        return <Todo title={e.title} key={i} isChecked={e.isChecked}></Todo>;
      })}
    </div>
  );
};
export default Home;
