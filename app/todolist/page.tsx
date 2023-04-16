"use client";
import { useEffect, useState } from "react";
import styles from "./style.module.scss";

export default function TodoList() {
  const [todos, setTodos] = useState([] as { id: string; text: string }[]);
  const [input, setInput] = useState("");

  useEffect(() => {
    const savedTodos = localStorage.getItem("todos");
    if (savedTodos) {
      setTodos(JSON.parse(savedTodos));
    }
  }, []);

  const addTodo = (e: { preventDefault: () => void }) => {
    e.preventDefault();

    if (input.trim()) {
      const newTodos = [...todos, { id: Date.now().toString(), text: input }];
      setTodos(newTodos);
      setInput("");
      localStorage.setItem("todos", JSON.stringify(newTodos));
    }
  };

  const removeTodo = (id: string) => {
    const item = document.getElementById(`todo-item-${id}`);
    if (item) {
      item.classList.add("todo-remove");
      setTimeout(() => {
        const newTodos = todos.filter((todo) => todo.id !== id);
        setTodos(newTodos);
        localStorage.setItem("todos", JSON.stringify(newTodos));
      }, 600);
    }
  };

  return (
    <div>
      <h1 className="text-3xl font-semibold text-white mb-4">Todo App</h1>

      <form onSubmit={addTodo} className="mb-4">
        <input
          type="text"
          placeholder="Enter a task..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="w-full border border-gray-600 rounded-lg px-4 py-2 focus:outline-none focus:border-purple-500 bg-gray-900 text-white"
        />
        <button
          type="submit"
          className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg px-4 py-2 mt-3 hover:from-blue-600 hover:to-purple-600 transition-all duration-300"
        >
          Add Task
        </button>
      </form>
      <ul>
        {todos.map((todo, index) => (
          <li
            key={todo.id}
            id={`todo-item-${todo.id}`}
            className="bg-gray-800 text-gray-200 rounded-lg px-4 py-2 mb-2 flex justify-between items-center todo-slide-down"
          >
            <span>{todo.text}</span>
            <button
              onClick={() => removeTodo(todo.id)}
              className="bg-red-500 text-white rounded-lg px-2 py-1 hover:bg-red-600 transition-all"
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
