import { useState, useEffect } from "react";
import axios from "axios";

const src = "https://queenlyrain.backendless.app/api/data/tools";

function CardItem() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    axios.get(src).then((data) => {
      setArticles(data.data);
    });
  }, [articles]);
  return (
    <div className="catalog">
      {articles.map((item) => {
        return (
          <div key={item.objectId} className="catalog-item">
            <div className="catalog-img-container">
              <img src={item.imageUrl} className="catalog-item-img" />
              <div className="characteristics">
                <span className="catalog-item-name">{item.name}</span>
                <span className="catalog-item-price">{item.price} ₴</span>
              </div>
              <div className="subscription-about-wrapper">
                <a href="contacts.html">Завмовити</a>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
export { CardItem };
