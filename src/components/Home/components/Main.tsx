import styled from "@emotion/styled";
import { Container, Grid } from "@mui/material";
import ImageSrc from "../../../assets/images/2450449.png";
import { Violet } from "../../../utils/Colors";
const MainContainer = styled.main`
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  height: 100vh;
`;

const Title = styled.h1`
  font-size: 3.5em;
  color: ${Violet};
`;

const Image = styled.img``;
export const Main = () => (
  <Grid
    container
    height="100vh"
    display="flex"
    justifyContent="center"
    alignItems="center"
  >
    <Grid item xs={12} md={6} justifyContent="center" display="flex" p={5}>
      <Title>Pioneros en el modelo de trabajo flexible en Argentina.</Title>
    </Grid>

    <Grid item xs={12} md={6} justifyContent="center" display="flex">
      <Image src={ImageSrc} />
    </Grid>
  </Grid>
);
