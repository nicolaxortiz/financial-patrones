import { Header } from "./layout/Header";
import "./app.css";
import { ThemeProvider } from "@emotion/react";
import { theme } from "./theme/theme";
import Main from "./layout/Main";
import Footer from "./layout/Footer";

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Header />
        <Main />
        <Footer />
      </ThemeProvider>
    </>
  );
}

export default App;
