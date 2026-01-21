export const TaskList = ({ todos, onToggleCheckbox, handleDelete }) => {
  return (
    <div className="flex flex-col gap-3">
      {todos.map((todo) => {
        return (
          <div
            key={todo.id}
            className="flex items-center justify-between p-2 bg-[#F9FAFB] rounded-sm"
          >
            <div className="flex gap-2">
              <input
                type="checkbox"
                defaultChecked={todo.checked}
                onChange={() => onToggleCheckbox(todo.id)}
              />
              <div className="overflow-auto w-55">
                <p className={`${todo.checked && "line-through"}`}>
                  {todo.text}
                </p>
              </div>
            </div>

            <button
              className="bg-[#FEF2F2] text-[#EF4444] p-1 rounded-sm text-sm"
              onClick={() => handleDelete(todo.id)}
            >
              Delete
            </button>
          </div>
        );
      })}
    </div>
  );
};
