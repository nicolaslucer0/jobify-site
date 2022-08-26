import ImageSrc from "../../../../assets/images/universitarios.jpeg";
import {
  Column,
  Container,
  Image,
  InfoDescription,
  InfoTitle,
} from "../../../../utils/Commons";
export const TimeInfo = () => (
  <Container className="full-height">
    <Column className="xs">
      <Image src={ImageSrc} />
    </Column>
    <Column className="md">
      <InfoTitle>Tu tiempo, tus reglas</InfoTitle>
      <InfoDescription>
        Con Zenjob, tus trabajos encajan perfectamente en tu vida diaria junto
        con tus estudios o tu trabajo principal. Estructurá tu jornada laboral
        de la forma que quieras, para que siempre tengas suficiente tiempo para
        vos.
        <br />
        <br />
        Como estudiante, podés encontrar trabajos part-time en Zenjob. Trabajá
        mientras estudias, por ejemplo, como cajero, en eventos y ferias
        comerciales, en un almacén o detrás de una barra.
      </InfoDescription>
    </Column>
  </Container>
);
