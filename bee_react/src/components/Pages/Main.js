import "../../App.css";
import "../../Index.css";
import "../../Subscriptions.css";
import "../../Common.css";
import { MainDescription } from "../UI/MainDescription";
import { MainModal } from "../UI/MainModal";

const Main = () => {
  return (
    <div className="App">
      <MainDescription />
      <MainModal />
    </div>
  );
};

export { Main };
