import { Navigate, Route, Routes } from "react-router-dom";
import Items from "../Pages/Items";
import Tools from "../Pages/Tools";
import Main from "../Pages/Main";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="./Pages/Items" element={<Items />} />
      <Route path="./Pages/Tools" element={<Tools />} />
      <Route path="./Pages/Main" element={<Main />} />
      <Route path="*" element={<Navigate to="./Pages/Main" />} />
    </Routes>
  );
};

export default AppRouter;
