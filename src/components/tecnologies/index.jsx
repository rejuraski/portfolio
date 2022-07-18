import html from "../../assets/html5.svg";
import js from "../../assets/js.svg";
import css from "../../assets/css.svg";
import react from "../../assets/react.svg";
import sql from "../../assets/sql.svg";
import node from "../../assets/node.svg";
import ts from "../../assets/ts.svg";
import { ContainerTech } from "./style";

const Teclonogies = () => {
  return (
    <ContainerTech id="tech">
      <h1>Tecnologias</h1>
      <ul>
        <li>
          <img src={html} alt="html" />
        </li>
        <li>
          <img src={js} alt="html" />
        </li>
        <li>
          <img src={css} alt="html" />
        </li>
        <li>
          <img src={react} alt="html" />
        </li>
        <li>
          <img src={sql} alt="html" />
        </li>
        <li>
          <img src={node} alt="html" />
        </li>
        <li>
          <img src={ts} alt="html" />
        </li>
      </ul>
    </ContainerTech>
  );
};

export default Teclonogies;
