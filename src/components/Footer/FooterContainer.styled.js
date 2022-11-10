import styled from "styled-components";

const FooterContainer = styled.footer`
  .todo__content-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  p {
    margin-bottom: 0;
    border-bottom: 2px dotted #c6c941;
    :hover {
      transform: scale(1.2);
    }
  }
`;

export default FooterContainer;
