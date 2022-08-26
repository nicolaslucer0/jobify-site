import { Grid } from "@mui/material";
import { Image, InfoDescription, InfoTitle } from "../../../../utils/Commons";
import ImageSrc from "../../../../assets/images/universitarios.jpeg";
export const TimeInfo = () => (
  <Grid
    container
    xs={12}
    md={11}
    display="flex"
    alignItems="flex-start"
    justifyContent="space-evenly"
    padding="8em"
  >
    <Grid
      item
      xs={12}
      md={9}
      justifyContent="center"
      display="flex"
      flexDirection="column"
      padding="0 5em"
    >
      <InfoTitle>Tu tiempo, tus reglas</InfoTitle>
      <InfoDescription>
        Con Zenjob, sus trabajos encajan perfectamente en su vida diaria junto
        con sus estudios o su trabajo principal. Estructura tu jornada laboral
        de la forma que puedas imaginar, para que siempre tengas suficiente
        tiempo para ti.
        <br />
        <br />
        Como estudiante, puedes encontrar trabajos en Zenjob en el día a día o
        como estudiante trabajador. Trabaja junto a tus estudios, por ejemplo,
        como cajero, en eventos y ferias comerciales, en un almacén o detrás de
        una barra.
      </InfoDescription>
    </Grid>
    <Grid
      item
      xs={12}
      md={3}
      justifyContent="center"
      display="flex"
      flexDirection="column"
    >
      <Image src={ImageSrc} />
    </Grid>
  </Grid>
);
