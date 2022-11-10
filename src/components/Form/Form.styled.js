import styled from "styled-components";

const FormWrapper = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  .todo__input {
    width: 75%;
    height: 25px;
    padding: 10px 0 10px 25px;
    margin: 0 auto;
    background: #a4d7e7;
    border: 2px solid #4a90e2;
    border-radius: 5px;
    cursor: pointer;
    :hover {
      transform: scale(1.08);
    }
    :focus {
      outline: none;
    }
  }
`;
export default FormWrapper;
