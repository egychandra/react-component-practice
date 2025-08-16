import { useState } from "react"

const TodoList = () => {
  const [ task, setTask ] = useState("");
  const [ todos, setTodos ] = useState([]);
  const [ filter, setFilter ] = useState("all");
  const [ isEditTodo, setIsEditTodo ] = useState(false);
  const [ editId, setEditId ] = useState(null);

  const addTodo = () => {
    if (!task.trim()) return;
    setTodos([...todos, { id: Date.now(), text: task, completed: false }]);
    setTask("");
  }

  const handleToggleComplete = (id) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  }

  const handleEditTodo = (id) => {
    const editTodo = todos.find(todo => todo.id === id);
    if (editTodo) {
      setTask(editTodo.text);
      setIsEditTodo(true);
      setEditId(id);
    }
  }

  const updateTodo = () => {
    if (!task.trim()) return;
    setTodos(todos.map(todo => 
      todo.id === editId ? { ...todo, text: task } : todo
    ));
    setTask("");
    setIsEditTodo(false);
    setEditId(null);
  }

  const handleDeleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
    setTask("");
    setIsEditTodo(false);
    setEditId(null);
  }

  const filteredTodos = todos.filter(todo => 
    filter === "completed"
    ? todo.completed
    : filter === "incomplete"
    ? !todo.completed
    : true
  );

  return (
    <div className="w-md max-w-lg">
      <h1 className="text-2xl font-bold mb-4 text-center">Todo List Copy</h1>
      <div className="flex gap-4 mb-4">
        <input
          className="w-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded px-3 py-2"
          type="text"
          placeholder="Enter task..."
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <button
          className="bg-blue-500 rounded text-white cursor-pointer px-4 py-1 hover:bg-blue-600 transition-colors duration-200"
          onClick={isEditTodo ? updateTodo : addTodo}
        >
          {isEditTodo ? "Update" : "Add"}
        </button>
      </div>
      {todos.length > 0 && (
        <div className="flex gap-2 mb-4">
          <button
            className="rounded px-2 py-1 bg-gray-300 hover:bg-gray-400 transition-colors duration-200 cursor-pointer"
            onClick={() => setFilter("all")}
          >
            All
          </button>
          <button
            className="rounded px-2 py-1 bg-green-300 hover:bg-green-400 transition-colors duration-200 cursor-pointer"
            onClick={() => setFilter("completed")}
          >
            Completed
          </button>
          <button
            className="rounded px-2 py-1 bg-red-300 hover:bg-red-400 transition-colors duration-200 cursor-pointer"
            onClick={() => setFilter("incomplete")}
          >
            Incomplete
          </button>
        </div>
      )}
      <ul className="space-y-2">
        {filteredTodos.map(todo => (
          <li
            className="flex justify-between border border-gray-300 px-3 py-2 rounded"
            key={todo.id}
          >
            <span
              className={`cursor-pointer ${ todo.completed ? "line-through text-gray-500" : "" }`}
              onClick={() => handleToggleComplete(todo.id)}
            >
              {todo.text}
            </span>
            <div className="flex gap-2">
              <button
                className="cursor-pointer text-blue-500"
                onClick={() => handleEditTodo(todo.id)}
              >
                Update
              </button>
              <button
                className="cursor-pointer text-red-500"
                onClick={() => handleDeleteTodo(todo.id)}
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )

}

export default TodoList;