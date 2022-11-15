import { useDispatch } from "react-redux";
import { filterTodo } from "../../store/todoSlice";

import ButtonsWrapper from "./Buttons.styled";

const buttons = ["All", "Active", "Complited"];

const Buttons = () => {
  const dispatch = useDispatch();

  const handleFilterTodos = (item) => {
    dispatch(filterTodo(item));
  };

  return (
    <ButtonsWrapper>
      {buttons.map((item) => {
        return (
          <button
            className="buttons"
            key={item}
            onClick={() => handleFilterTodos(item)}
          >
            {item}
          </button>
        );
      })}
    </ButtonsWrapper>
  );
};

export default Buttons;
