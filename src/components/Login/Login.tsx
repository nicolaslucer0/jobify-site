import styled from "@emotion/styled";
import { Box, Button, Card, TextField } from "@mui/material";
import { ChangeEvent, useState } from "react";
import ImageSrc from "../../assets/images/main.jpg";
import { Blue } from "../../utils/Colors";
import { Column, Container } from "../../utils/Commons";
import { isValidEmail } from "../../utils/Validations";
import { Logo } from "../Home/components/Header/components/Logo";
import { Header } from "../Home/components/Header/Header";
const LoginImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
const HomeContainer = styled.div`
  height: 100vh;
  width: 100%;
  background: ${Blue};
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledCard = styled(Card)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: white;
  padding: 0;
  width: 60%;
  height: 60vh;
`;

export const Login = () => {
  const [email, setEmail] = useState({ value: "", error: "" });
  const [pass, setPass] = useState({ value: "", error: "" });

  const onEmailChange = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail({ value: event.target.value, error: "" });
    if (!isValidEmail(email.value))
      setEmail({ value: event.target.value, error: "Ingrese un email valido" });
  };

  const onPasswordChange = (event: ChangeEvent<HTMLInputElement>) => {
    setPass({ value: event.target.value, error: "" });
  };

  const onLoginClick = () => {
    //TODO: call api and go to home
  };

  return (
    <HomeContainer>
      <Header />
      <StyledCard>
        <Container>
          <Column
            className="xs"
            style={{ alignItems: "center", margin: "auto" }}
          >
            <Logo />
            <Box sx={{ p: 1 }}>
              <TextField
                id="user"
                label="Email"
                variant="outlined"
                error={!!email.error}
                value={email.value}
                helperText={email.error}
                placeholder="ejemplo@abc.com"
                onChange={onEmailChange}
              />
            </Box>
            <Box sx={{ p: 1 }}>
              <TextField
                id="pass"
                label="Contraseña"
                variant="outlined"
                type="password"
                onChange={onPasswordChange}
                value={pass.value}
              />
            </Box>

            <Button variant="contained" color="primary" onClick={onLoginClick}>
              Iniciar sesión
            </Button>
            <Button color="primary" onClick={onLoginClick}>
              Registrarse
            </Button>
          </Column>
          <Column className="md" style={{ height: "70vh" }}>
            <LoginImage src={ImageSrc} />
          </Column>
        </Container>
      </StyledCard>
    </HomeContainer>
  );
};
