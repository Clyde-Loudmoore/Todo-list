import styled from "styled-components";

const TaskListWrapper = styled.div`
  width: 70%;
  padding: 0;
  .todo {
    padding: 0;
  }

  .todo__list {
    background: #a4d7e7;
    padding: 10px 20px;
    margin-top: 10px;
    border: 2px solid #4a90e2;
    list-style-type: none;
    word-break: break-all;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-radius: 5px;
    :hover {
      transform: scale(1.1);
    }
  }

  .todo__list-left {
    display: flex;
  }

  .todo__checkbox {
    margin-right: 5px;
    cursor: pointer;
    :hover {
      transform: scale(1.3);
    }
  }
  .todo__delete {
    background: none;
    border: none;
    padding: 0;
    cursor: pointer;
    :hover {
      transform: scale(1.3);
    }
  }
  .todo__delete img {
    width: 20px;
  }
  .todo__editTask {
    outline: 0;
    border: 1px solid #4a90e2;
    border-radius: 5px;
  }
`;

export default TaskListWrapper;
