import logo from "../../assets/logo.png";
import { Container, Content, LogoContent } from "./style";

const Header = () => {
  return (
    <Container>
      <Content>
        <LogoContent>
          <a href="#top">
            <img src={logo} alt="Dinossauro" />
          </a>
        </LogoContent>
        <div>
          <ul>
            <li>
              <a href="#about">
                <span>Sobre mim</span>
              </a>
            </li>
            <li>
              <a href="#projects">
                <span>Projetos</span>
              </a>
            </li>
            <li>
              <a href="#tech">
                <span>Tecnologias</span>
              </a>
            </li>
            <li>
              <a href="#qualification">
                <span>Qualificação</span>
              </a>
            </li>
            <li>
              <a href="#contact">
                <span>Contato</span>
              </a>
            </li>
          </ul>
        </div>
      </Content>
    </Container>
  );
};

export default Header;
