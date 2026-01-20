export const TaskList = ({ todos, onToggleCheckbox, deleteBtn }) => {
  return (
    <>
      {todos.map((task) => {
        return (
          <div
            key={task.id}
            className="flex items-center justify-between p-2 bg-[#F9FAFB] rounded-sm"
          >
            <div className="flex gap-2">
              <input
                type="checkbox"
                onClick={() => onToggleCheckbox(task.id)}
              />
              <p className={`${task.checked && "line-through"}`}>
                {task.value}
              </p>
            </div>

            <button
              className="bg-[#FEF2F2] text-[#EF4444] p-1 rounded-sm text-sm"
              onClick={() => deleteBtn(task.id)}
            >
              Delete
            </button>
          </div>
        );
      })}
    </>
  );
};
