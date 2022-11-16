import HeaderWrapepr from "./Header.styled";

import Logo from "./images/logo512.png";

const Header = () => {
  return (
    <HeaderWrapepr>
      <h1 className="todo__header">
        <img className="todo__header-image" src={Logo} alt="react-logo" />
        <p>ToDo List</p>
      </h1>
    </HeaderWrapepr>
  );
};

export default Header;
