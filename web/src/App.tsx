import { ThemeProvider } from "styled-components";
import { Global } from "./styles/global";
import { Dark, Light } from "./styles/themes";
import { useState } from "react";
import { Outlet } from "react-router-dom";

function App() {
  const [theme, setTheme] = useState("Light");

  const toggleTheme = () => {
    if (theme == "Dark") {
      setTheme("Light");
    } else {
      setTheme("Dark");
    }
  };

  return (
    <>
      <button onClick={() => toggleTheme()}>tema</button>
      <Global />
      <Outlet />
      <ThemeProvider theme={theme == "Dark" ? Dark : Light}></ThemeProvider>
    </>
  );
}
export default App;
