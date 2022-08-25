import styled from "@emotion/styled";
import ImageSrc from "../../../assets/images/2450449.png";
import { Violet } from "../../../utils/Colors";
const MainContainer = styled.main`
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  height: 100vh;
`;
const TitleContainer = styled.div`
  width: 40%;
  padding: 3em;
`;
const Title = styled.h1`
  font-size: 3.5em;
  color: ${Violet};
`;
const ImageContainer = styled.div``;
const Image = styled.img``;
export const Main = () => (
  <MainContainer>
    <TitleContainer>
      <Title>Pioneros en el modelo de trabajo flexible en Argentina.</Title>
    </TitleContainer>
    <ImageContainer>
      <Image src={ImageSrc} />
    </ImageContainer>
  </MainContainer>
);
