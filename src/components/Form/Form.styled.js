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
    margin: 35px auto 0 auto;
    background: #f2f56790;
    border: 2px dotted #a7a84790;
    border-radius: 5px;
    cursor: pointer;
    :hover {
      transform: scale(1.08);
      background: #f3f567;
    }
    :focus {
      background: #f3f567;
      outline: none;
    }
  }
`;
export default FormWrapper;
