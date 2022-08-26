import { Grid } from "@mui/material";
import { Image, InfoDescription, InfoTitle } from "../../../../utils/Commons";
import ImageSrc from "../../../../assets/images/trabajadores.jpeg";
export const ExtraInfo = () => (
  <Grid
    container
    xs={12}
    md={12}
    display="flex"
    alignItems="flex-start"
    justifyContent="space-evenly"
    padding="8em"
  >
    <Grid
      item
      xs={12}
      md={6}
      justifyContent="center"
      display="flex"
      flexDirection="column"
      padding="0 5em"
    >
      <InfoTitle>Todo en el mismo lugar</InfoTitle>
      <InfoDescription>
        No necesitas ser estudiante para usar Zenjob. También puede registrarse
        si tiene un trabajo permanente y desea obtener ganancias adicionales
        además de su ingreso principal.
        <br />
        <br />
        Ahora ofrecemos una amplia gama de trabajos a tiempo parcial para los
        solicitantes de empleo que desean realizar un trabajo adicional además
        de su trabajo permanente a tiempo completo o parcial.
      </InfoDescription>
    </Grid>
    <Grid
      item
      xs={12}
      md={6}
      justifyContent="center"
      display="flex"
      flexDirection="column"
    >
      <Image src={ImageSrc} />
    </Grid>
  </Grid>
);
