import { Modal } from "./Modal";
import { useState } from "react";
import { Galery } from "./Galery";

const MainModal = () => {
  const [modalActive, setModalActive] = useState(false);
  return (
    <div className="product_honey">
      <button id="myBtn" onClick={() => setModalActive(true)}>
        Додаткова інформація
      </button>
      <Modal active={modalActive} setActive={setModalActive}>
        <p>
          Оптова ціна підається торгу (від 50 кг, в 1 л приблизно 1.45 кг),
          можлива співпраця на постійній основі. <br />В межах міста житомир
          доставка безкоштовна протягом 7 днів, або самовивіз, доставка в інші
          міста за рахунок одержувача.
        </p>
      </Modal>
      <Galery />
    </div>
  );
};

export { MainModal };
