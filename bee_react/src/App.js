import "./App.css";
import { Header } from "./components/UI/Header";
import { Footer } from "./components/UI/Footer";
// import { Items } from "./components/Pages/Items";
// import { Tools } from "./components/Pages/Tools";
// import { Main } from "./components/Pages/Main";
import { BrowserRouter } from "react-router-dom";
import { AppRouter } from "./components/UI/AppRouter";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <AppRouter />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
