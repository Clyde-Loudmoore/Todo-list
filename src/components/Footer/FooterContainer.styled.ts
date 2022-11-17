import styled from 'styled-components';

const FooterContainer = styled.footer`
  .todo__content-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  p {
    margin-bottom: 0;
    background: #a4d7e7;
    border: 2px solid #4A90E2;
    border-radius: 5px;
    padding: 5px;
    cursor: default;
    :hover {
      transform: scale(1.2);
    }
  }
`;

export default FooterContainer;
