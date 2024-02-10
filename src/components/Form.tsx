import { Box, Button, FormControl, Input, InputLabel } from "@mui/material";

import { activeButtonStyleProps } from "./FormContainer";

type FormProps = {
  activeButtonStyle: activeButtonStyleProps;
  tabValue: number;
};

const Form = ({ activeButtonStyle, tabValue }: FormProps) => {
  return (
    <Box
      component="form"
      sx={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        justifyContent: "space-between",
        gap: "20px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "20px",
        }}
      >
        <FormControl variant="standard" sx={{ width: "100$" }}>
          <InputLabel sx={{ color: "#56" }} htmlFor="component-simple">
            Username
          </InputLabel>
          <Input defaultValue="" />
        </FormControl>
        <FormControl variant="standard">
          <InputLabel sx={{ color: "#56" }} htmlFor="component-simple">
            Password
          </InputLabel>
          <Input defaultValue="" />
        </FormControl>
        {tabValue === 1 && (
          <FormControl variant="standard">
            <InputLabel sx={{ color: "#56" }} htmlFor="component-simple">
              Confirm Password
            </InputLabel>
            <Input defaultValue="" />
          </FormControl>
        )}
      </Box>
      <Button
        sx={{
          ...activeButtonStyle,
          fontWeight: "extrabold",
        }}
      >
        {tabValue === 0 ? "Login" : "Register"}
      </Button>
    </Box>
  );
};

export default Form;
