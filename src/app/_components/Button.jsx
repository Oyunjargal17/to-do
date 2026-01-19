export const Button = ({ click, text, style }) => {
  return (
    <>
      {" "}
      {text === "Add" ? (
        <button
          className="bg-[#3c82f6] rounded-sm w-15 h-10 text-white text-[14px]"
          onClick={click}
        >
          {text}
        </button>
      ) : (
        <button
          className={`h-8 p-2 rounded-sm text-[12px] ${text === "Delete" ? "bg-[#FEF2F2] text-[#EF4444]" : "bg-[#F3F4F6] text-[#363636]"}`}
          onClick={click}
        >
          {text}
        </button>
      )}
    </>
  );
};
