import "./App.css";
import Header from "./components/UI/Header";
import Footer from "./components/UI/Footer";
import Items from "./components/Pages/Items";
import Tools from "./components/Pages/Tools";
import Main from "./components/Pages/Main";

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
