import { Container, Content, LogoContent } from "./style";
import logo from "../../assets/logo.png";

const Header = () => {
  return (
    <Container>
      <Content>
        <LogoContent>
          <h1>
            Re<strong>Juraski</strong>
          </h1>
          <img src={logo} alt="Dinossauro" />
        </LogoContent>
        <div>
          <ul>
            <li>
              <a href="#about">Sobre mim</a>
            </li>
            <li>
              <a href="#projects">Projetos</a>
            </li>
            <li>
              <a href="#tech">Tecnologias</a>
            </li>
            <li>
              <a href="#qualification">Qualificação</a>
            </li>
            <li>
              <a href="#contact">Contato</a>
            </li>
          </ul>
        </div>
      </Content>
    </Container>
  );
};

export default Header;
