import { useState } from "react";

import TodoStatusContainer from "./TodoStatusContainer";

import { FaCheck } from "react-icons/fa";
import { FaArrowRotateRight } from "react-icons/fa6";
import { IoIosAddCircle } from "react-icons/io";

import { todosList } from "../assets/json/todos.json";

const Todos = () => {
  const [todos, setTodos] = useState(todosList);
  const [deleteTodoID, setDeleteTodoID] = useState(null);
  const [deleteTaskConfirmation, setDeleteTaskConfirmation] = useState(false);

  const filterTodos = (status) => {
    return todos.filter((todo) => todo.status == status);
  };

  const handleDelete = () => {
    /*
    Here,we are just updating in the frontend side
    In integration side we update in backend side too by making api call
    */
    const updatedTodoList = todos.filter((todo) => {
      if (deleteTodoID == todo.id) {
        todo.status = "deleted";
      }
      return todo;
    });

    setTodos(updatedTodoList);
    setDeleteTodoID(null);
    setDeleteTaskConfirmation(false);
  };

  const showDeleteConfirmation = (id) => {
    setDeleteTodoID(id);
    setDeleteTaskConfirmation(true);
  };

  return (
    <>
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
          onDelete={showDeleteConfirmation}
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
          onDelete={showDeleteConfirmation}
        />
      </div>
      <div className="flex justify-center items-center mt-16">
        <div className="bg-blue-500 text-white text-xl rounded-3xl p-8 py-3 font-semibold tracking-wide flex justify-center items-center gap-4 cursor-pointer shadow-2xl">
          Add a Task{" "}
          <IoIosAddCircle className="inline cursor-pointer" size={30} />
        </div>
      </div>
      {/* Delete Task Confirmation Popup Element */}
      {deleteTaskConfirmation && (
        <div className="fixed inset-0 z-50 ">
          <div className="bg-[#00000088] w-screen h-screen flex justify-center items-center ">
            <div className=" bg-white px-16 py-12 rounded-[45px] flex flex-col space-y-12 justify-center items-center">
              <div className="text-4xl font-semibold tracking-wide">
                <span className="text-stone-500">Delete</span> Task?
              </div>
              <div className="flex justify-center items-center gap-8 text-white text-xl tracking-wide">
                <button
                  className="rounded-3xl bg-[#578EFB] px-7 py-3 shadow-md hover:bg-[#2869eb]"
                  onClick={handleDelete}
                >
                  Yes
                </button>
                <button
                  className="rounded-3xl bg-gray-400 px-7 py-3 shadow-md hover:bg-gray-500"
                  onClick={() => {
                    setDeleteTodoID(null);
                    setDeleteTaskConfirmation(false);
                  }}
                >
                  No
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Todos;
