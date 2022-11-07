import Delete from "./img/delete.png";
import "./Todo.css";

const Todo = ({ todo, toggleTask, onDelete }) => {
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
            {todo.task}
          </div>
          <div className="todo__list-remove">
            <button className="todo__delete" type="button" onClick={() => onDelete(todo.id)}>
              <img src={Delete} alt="delete" />
            </button>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Todo;
