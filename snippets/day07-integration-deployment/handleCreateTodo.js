const handleCreateTodo = async (e) => {
  e.preventDefault();

  try {
    const response = await axios.post(
      `${SERVER_URL}/api/v1/todos`,
      newTodoFormData
    );

    const newTodo = response.data;

    setTodos([...todos, newTodo]);
  } catch (error) {
    console.error("Error creating todo:", error);
  }

  // Clear form data and close create todo popup
  setNewTodoFormData({ title: "", description: "" });
  setIsCreateTodoActive(false);
};
