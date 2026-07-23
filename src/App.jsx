// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
// import heroImg from './assets/hero.png'
// import "./App.css";
import Alert from "./components/AlertSection/AlertSection.jsx";
import Header from "./components/Header/Header.jsx";
import FirstSection from "./components/Sections/FirstSection.jsx";
import SecondSection from "./components/Sections/SecondSection.jsx";
import ThirdSection from "./components/Sections/ThirdSection.jsx";
import FourthSection from ".//components/Sections/FourthSection.jsx";
import FifthSection from "./components/Sections/FifthSection.jsx";
import SixthSection from "./components/Sections/SixthSection.jsx";
import Footer from "./components/Footer/Footer.jsx";

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Alert />
      <FirstSection />
      <SecondSection />
      <ThirdSection />
      <FourthSection />
      <FifthSection />
      <SixthSection />
      <Footer />
    </>
  );
}

export default App;
