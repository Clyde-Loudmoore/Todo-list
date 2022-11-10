import ButtonsWrapper from "./Buttons.styled";

const Buttons = ({ onClick }) => {
  const buttons = [
    { title: "All", status: "all" },
    { title: "Active", status: "active" },
    { title: "Complited", status: "complited" },
  ];

  return (
    <ButtonsWrapper>
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
    </ButtonsWrapper>
  );
};

export default Buttons;
