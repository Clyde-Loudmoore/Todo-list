import styled from "styled-components";

const ButtonsWrapper = styled.div`
  padding-top: 22px;
  display: flex;
  justify-content: center;

  .buttons {
    width: 80px;
    height: 30px;
    margin: 0 10px;
    background: #f3f56779;
    border: 2px solid #0065FF;
    border-radius: 20px;
    cursor: pointer;
    :hover {
      background: #f3f567;
      transform: scale(1.1);
    }
  }
`;

export default ButtonsWrapper;
