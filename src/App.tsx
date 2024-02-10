import { ThemeProvider } from "@mui/material";

import "./App.css";
import Banner from "./components/Banner";
import theme from "./themes/theme";

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Banner />
      </ThemeProvider>
    </>
  );
}

export default App;
