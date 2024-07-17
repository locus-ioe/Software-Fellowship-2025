const handleDeleteTodo = async () => {
  try {
    await axios.delete(`${SERVER_URL}/api/v1/todos/${deleteTodoID}`);
    const updatedTodoList = todos.map((todo) =>
      todo.id === deleteTodoID ? { ...todo, status: "deleted" } : todo
    );

    setTodos(updatedTodoList);
  } catch (error) {
    console.error("Error deleting todo:", error);
  }

  setDeleteTodoID(null);
  setDeleteTaskConfirmation(false);
};
