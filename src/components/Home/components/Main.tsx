import styled from "@emotion/styled";
import { Button, Grid } from "@mui/material";
import ImageSrc from "../../../assets/images/main.jpg";
import { Blue, LightGray } from "../../../utils/Colors";
import { Column, Container } from "../../../utils/Commons";

const Title = styled.h1`
  font-size: 60px;
  font-weight: 800;
  color: ${Blue};
  letter-spacing: -2px;
  line-height: 70px;
  margin: 0;
  font-family: "Poppins";
  @media only screen and (max-width: 600px) {
    font-size: 40px;
    line-height: 50px;
  }
`;
const Description = styled.p`
  font-size: 20px;
  color: ${LightGray};
  font-weight: thin;
  line-height: 25px;
  font-family: "PoppinsLight";
`;

const MainImage = styled.img`
  border-radius: 10%;
  position: relative;
  object-fit: cover;
  right: -100px;
  width: 100%;
  @media only screen and (max-width: 600px) {
    right: 0;
  }
`;

export const Main = () => (
  <Container className="full-height">
    <Column className="xs">
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
    </Column>

    <Column className="xs" style={{ padding: "3em" }}>
      <MainImage src={ImageSrc} />
    </Column>
  </Container>
);
