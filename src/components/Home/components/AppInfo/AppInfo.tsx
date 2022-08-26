import {
  Column,
  Container,
  Image,
  InfoDescription,
  InfoTitle,
} from "../../../../utils/Commons";
import ImageSrc from "../../../../assets/images/phone.webp";
export const AppInfo = () => (
  <Container className="full-height">
    <Column className="xs">
      <InfoTitle>Todo en el mismo lugar</InfoTitle>
      <InfoDescription>
        Es fácil registrarse en la aplicación Zenjob y solo necesita hacerlo una
        vez, desde el principio. Luego, simplemente lo relacionamos
        automáticamente con todos los trabajos que se adaptan a usted y los
        mostramos en su fuente de trabajo. Simplemente navegue por ellos y
        luego, con un solo clic, reserve los trabajos que más le gusten.
      </InfoDescription>
    </Column>
    <Column className="xs">
      <Image src={ImageSrc} />
    </Column>
  </Container>
);
