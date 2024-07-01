import { useState } from "react";

import TodoStatusContainer from "./TodoStatusContainer";

import { FaCheck } from "react-icons/fa";
import { FaArrowRotateRight } from "react-icons/fa6";
import { IoIosAddCircle } from "react-icons/io";

import { todosList } from "../assets/json/todos.json";
import DeleteConfirmation from "./Deleteconfirmation";
import Popup from "./Popup";

const Todos = () => {
  const [todos, setTodos] = useState(todosList);

  const [newTodoFormData, setNewTodoFormData] = useState({
    title: "",
    description: "",
  });

  const [editTodoFormData, setEditTodoFormData] = useState({
    id: "",
    title: "",
    description: "",
    status: "",
  });

  const [isCreateTodoActive, setIsCreateTodoActive] = useState(false);

  const [editTodoID, setEditTodoID] = useState(null);
  const [isEditTodoActive, setIsEditTodoActive] = useState(false);

  const [deleteTodoID, setDeleteTodoID] = useState(null);
  const [deleteTaskConfirmation, setDeleteTaskConfirmation] = useState(false);

  // Function to filter todos based on status
  const filterTodos = (status) => {
    return todos.filter((todo) => todo.status === status);
  };

  // Handler for creating a new todo
  const handleCreateTodo = (e) => {
    e.preventDefault();

    // Placeholder for API call to add new todo
    // Actual API call would fetch the new todo's ID from the backend
    const newTodo = { ...newTodoFormData, id: todos.length, status: "ongoing" };
    setTodos([...todos, newTodo]);

    // Clear form data and close create todo popup
    setNewTodoFormData({ title: "", description: "" });
    setIsCreateTodoActive(false);
  };

  // Handler for editing an existing todo
  const handleEditTodo = (e) => {
    e.preventDefault();

    // Placeholder for API call to update the todo in the backend with editTodoFormData
    const updatedTodos = todos.map((todo) =>
      todo.id === editTodoID ? editTodoFormData : todo
    );

    setTodos(updatedTodos);
    setEditTodoID(null);
    setIsEditTodoActive(false);
  };

  // Handler for marking a todo as completed
  const handleCheckedTodo = (id) => {
    const updatedTodoList = todos.map((todo) => {
      if (id === todo.id) {
        todo.status = "completed";
      }
      return todo;
    });

    setTodos(updatedTodoList);
  };

  // Handler for deleting a todo
  const handleDeleteTodo = () => {
    // Placeholder for API call to delete the todo in the backend
    const updatedTodoList = todos.filter((todo) => {
      if (deleteTodoID === todo.id) {
        todo.status = "deleted";
      }
      return todo;
    });

    setTodos(updatedTodoList);
    setDeleteTodoID(null);
    setDeleteTaskConfirmation(false);
  };

  // Function to show delete confirmation popup
  const showDeleteConfirmation = (id) => {
    setDeleteTodoID(id);
    setDeleteTaskConfirmation(true);
  };

  // Function to show edit todo popup
  const showEditTodo = (id) => {
    const selectedTodo = todos.filter((todo) => todo.id === id)[0];
    setEditTodoID(id);
    setEditTodoFormData(selectedTodo);
    setIsEditTodoActive(true);
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
          onChecked={handleCheckedTodo}
          onEdit={showEditTodo}
        />
        <TodoStatusContainer
          title="Completed"
          todos={filterTodos("completed")}
          icon={
            <FaCheck
              className="bg-green-500 text-white p-2 rounded-md"
              size={30}
            />
          }
          onDelete={showDeleteConfirmation}
          onChecked={handleCheckedTodo}
          onEdit={showEditTodo}
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

      {/* Create New Todo Popup */}
      {isCreateTodoActive && (
        <Popup
          title="Enter Task Details"
          onSubmit={handleCreateTodo}
          formData={newTodoFormData}
          setFormData={setNewTodoFormData}
          onClose={() => setIsCreateTodoActive(false)}
        />
      )}

      {/* Edit Todo Popup */}
      {isEditTodoActive && (
        <Popup
          title="Edit Task Details"
          onSubmit={handleEditTodo}
          formData={editTodoFormData}
          setFormData={setEditTodoFormData}
          onClose={() => setIsEditTodoActive(false)}
        />
      )}

      {/* Delete Confirmation Popup */}
      {deleteTaskConfirmation && (
        <DeleteConfirmation
          onConfirm={handleDeleteTodo}
          onCancel={() => setDeleteTaskConfirmation(false)}
        />
      )}
    </>
  );
};

export default Todos;
