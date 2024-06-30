import { useState } from "react";

import TodoStatusContainer from "./TodoStatusContainer";

import { FaCheck } from "react-icons/fa";
import { FaArrowRotateRight } from "react-icons/fa6";
import { IoIosAddCircle } from "react-icons/io";

import { todosList } from "../assets/json/todos.json";

const Todos = () => {
  const [todos] = useState(todosList);

  const filterTodos = (status) => {
    return todos.filter((todo) => todo.status == status);
  };

  return (
    <div>
      <div id="title" className="text-stone-500 text-4xl font-black my-12">
        Organize your <span className="text-black">To-Dos</span>
      </div>
      <div className="flex space-x-16">
        <TodoStatusContainer
          title="Ongoing"
          todos={filterTodos("ongoing")}
          icon={
            <FaArrowRotateRight
              className="bg-yellow-400 text-white p-2 rounded-md"
              size={30}
            />
          }
        />
        <TodoStatusContainer
          title="Completed"
          todos={filterTodos("completed")}
          icon={
            <FaCheck
              className="bg-green-500 text-white p-2  rounded-md"
              size={30}
            />
          }
        />
      </div>
      <div className="flex justify-center items-center mt-16">
        <div className="bg-blue-500 text-white text-xl rounded-3xl p-8 py-3 font-semibold tracking-wide flex justify-center items-center gap-4 cursor-pointer shadow-2xl">
          Add a Task{" "}
          <IoIosAddCircle className="inline cursor-pointer" size={30} />
        </div>
      </div>
    </div>
  );
};

export default Todos;
