import mukola from "../Images/mukola.jpg";
import mukola1 from "../Images/mukola1.jpg";
import mukola2 from "../Images/mukola2.jpg";
import mukola3 from "../Images/mukola3.jpg";
import mukola5 from "../Images/mukola5.jpg";

const Galery = () => {
  return (
    <div className="product_honey">
      <div className="containers">
        <div className="mySlides">
          <div className="numbertext">1 / 6</div>
          <img src={mukola} className="mySlides__photo" />
        </div>

        <div className="mySlides">
          <div className="numbertext">2 / 6</div>
          <img src={mukola1} className="mySlides__photo" />
        </div>

        <div className="mySlides">
          <div className="numbertext">3 / 6</div>
          <img src={mukola2} className="mySlides__photo" />
        </div>

        <div className="mySlides">
          <div className="numbertext">4 / 6</div>
          <img src={mukola3} className="mySlides__photo" />
        </div>

        <div className="mySlides">
          <div className="numbertext">4 / 6</div>
          <img src={mukola5} className="mySlides__photo" />
        </div>

        <div className="mySlides">
          <div className="numbertext">6 / 6</div>
          <img src={mukola5} className="mySlides__photo" />
        </div>
        <div className="caption-container">
          <p id="caption"></p>
        </div>
        <div className="row">
          <div className="column">
            <img className="demo cursor" src={mukola} alt="Mukola" />
          </div>
          <div className="column">
            <img className="demo cursor" src={mukola1} alt="Mukola" />
          </div>
          <div className="column">
            <img className="demo cursor" src={mukola2} alt="Mukola" />
          </div>
          <div className="column">
            <img className="demo cursor" src={mukola3} alt="Mukola" />
          </div>
          <div className="column">
            <img className="demo cursor" src={mukola5} alt="Mukola" />
          </div>
          <div className="column">
            <img className="demo cursor" src={mukola5} alt="Mukola" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Galery;
