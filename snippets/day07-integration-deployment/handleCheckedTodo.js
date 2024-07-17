const handleCheckedTodo = async (id) => {
  try {
    const response = await axios.patch(`${SERVER_URL}/api/v1/todos/${id}`, {
      status: "completed",
    });

    const updatedTodo = response.data;

    const updatedTodoList = todos.map((todo) =>
      todo.id === id ? updatedTodo : todo
    );

    setTodos(updatedTodoList);
  } catch (error) {
    console.error("Error marking todo as completed:", error);
  }
};
