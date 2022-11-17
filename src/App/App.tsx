import Header from '../components/Header';
import Main from '../components/Main';
import Footer from '../components/Footer';

import TodoContainer from './App.styles';

const App = () => {
  return (
    <TodoContainer>
      <Header />
      <Main />
      <Footer />
    </TodoContainer>
  );
};

export default App;
