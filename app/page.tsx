"use client";
import { useState, useEffect } from "react";

import axios from "axios";
export default function TodoPage() {
  const [todos, setTodos] = useState<any[]>([]);
  async function getTodos() {
    try {
      let res = await axios.get("/api/todos");
      setTodos(res.data.data);
    } catch (err) {
      return err;
    }
  }
  useEffect(() => {
    getTodos();
  }, []);
  return (
    <div>
      {todos.length > 0 &&
        todos.map((todo) => {
          return (
            <h1
              key={todo.id}
            >{`${todo.id} ${todo.title} ${todo.completed}`}</h1>
          );
        })}
    </div>
  );
}
