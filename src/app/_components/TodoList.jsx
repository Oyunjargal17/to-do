"use client";

import { useState } from "react";
import { TaskList } from "./TaskList";

export const ToDoList = () => {
  const [inputValue, setInputValue] = useState("");
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState("all");

  const handleAdd = () => {
    const newTodo = {
      id: Date.now(),
      text: inputValue,
      checked: false,
    };

    const newTodos = [...todos, newTodo];

    setTodos(newTodos);
    setInputValue("");
  };

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const onToggleCheckbox = (todoId) => {
    const newTodo = todos.map((todo) => {
      if (todo.id !== todoId) {
        return todo;
      } else {
        return { ...todo, checked: !todo.checked };
      }
    });
    setTodos(newTodo);
  };

  const handleDelete = (todoId) => {
    const isItTrue = confirm("Та устгахдаа итгэлтэй байна уу?");
    if (isItTrue) {
      const newDelete = todos.filter((todo) => todo.id !== todoId);
      setTodos(newDelete);
      return;
    }
  };
  const completedDelete = (todoId) => {
    const isItTrue = confirm("Та устгахдаа итгэлтэй байна уу?");
    if (isItTrue) {
      const newDelete = todos.filter((todo) => !todo.checked);
      setTodos(newDelete);
      return;
    }
  };

  const filterTodos = (filterValue) => {
    setFilter(filterValue);
  };

  const filteredTodo = todos.filter((todo) => {
    if (filter === "active" && !todo.checked) {
      return true;
    }
    if (filter === "completed" && todo.checked) {
      return true;
    }
    if (filter === "all") {
      return true;
    }
  });

  const checkedTasks = todos.filter((todo) => todo.checked).length;

  return (
    <div className="flex justify-center min-h-screen items-center bg-[#f3f4f6] font-sans">
      <div className="w-94.25 h-fit bg-white rounded-md">
        <h1 className="text-2xl flex justify-center mt-2 py-2">To-Do list</h1>
        <div className="p-4 flex flex-col gap-2">
          <div className="flex justify-center gap-3">
            <input
              type="text"
              className=" border border-[#f3f4f6] w-70 h-10 rounded-sm p-3"
              value={inputValue}
              onChange={handleInputChange}
              placeholder="Add a new task..."
            />
            <button
              className="bg-[#3c82f6] rounded-sm w-15 h-10 text-white text-[14px]"
              onClick={handleAdd}
            >
              Add
            </button>
          </div>
          <div className="flex gap-3 justify-start p-5">
            <button
              onClick={() => filterTodos("all")}
              className={` h-fit p-2  rounded-sm text-center cursor-pointer ${filter === "all" ? "bg-[#3C82F6] text-white" : "bg-[#F3F4F6]"}`}
            >
              All
            </button>
            <button
              onClick={() => filterTodos("active")}
              className={` h-fit p-2 rounded-sm text-center cursor-pointer ${filter === "active" ? "bg-[#3C82F6] text-white" : "bg-[#F3F4F6]"}`}
            >
              Active
            </button>
            <button
              onClick={() => filterTodos("completed")}
              className={`h-fit p-2 rounded-sm text-center cursor-pointer ${filter === "completed" ? "bg-[#3C82F6] text-white" : "bg-[#F3F4F6]"}`}
            >
              Completed
            </button>
          </div>
          {todos.length === 0 ? (
            <p className="flex justify-center p-4 text-[#7f8591] text-[14px]">
              No tasks yet. Add one above!
            </p>
          ) : (
            <div>
              <TaskList
                todos={filteredTodo}
                onToggleCheckbox={onToggleCheckbox}
                handleDelete={handleDelete}
              />
              <div className="border-b border-[#6B7280] mt-2"></div>
              <div className="flex justify-between">
                <p className="text-[#6B7280] text-sm p-2">
                  {checkedTasks} of {todos.length} tasks completed
                </p>
                <button
                  className="text-[#EF4444] text-sm"
                  onClick={completedDelete}
                >
                  Clear completed
                </button>
              </div>
            </div>
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
