"use client";

import { useState } from "react";
import { Button } from "./Button";

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
        <div>
          <div className="flex justify-center gap-3">
            <input
              type="text"
              className=" border border-[#f3f4f6] w-[280px] h-[40px] rounded-sm"
              value={value}
              onChange={handleChange}
            />
            <Button
              text="Add"
              click={add}
              style="bg-[#3c82f6] rounded-sm w-[59px] h-[40px] text-white text-[14px]"
            />
          </div>
          <div className="flex gap-3 justify-start p-5">
            <Button
              text="All"
              style="bg-[#f3f4f6] w-[38px] h-[32px] rounded-sm text-[12px]"
            />
            <Button
              text="Active"
              style="bg-[#f3f4f6] w-[60px] h-[32px] rounded-sm text-[12px]"
            />
            <Button
              text="Completed"
              style="bg-[#f3f4f6] w-[87px] h-[32px] rounded-sm text-[12px]"
            />
          </div>
          {todos.map((todo) => {
            return <p key={todo.id}>{todo.value}</p>;
          })}
          <p className="flex justify-center p-4 text-[#7f8591] text-[14px]">
            No tasks yet. Add one above!
          </p>

          <div className="flex gap-2 justify-center p-4">
            <p className="text-[#7f8591] text-[12px]">Powered by</p>
            <p className="text-[#4278ed] text-[12px]">Pinecone academy</p>
          </div>
        </div>
      </div>
    </div>
  );
};
