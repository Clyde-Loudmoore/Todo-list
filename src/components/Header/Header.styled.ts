import styled from 'styled-components';

const HeaderWrapepr = styled.header`
  .todo__header {
    width: 100%;
    margin: 0;
    padding-top: 35px;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    transform: rotate (360deg);
  }

  .todo__header-image {
    width: 45px;
    margin-right: 10px;
  }

  @media (prefers-reduced-motion: no-preference) {
    .todo__header-image {
      animation: todo__header-image-spin infinite 20s linear;
    }
  }

  @keyframes todo__header-image-spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;

export default HeaderWrapepr;
