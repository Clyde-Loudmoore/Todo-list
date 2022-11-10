import styled from "styled-components";

const ButtonsWrapper = styled.div`
  padding-top: 22px;
  display: flex;
  justify-content: center;

  .buttons {
    width: 80px;
    height: 30px;
    margin: 0 10px;
    background: #a4d7e7;
    border: 2px solid #4a90e2;
    border-radius: 20px;
    cursor: pointer;
    :hover {
      transform: scale(1.1);
    }
    :active {
      background: #E7C7A4;
    }
  }
`;

export default ButtonsWrapper;
