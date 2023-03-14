import './App.css';
import About from './components/about';
import Contact from './components/contact';
import Header from './components/header/header';
import Main from './components/main';
import Projects from './components/projects';
import Qualification from './components/qualification';
import Tecnologies from './components/tecnologies';
import GlobalStyle from './styles/global';

function App() {
  return (
    <div>
      <Header />
      <Main />
      <About />
      <Projects />
      <Tecnologies />
      <Qualification />
      <Contact />
      <GlobalStyle />
    </div>
  );
}

export default App;
