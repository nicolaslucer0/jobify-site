import { TextField } from "@mui/material";
import { ChangeEvent } from "react";
import { Container } from "../../../utils/Commons";

type SearchBarProps = {
  search: string;
  setSearch: (value: string) => void;
};
export const SearchBar = ({ search, setSearch }: SearchBarProps) => {
  const handleInputChange = ({ target }: ChangeEvent<HTMLInputElement>) =>
    setSearch(target.value);
  return (
    <Container className="md" style={{ margin: "auto" }}>
      <TextField
        fullWidth
        placeholder="Buscar por nombre"
        value={search}
        variant="outlined"
        onChange={handleInputChange}
      />
    </Container>
  );
};
