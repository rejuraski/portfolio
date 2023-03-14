import myPhoto from "../../assets/rejuraski.jpeg";
import {
  ContainerAbout,
  ContentAbout,
  MyPhotoContainer,
  MyPhotoImg,
} from "./style";

const About = () => {
  return (
    <ContainerAbout id="about">
      <h1>Sobre mim</h1>
      <ContentAbout>
        <p>
          Administradora e Desenvolvedora Full stack, com uma paixão imensa pela
          tecnologia. Formada em Administração pelo Centro Universitário Univel,
          sempre tive o fascínio pela área de tecnologia. Na pandemia, houve a
          oportunidade de fazer uma mudança radical de carreira, e dessa vez pra
          minha tão sonhada área de desenvolvimento. Decidi que essa era a minha
          hora de lutar para trabalhar com o que eu sempre quis e aqui estou,
          desenvolvedora full stack e apaixonada pelo front end. Tenho como
          prioridade estudar e evoluir cada vez mais na área para que eu consiga
          ter oportunidades na minha carreira como desenvolvedora.
        </p>
        <MyPhotoContainer>
          <MyPhotoImg src={myPhoto} alt="Minha foto"></MyPhotoImg>
        </MyPhotoContainer>
      </ContentAbout>
    </ContainerAbout>
  );
};

export default About;
