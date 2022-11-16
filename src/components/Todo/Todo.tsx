import React from "react";

import { useAppDispatch } from "../../hook";
import { removeTask, toggleTask } from "../../store/todoSlice";

import Delete from "./img/delete.png";

import TaskListWrapper from "./Todo.styled";

interface TodoProps {
  id: string;
  task: string;
  status: boolean;
}

const Todo: React.FC<TodoProps> = ({ id, task, status }) => {
  const [isEdit, setIsEdit] = React.useState(false);
  const [userInputValue, setUserInputValue] = React.useState(task);

  const dispatch = useAppDispatch();

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserInputValue(e.target.value);
  };

  const editTask = () => {
    let editText;
    if (isEdit) {
      editText = (
        <input
          className="todo__editTask"
          value={task}
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

  const handlePressKey = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      setIsEdit(false);
    }
  };

  return (
    <TaskListWrapper className="todo__list" >
      <div className="todo__list-left">
        <input
          type="checkbox"
          className="todo__checkbox"
          checked={status}
          onChange={() => dispatch(toggleTask(id))}
        />
        {editTask()}
      </div>
      <div className="todo__list-remove">
        <button
          className="todo__delete"
          type="button"
          onClick={() => dispatch(removeTask(id))}
        >
          <img src={Delete} alt="delete" />
        </button>
      </div>
    </TaskListWrapper>
  );
};

export default Todo;
