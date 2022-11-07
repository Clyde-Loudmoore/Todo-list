import "./Buttons.css";

const Buttons = ({ todoFilter }) => {
  return (
    <div className="todo__buttons">
      <button className="buttons" onClick={() => todoFilter("All")}>
        All
      </button>
      <button className="buttons" onClick={() => todoFilter(true)}>
        Active
      </button>
      <button className="buttons" onClick={() => todoFilter(false)}>
        Copmlited
      </button>
    </div>
  );
};

export default Buttons;
