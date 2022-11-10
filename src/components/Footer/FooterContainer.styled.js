import styled from "styled-components";

const FooterContainer = styled.footer`
  .todo__content-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  p {
    margin-bottom: 0;
    background: #f2f56790;
    border: 2px solid #0065ff;
    border-radius: 5px;
    padding: 5px;
    :hover {
      transform: scale(1.2);
    }
  }
`;

export default FooterContainer;
