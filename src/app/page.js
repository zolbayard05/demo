"use client";
import Button from "@/components/Button";
import Todo from "@/components/Todo";
import { useState } from "react";

let Home = () => {
  const data = [
    { title: "All", status: true },
    { title: "Active", status: false },
    { title: "Complated", status: true },
  ];

  const [todos, setTodos] = useState([])
  const [test, setTest] = useState("")

  let inputValue = (event) => {
   setTest(event.target.value)
  };
  let handleOnClick = () => {
    console.log("working...");
    setTodos([...todos,{title: test, isChecked: false}])
    setTest("")
  };

const deleteTask = (index) => {
  setTodos(todos.filter((_, i) => i !== index));
};
  
  return (
    <div className="flex flex-col gap-8">
      <div className="flex gap-2">
        <input onChange={inputValue} className="border rounded-md" value={test}/>
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
        return <Todo 
           title={e.title} 
           key={i} 
           isChecked={e.isChecked} 
           deleteTask={deleteTask} 
           index={i}></Todo>;
      })}
    </div>
  );
};
export default Home;
