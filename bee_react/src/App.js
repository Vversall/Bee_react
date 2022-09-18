import "./App.css";
import AppRouter from "./components/UI/AppRouter";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/UI/Header";
import Footer from "./components/UI/Footer";
import Items from "./components/Pages/Items";
import Tools from "./components/Pages/Tools";
import Main from "./components/Pages/Main";
import a from "./components/Images/darkbg.jpg";

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Items />
      <Tools />
      <Footer />
    </div>
  );
}

export default App;
