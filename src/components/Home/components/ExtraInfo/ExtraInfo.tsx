import ImageSrc from "../../../../assets/images/trabajadores.jpeg";
import {
  Column,
  Container,
  Image,
  InfoDescription,
  InfoTitle,
} from "../../../../utils/Commons";
export const ExtraInfo = () => (
  <Container>
    <Column className="xs">
      <InfoTitle>Dinero extra</InfoTitle>
      <InfoDescription>
        No necesitás ser estudiante para usar Zenjob. También podés registrarte
        si ya tenes un trabajo permanente pero deseás obtener ganancias
        adicionales.
        <br />
        <br />
        Ahora ofrecemos una amplia gama de trabajos a tiempo parcial para los
        solicitantes de empleo que desean realizar un trabajo adicional además
        de su trabajo permanente a tiempo completo o parcial.
      </InfoDescription>
    </Column>
    <Column className="md">
      <Image src={ImageSrc} />
    </Column>
  </Container>
);
