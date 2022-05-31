import LoginDialog from "../components/LoginDialog/LoginDialog";
import NavBar from "../components/NavBar/NavBar";
import { AuthContextProvider } from "../contexts/Auth/AuthContext";
import "../styles/globals.css";
import { GlobalStyles } from "../styles/globalStyles";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyles />
      <AuthContextProvider>
        <NavBar />
        <LoginDialog />
        <Component {...pageProps} />
      </AuthContextProvider>
    </>
  );
}

export default MyApp;
