import styled from "@emotion/styled";
import { Grid } from "@mui/material";
import ImageSrc from "../../../assets/images/2450449.jpeg";
import { Violet } from "../../../utils/Colors";

const Title = styled.h1`
  font-size: 45px;
  font-weight: 800;
  color: ${Violet};
  letter-spacing: -2px;
  line-height: 45px;
  margin: 0;
  font-family: "Poppins";
`;
const Description = styled.p`
  font-size: 20px;
  color: ${Violet};
  font-weight: thin;
  line-height: 25px;
  font-family: "PoppinsLight";
`;

const Image = styled.img`
  width: 100%;
`;
export const Main = () => (
  <Grid
    container
    height="100vh"
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
    </Grid>

    <Grid item xs={12} md={6} justifyContent="center" display="flex">
      <Image src={ImageSrc} />
    </Grid>
  </Grid>
);
