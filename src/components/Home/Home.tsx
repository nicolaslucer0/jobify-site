import styled from "@emotion/styled";
import { Card } from "@mui/material";
import { ChangeEvent, useEffect, useState } from "react";
import { Emotion } from "../../models/Emotion";
import { getEmotionByPhrase, getEmotions } from "../../services/EmotionService";
import { Loading } from "../Loading";

const TextArea = styled.textarea`
  border-radius: 30px !important;
  padding: 1em !important;
  box-shadow: 0 0 5px 0 #3f50b533 !important;
  font-weight: lighter !important;
  font-size: 20px !important;
  background: transparent;
  font-family: "poppinslight";
  border: 2px solid white;
  width: 100%;
  color: white;
  outline: none;
`;

const Button = styled.input`
  background: white;
  border-radius: 30px;
  border: none;
  padding: 15px 40px;
  color: #663c6f;
  transition: 0.3s;

  &:hover {
    box-shadow: 2px 2px 5px 0 #00000069;
  }
`;

const FlexCenterContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2em;
  box-sizing: border-box;
  position: relative;

  @media (max-width: 900px) {
    flex-direction: column;
  }
`;

const FormContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 2em;
  box-sizing: border-box;
  position: relative;
  width: 40%;
  min-width: 40%;
  @media (max-width: 900px) {
    width: 100%;
    min-width: 100%;
  }
`;

const EmojiList = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin: auto;
  width: 60%;
`;

const EmojiContainer = styled.div`
  transition: 0.5s;
  text-align: center;
  &.selected {
    margin: 30px;
    padding: 10px;
    border: 2px solid white;
    border-radius: 20px;
    transform: scale(1.5);
  }
`;

const Emoji = styled.img`
  width: 50px;
  height: 50px;
  margin: 20px;
`;
const Text = styled.div`
  color: white;
  @media (max-width: 1200px) {
    font-size: 12px;
  }
  @media (max-width: 1000px) {
    font-size: 10px;
  }
`;
const ErrorText = styled.div`
  color: white;
`;

const CustomCard = styled(Card)`
  backdrop-filter: blur(20px) !important;
  background: #ffffff4d !important;
  display: flex;
  height: 80vh;
  min-width: 100%;
  margin: auto;
  @media (max-width: 900px) {
    height: auto;
  }
`;

export const Home = () => {
  const [emotions, setEmotions] = useState<Emotion[]>([]);
  const [phrase, setPhrase] = useState<string>("");
  const [error, setError] = useState<boolean>(false);
  const [loading, isLoading] = useState<boolean>(false);

  useEffect(() => {
    setEmotions(getEmotions());
  }, []);

  const sendEmotion = async () => {
    isLoading(true);
    emotions.forEach((e) => (e.selected = false));
    const { prediction } = await getEmotionByPhrase(phrase);
    const selectedEmotion = emotions.find(
      (e) => e.emotion === prediction.emotion
    );
    if (selectedEmotion) selectedEmotion.selected = true;
    setEmotions([...emotions]);
    isLoading(false);
  };

  const handleInputChange = ({ target }: ChangeEvent<HTMLTextAreaElement>) => {
    setPhrase(target.value);
    if (!target.value) setError(true);
    else setError(false);
  };

  return (
    <CustomCard>
      <FlexCenterContainer>
        <FormContainer className="column small">
          <h2>Ingresá la frase, detectaremos la emoción.</h2>
          <TextArea onChange={handleInputChange} />
          <FlexCenterContainer>
            <Button
              type="button"
              className="button"
              onClick={sendEmotion}
              value="Procesar"
            />
            {loading && <Loading />}
          </FlexCenterContainer>
          {error && (
            <ErrorText id="error">Tu frase no puede estar vacía.</ErrorText>
          )}
        </FormContainer>

        <EmojiList>
          {emotions.map((e) => (
            <EmojiContainer
              key={e.emotion}
              id="enfado"
              className={`emoji-container ${e.selected ? "selected" : ""}`}
            >
              <Emoji
                key={e.emotion}
                alt={e.emotion}
                src={require(`./../../assets/images/emoji/${e.emotion}.png`)}
              />
              <Text className="emoji-text">{e.emotion}</Text>
            </EmojiContainer>
          ))}
        </EmojiList>
      </FlexCenterContainer>
    </CustomCard>
  );
};
