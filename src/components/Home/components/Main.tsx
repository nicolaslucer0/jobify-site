import styled from "@emotion/styled";
import { Button, Grid } from "@mui/material";
import ImageSrc from "../../../assets/images/2450449.jpeg";
import { Blue, LightGray } from "../../../utils/Colors";
import { Image } from "../../../utils/Commons";

const Title = styled.h1`
  font-size: 60px;
  font-weight: 800;
  color: ${Blue};
  letter-spacing: -2px;
  line-height: 70px;
  margin: 0;
  font-family: "Poppins";
`;
const Description = styled.p`
  font-size: 20px;
  color: ${LightGray};
  font-weight: thin;
  line-height: 25px;
  font-family: "PoppinsLight";
`;

export const Main = () => (
  <Grid
    container
    display="flex"
    justifyContent="center"
    alignItems="center"
    paddingTop="60px"
  >
    <Grid
      item
      xs={12}
      md={6}
      justifyContent="center"
      display="flex"
      flexDirection="column"
      padding="0 8em"
    >
      <Title>Pioneros en el modelo de trabajo flexible en Argentina.</Title>
      <Description>
        Brindamos a los trabajadores a tiempo parcial la libertad de una vida
        laboral flexible y brindamos a las empresas trabajadores motivados.
      </Description>
      <Grid container display="flex">
        <Button
          variant="contained"
          color="primary"
          style={{ marginRight: "10px" }}
        >
          Ofrecer trabajo
        </Button>
        <Button variant="contained" color="primary">
          Buscar trabajo
        </Button>
      </Grid>
    </Grid>

    <Grid item xs={12} md={6} justifyContent="center" display="flex">
      <Image src={ImageSrc} />
    </Grid>
  </Grid>
);
