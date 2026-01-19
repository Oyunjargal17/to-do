import { Button } from "./Button";

export const TaskList = ({ todos }) => {
  return (
    <>
      {todos.map((task) => {
        return (
          <div
            key={task.id}
            className="flex items-center justify-between p-2 bg-[#F9FAFB] rounded-sm"
          >
            <div className="flex gap-2">
              <input type="checkbox" />
              <p>{task.value}</p>
            </div>
            <Button text="Delete" />
          </div>
        );
      })}
    </>
  );
};
