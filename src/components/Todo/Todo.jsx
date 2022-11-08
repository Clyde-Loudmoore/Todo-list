import React from "react";

import Delete from "./img/delete.png";

import "./Todo.css";

const Todo = ({ todo, toggleTask, onDelete }) => {
  const [isEdit, setIsEdit] = React.useState(false);
  const [userInputValue, setUserInputValue] = React.useState(todo.task);

  const onChange = (event) => {
    setUserInputValue(event.target.value);
  };

  const editTask = () => {
    let editText;
    if (isEdit) {
      editText = (
        <input
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
    <div className="todo__tasklist" key={todo.id}>
      <ul className="todo">
        <li className="todo__list">
          <div className="todo__list-left">
            <input
              type="checkbox"
              className="todo__checkbox"
              defaultChecked={todo.status}
              onClick={() => toggleTask(todo.id)}
            />
            {editTask()}
          </div>
          <div className="todo__list-remove">
            <button
              className="todo__delete"
              type="button"
              onClick={() => onDelete(todo.id)}
            >
              <img src={Delete} alt="delete" />
            </button>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Todo;
