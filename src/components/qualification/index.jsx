import certificado from "../../assets/certificado.png";
import { CertificadoContainer, ContainerQuali } from "./style";

const Qualification = () => {
  return (
    <ContainerQuali id="qualification">
      <h1>Qualificação</h1>
      <CertificadoContainer>
        <img src={certificado} alt="certificado" />
      </CertificadoContainer>
    </ContainerQuali>
  );
};

export default Qualification;
