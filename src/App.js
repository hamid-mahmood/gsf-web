import Headers from "./components/Headers/Headers";
import "./App.scss";
import AboutUs from "./components/BodyComponents/AboutUs";
import Events from "./components/BodyComponents/Events";
import Contact from "./components/BodyComponents/Contact";
import Footer from "./components/BodyComponents/Footer";
import { SnackbarProvider } from "notistack";

function App() {
  return (
    // <div>
    //   test
    // </div>
    <>
      <Headers />
      <AboutUs />
      <Events />
      <SnackbarProvider maxSnack={3}>
        <Contact />
      </SnackbarProvider>
      <Footer />
    </>
  );
}

export default App;
