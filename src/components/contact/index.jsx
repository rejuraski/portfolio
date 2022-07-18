import email from "../../assets/email.svg";
import github from "../../assets/github.svg";
import linkedin from "../../assets/linkedin.svg";
import { ContainerContact } from "./style";

const Contact = () => {
  return (
    <ContainerContact id="contact">
      <h1>Contato</h1>
      <div>
        <img src={github} alt="github" />
        <a href="https://github.com/rejuraski">rejuraski</a>
      </div>
      <div>
        <img src={linkedin} alt="linkedin" />
        <a href="https://www.linkedin.com/in/renata-pereira-juraski-149696158/">
          Renata Pereira Juraski
        </a>
      </div>
      <div>
        <img src={email} alt="email" />
        <h2>re.juraski@gmail.com</h2>
      </div>
    </ContainerContact>
  );
};

export default Contact;
