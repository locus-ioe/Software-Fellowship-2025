import { useState } from "react";

import TodoStatusContainer from "./TodoStatusContainer";

import { FaCheck } from "react-icons/fa";
import { FaArrowRotateRight } from "react-icons/fa6";
import { IoIosAddCircle } from "react-icons/io";
import { FaArrowRight } from "react-icons/fa";

import { todosList } from "../assets/json/todos.json";

const Todos = () => {
  const [todos, setTodos] = useState(todosList);
  const [newTodoFormData, setNewTododFormData] = useState({
    title: "",
    description: "",
  });
  const [isCreateTodoActive, setIsCreateTodoActive] = useState(false);

  const [deleteTodoID, setDeleteTodoID] = useState(null);
  const [deleteTaskConfirmation, setDeleteTaskConfirmation] = useState(false);

  const filterTodos = (status) => {
    return todos.filter((todo) => todo.status == status);
  };

  const handleCreateTodo = (e) => {
    e.preventDefault();

    // API call to add new todo

    /*
    We will get the id of the create todo from the API call since we 
    donot have api call right now so I will just randomly assign the id
    */

    console.log(newTodoFormData);
    const newTodo = { ...newTodoFormData, id: todos.length, status: "ongoing" };
    setTodos([...todos, newTodo]);

    setNewTododFormData({ title: "", description: "" });
    setIsCreateTodoActive(false);
  };

  const handleDeleteTodo = () => {
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
        <div
          className="bg-blue-500 text-white text-xl rounded-3xl p-8 py-3 font-semibold tracking-wide flex justify-center items-center gap-4 cursor-pointer shadow-2xl"
          onClick={() => setIsCreateTodoActive(true)}
        >
          Add a Task{" "}
          <IoIosAddCircle className="inline cursor-pointer" size={30} />
        </div>
      </div>

      {/* Create new Todo */}
      {isCreateTodoActive && (
        <div className="fixed inset-0 z-50 ">
          <div className="bg-[#00000088] w-screen h-screen flex justify-center items-center ">
            <div className="bg-gray-50 px-16 py-12 rounded-[45px] flex flex-col space-y-12 justify-center items-center shadow-lg w-1/3">
              <div className="text-4xl font-semibold tracking-wide">
                <span className="text-stone-500">Enter</span> Task Details
              </div>
              <form onSubmit={handleCreateTodo} className="w-full">
                <div className="mb-6">
                  <label htmlFor="title" className="block text-xl mb-2">
                    Title
                  </label>
                  <input
                    type="text"
                    name="title"
                    id="title"
                    placeholder="Enter Title"
                    className="w-full shadow-md bg-white p-3 rounded-2xl focus:outline-blue-400"
                    onChange={(e) => {
                      setNewTododFormData({
                        ...newTodoFormData,
                        title: e.target.value,
                      });
                    }}
                  />
                </div>
                <div className="mb-6">
                  <label htmlFor="description" className="block text-xl mb-2">
                    Description
                  </label>
                  <textarea
                    name="description"
                    id="description"
                    placeholder="Enter Description"
                    className="w-full shadow-md bg-white p-3 rounded-2xl h-64 focus:outline-blue-400"
                    onChange={(e) => {
                      setNewTododFormData({
                        ...newTodoFormData,
                        description: e.target.value,
                      });
                    }}
                  />
                </div>
                <div className="flex justify-end">
                  <button
                    type="submit"
                    className="bg-blue-500 text-white text-xl py-3 px-6 rounded-3xl shadow-lg hover:bg-blue-600 transition duration-300 flex justify-center items-center gap-4"
                  >
                    Add Task <FaArrowRight />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}

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
                  onClick={handleDeleteTodo}
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
