useEffect(() => {
  const fetchTodos = async () => {
    try {
      const response = await axios.get(`${SERVER_URL}/api/v1/todos`);

      setTodos(response.data);
    } catch (error) {
      console.error("Error fetching todos:", error);
    }
  };

  fetchTodos();
}, []);
