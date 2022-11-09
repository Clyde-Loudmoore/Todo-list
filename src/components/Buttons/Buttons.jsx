import "./Buttons.css";

const Buttons = ({ onClick }) => {
  const buttons = [
    { title: "All", status: "all" },
    { title: "Active", status: "false" },
    { title: "Complited", status: "true" },
  ];

  return (
    <div className="todo__buttons">
      {buttons.map((item, index) => {
        return (
          <button
            className="buttons"
            key={index}
            onClick={() => onClick(item.status)}
          >
            {item.title}
          </button>
        );
      })}
    </div>
  );
};

export default Buttons;
