import { Grid } from "@mui/material";
import { Image, InfoDescription, InfoTitle } from "../../../../utils/Commons";
import ImageSrc from "../../../../assets/images/phone.webp";
export const AppInfo = () => (
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
      <InfoTitle>Todo en el mismo lugar</InfoTitle>
      <InfoDescription>
        Es fácil registrarse en la aplicación Zenjob y solo necesita hacerlo una
        vez, desde el principio. Luego, simplemente lo relacionamos
        automáticamente con todos los trabajos que se adaptan a usted y los
        mostramos en su fuente de trabajo. Simplemente navegue por ellos y
        luego, con un solo clic, reserve los trabajos que más le gusten.
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
