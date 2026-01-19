export const Button = ({ click, text, style }) => {
  return (
    <button className={style} onClick={click}>
      {text}
    </button>
  );
};
