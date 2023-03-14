import css from "../../assets/css3.svg";
import git from "../../assets/git.svg";
import html from "../../assets/html5.svg";
import js from "../../assets/javascript.svg";
import node from "../../assets/node.svg";
import python from "../../assets/python.svg";
import react from "../../assets/react.svg";
import redux from "../../assets/redux.svg";
import sql from "../../assets/sql.svg";
import ts from "../../assets/typescript.svg";
import { ContainerTech } from "./style";

const Tecnologies = () => {
  return (
    <ContainerTech id="tech">
      <h1>Tecnologias</h1>
      <ul>
        <li>
          <img src={css} alt="css" />
        </li>
        <li>
          <img src={html} alt="html" />
        </li>
        <li>
          <img src={js} alt="js" />
        </li>
        <li>
          <img src={react} alt="react" />
        </li>
        <li>
          <img src={node} alt="node" />
        </li>
        <li>
          <img src={ts} alt="ts" />
        </li>
        <li>
          <img src={redux} alt="redux" />
        </li>
        <li>
          <img src={git} alt="git" />
        </li>
        <li>
          <img src={python} alt="python" />
        </li>
        <li>
          <img src={sql} alt="sql" />
        </li>
      </ul>
    </ContainerTech>
  );
};

export default Tecnologies;
