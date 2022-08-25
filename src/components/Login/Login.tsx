import React from "react";
import styled from "@emotion/styled";
import { Button, Card, Input, TextField } from "@mui/material";

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
  return (
    <HomeContainer>
      <StyledCard>
        <TextField id="standard-basic" label="Usuario" variant="standard" />
        <TextField id="standard-basic" label="Contraseña" variant="standard" />

        <Button type="button" color="primary" className="form__custom-button">
          Iniciar sesión
        </Button>
      </StyledCard>
    </HomeContainer>
  );
};
