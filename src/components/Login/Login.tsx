import styled from "@emotion/styled";
import { Box, Button, Card, TextField } from "@mui/material";
import { ChangeEvent, useState } from "react";
import { isValidEmail } from "../../utils/Validations";

const HomeContainer = styled.div`
  height: 100vh;
  width: 100%;
  background: #2b9089;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledCard = styled(Card)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1em;
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
      <StyledCard>
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
      </StyledCard>
    </HomeContainer>
  );
};
