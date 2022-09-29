import { Navigate, Route, Routes } from "react-router-dom";
import {Items} from "../Pages/Items";
import {Tools} from "../Pages/Tools";
import {Main} from "../Pages/Main";

const AppRouter = () => {
  return (
    <Routes>
      <Route exact path="./Pages/Items" element={<Items />} />
      <Route exact path="./Pages/Tools" element={<Tools />} />
      <Route exact path="./Pages/Main" element={<Main />} />
      <Route exact path="*" element={<Navigate to="./Pages/Main" />} />
    </Routes>
  );
};

export {AppRouter};
