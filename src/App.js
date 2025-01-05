import Navbar from "./components/design/Navbar"
import Footer from "./components/design/Footer"
import CustomRouter from "./components/utils/router";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <CustomRouter/>
      <Footer/>
    </div>
  );
}

export default App;
