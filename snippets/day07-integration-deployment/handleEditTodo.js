const handleEditTodo = async (e) => {
  e.preventDefault();

  try {
    const response = await axios.patch(
      `${SERVER_URL}/api/v1/todos/${editTodoID}`,
      editTodoFormData
    );

    const updatedTodo = response.data;

    const updatedTodos = todos.map((todo) =>
      todo.id === editTodoID ? updatedTodo : todo
    );

    setTodos(updatedTodos);
  } catch (error) {
    console.error("Error editing todo:", error);
  }

  setEditTodoID(null);
  setIsEditTodoActive(false);
};
