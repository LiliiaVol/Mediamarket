import { Header } from "./components/Header/Header.tsx";
import { Main } from "./components/Main/Main.tsx";

import { useTranslation } from "react-i18next";
import { useState } from "react";
import { Footer } from "./components/Footer/Footer.tsx";

function App() {
  const { t, i18n } = useTranslation();
  const [lng, setLng] = useState(navigator.language);

  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  );
}

export default App;
