import {
  ContainerAbout,
  ContentAbout,
  MyPhotoImg,
  MyPhotoContainer,
} from "./style";
import myPhoto from "../../assets/rejuraski.jpeg";

const About = () => {
  return (
    <ContainerAbout id="about">
      <h1>Sobre mim</h1>
      <ContentAbout>
        <p>
          Sou formada em Administração pelo Centro Universitário Univel, porém
          sempre tive o fascínio pela área de tecnologia. Na pandemia, me veio a
          oportunidade de fazer uma mudança radical de carreira, e dessa vez pra
          minha tão sonhada área de desenvolvimento. Decidi que essa era a minha
          hora de lutar para trabalhar com o que eu sempre quis e aqui estou,
          desenvolvedora front-end, em aprendizado de back-end e futura
          full-stack. Tenho como prioridade estudar e evoluir cada vez mais na
          área para que eu consiga ter oportunidades na minha carreira como
          desenvolvedora.
        </p>
        <MyPhotoContainer>
          <MyPhotoImg src={myPhoto} alt="Minha foto"></MyPhotoImg>
        </MyPhotoContainer>
      </ContentAbout>
    </ContainerAbout>
  );
};

export default About;
