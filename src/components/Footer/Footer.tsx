import { useAppSelector } from "../../hook";

import { filteringTask } from "../../store/todoSlice";

import FooterContainer from "./FooterContainer.styled";

const Footer = () => {
  const newTodos = useAppSelector(filteringTask);

  return (
    <FooterContainer>
      {newTodos.filteredTodos.length > 0 && (
        <div className="todo__content-wrapper">
          <p>
            total active: {newTodos.filteredTodos.length - newTodos.activeCount}
          </p>
          <p>total complited: {newTodos.activeCount}</p>
        </div>
      )}
    </FooterContainer>
  );
};

export default Footer;
