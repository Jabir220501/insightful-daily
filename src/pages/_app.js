import "@/styles/globals.css";
import { useState } from "react";
import AppContext from "@/lib/appContext";
export default function App({ Component, pageProps }) {
  const [hamburgerOpen, setHamburgerOpen] = useState(false);
  return (
    <AppContext.Provider value={{ hamburgerOpen, setHamburgerOpen }}>
      <Component {...pageProps} />
    </AppContext.Provider>
  );
}
