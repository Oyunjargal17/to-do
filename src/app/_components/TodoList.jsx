"use client";

import { useState } from "react";
import { Button } from "./Button";
import { TaskList } from "./TaskList";

export const ToDoList = () => {
  const [value, setValue] = useState("");
  const [todos, setTodos] = useState([]);

  console.log(todos);

  const add = () => {
    const newTodo = {
      id: todos.length + 1,
      value: value,
    };

    const newTodos = [...todos, newTodo];

    setTodos(newTodos);
    setValue("");
  };

  const handleChange = (event) => {
    setValue(event.target.value);
  };
  return (
    <div className="flex justify-center min-h-screen items-center bg-[#f3f4f6] font-sans">
      <div className="w-94.25 h-fit bg-white rounded-md">
        <h1 className="text-2xl flex justify-center mt-2 py-2">To-Do list</h1>
        <div className="p-4 flex flex-col gap-2">
          <div className="flex justify-center gap-3">
            <input
              type="text"
              className=" border border-[#f3f4f6] w-70 h-10 rounded-sm"
              value={value}
              onChange={handleChange}
            />
            <Button text="Add" click={add} />
          </div>
          <div className="flex gap-3 justify-start p-5">
            <Button text="All" />
            <Button text="Active" />
            <Button text="Completed" />
          </div>
          {todos.length === 0 ? (
            <p className="flex justify-center p-4 text-[#7f8591] text-[14px]">
              No tasks yet. Add one above!
            </p>
          ) : (
            <TaskList todos={todos} />
          )}

          <div className="flex gap-2 justify-center p-4">
            <p className="text-[#7f8591] text-[12px]">Powered by</p>
            <p className="text-[#4278ed] text-[12px]">Pinecone academy</p>
          </div>
        </div>
      </div>
    </div>
  );
};
