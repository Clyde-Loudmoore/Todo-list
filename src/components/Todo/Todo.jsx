import React from "react";

import { useDispatch } from "react-redux";
import { removeTask, toggleTask } from "../../store/todoSlice";

import Delete from "./img/delete.png";

import TaskListWrapper from "./Todo.styled";

const Todo = ({ todo }) => {
  const [isEdit, setIsEdit] = React.useState(false);
  const [userInputValue, setUserInputValue] = React.useState(todo.task);

  const dispatch = useDispatch();

  const onChange = (event) => {
    setUserInputValue(event.target.value);
  };

  const editTask = () => {
    let editText;
    if (isEdit) {
      editText = (
        <input
          className="todo__editTask"
          value={userInputValue}
          autoFocus
          onChange={onChange}
          onBlur={() => setIsEdit(false)}
          onKeyDown={(e) => handlePressKey(e)}
        />
      );
    } else {
      editText = (
        <div onDoubleClick={() => setIsEdit(true)}>{userInputValue}</div>
      );
    }
    return editText;
  };

  const handlePressKey = (e) => {
    if (e.key === "Enter") {
      setIsEdit(false);
    }
  };

  return (
    <TaskListWrapper key={todo.id}>
      <ul className="todo">
        <li className="todo__list">
          <div className="todo__list-left">
            <input
              type="checkbox"
              className="todo__checkbox"
              checked={todo.status}
              onChange={() => dispatch(toggleTask(todo.id))}
            />
            {editTask()}
          </div>
          <div className="todo__list-remove">
            <button
              className="todo__delete"
              type="button"
              onClick={() => dispatch(removeTask(todo.id))}
            >
              <img src={Delete} alt="delete" />
            </button>
          </div>
        </li>
      </ul>
    </TaskListWrapper>
  );
};

export default Todo;
