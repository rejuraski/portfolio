import frontend from "../../assets/certificado.png";
import fullstack from "../../assets/fullstack.png";
import { CertificadoContainer, ContainerQuali } from "./style";

const Qualification = () => {
  return (
    <ContainerQuali id="qualification">
      <h1>Qualificação</h1>
      <CertificadoContainer>
        <div>
          <img src={frontend} alt="certificado" />
        </div>
        <div>
          <img src={fullstack} alt="certificado" />
        </div>
      </CertificadoContainer>
    </ContainerQuali>
  );
};

export default Qualification;
