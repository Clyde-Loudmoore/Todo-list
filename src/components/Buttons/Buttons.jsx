import "./Buttons.css";

const Buttons = ({ todoFilter }) => {
  return (
    <div className="todo__buttons">
      <button className="buttons" onClick={() => todoFilter("all")}>
        All
      </button>
      <button className="buttons" onClick={() => todoFilter(false)}>
        Active
      </button>
      <button className="buttons" onClick={() => todoFilter(true)}>
        Copmlited
      </button>
    </div>
  );
};

export default Buttons;
