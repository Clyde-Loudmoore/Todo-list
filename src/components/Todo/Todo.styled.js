import styled from "styled-components";

const TaskListWrapper = styled.div`
  width: 70%;
  padding: 0;
  .todo {
    padding: 0;
  }

  .todo__list {
    background: #f2f56790;
    padding: 10px 20px;
    margin-top: 10px;
    border: 2px dotted #c6c941;
    list-style-type: none;
    word-break: break-all;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-radius: 5px;
    :hover {
      transform: scale(1.1);
      background: #f3f567;
    }
  }

  .todo__list-left {
    display: flex;
  }

  .todo__checkbox {
    margin-right: 5px;
    :hover {
      transform: scale(1.3);
    }
  }
  .todo__delete {
    background: #f2f56790;
    border: none;
    padding: 0;
    :hover {
      transform: scale(1.3);
    }
  }
  .todo__delete img {
    width: 20px;
  }
  .todo__text {
    background: #f2f56790;
    border: none;
  }
`;

export default TaskListWrapper;
