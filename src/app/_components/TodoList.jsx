"use client";

import { useState } from "react";
import { TaskList } from "./TaskList";

export const ToDoList = () => {
  const [inputValue, setInputValue] = useState("");
  const [todos, setTodos] = useState([]);

  // console.log(todos);

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

  const onToggleCheckbox = (taskId) => {
    const newTodo = todos.map((todo) => {
      if (todo.id !== taskId) {
        return todo;
      }
      return {
        ...todo,
        checked: !todo.checked,
      };
    });
    setTodos(newTodo);
  };

  const handleDelete = (taskId) => {
    console.log("taskId:", taskId);
    const newDelete = todos.filter((todo) => todo.id !== taskId);
    setTodos(newDelete);
    console.log(newDelete);
  };

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
            <button className="bg-[#F3F4F6] h-fit p-2  rounded-sm text-center">
              All
            </button>
            <button className="bg-[#F3F4F6] h-fit p-2 rounded-sm text-center">
              Active
            </button>
            <button className="bg-[#F3F4F6] h-fit p-2 rounded-sm text-center">
              Completed
            </button>
          </div>
          {todos.length === 0 ? (
            <p className="flex justify-center p-4 text-[#7f8591] text-[14px]">
              No tasks yet. Add one above!
            </p>
          ) : (
            <TaskList
              todos={todos}
              onToggleCheckbox={onToggleCheckbox}
              handleDelete={handleDelete}
            />
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

// "use client";

// import { useState } from "react";

// export const ToDoList = () => {
//   const [value, setValue] = useState("");
//   const [task, setTask] = useState([]);

//   console.log(setValue);
//   const handleInput = (e) => setValue(e.target.value);

//   const handleAdd = () => {
//     setTask([...task, value]);
//     setValue("");
//   };

//   return (
//     <div>
//       <div className="flex flex-col justify-center items-center min-h-screen">
//         <h1>To Do List</h1>
//         <div className="flex gap-2">
//           <input
//             value={value}
//             onChange={handleInput}
//             type="text"
//             className="border"
//           />
//           <button className="bg-gray-300" onClick={handleAdd}>
//             Add
//           </button>
//         </div>
//         {task.map((item, index) => (
//           <div key={index}>
//             <input type="checkbox" />
//             <span>{item}</span>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };
