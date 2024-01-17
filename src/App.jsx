import Companyfooter from "./components/Companyfooter";
import Faq from "./components/Faq";
import Home from "./components/Home";
import NavBar from "./components/Navbar";
import Pages from "./components/Pages";
import Path from "./components/Path";

function App() {
  return (
    <div className=" bg-[#f9f9f9]">
      <NavBar />
      <Path />
      <Home />
      <Pages />
      <Companyfooter />
      <Faq />
    </div>
  );
}

export default App;
