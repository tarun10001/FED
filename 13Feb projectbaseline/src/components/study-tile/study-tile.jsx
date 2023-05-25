import React, { useEffect, useState } from "react";
import { data } from "../../data";
import { FaPlus } from "react-icons/fa";

export const StudyTile = () => {
  const [loadData, setLoadData] = useState(2);

  const showData = () => {
    console.log();
    setLoadData(loadData + 2);
  };

  return (
    <div className="study-tile">
      <div className="study-tile__heading">
        <p>Learn about some of our research opportunities</p>
      </div>

      <div className="study-tile">
        {data?.studyTiles.slice(0, loadData).map((item, index) => {
          return (
            <div className="study-tile__cards" key={index}>
              <article className="study-tile__cards__content-wrapper">
                <div className="study-tile__cards__content-wrapper__img-container">
                  <img src={item.img_url} />
                </div>
                <div className="study-tile__cards__content-wrapper__content">
                  <h3>{item.content_h3}</h3>
                  <div className="study-tile__cards__content-wrapper__content__description">
                    Help test a new depression option
                  </div>

                  <div className="study-tile__cards__content-wrapper__content__btn">
                    <a href="">Learn more</a>
                  </div>
                  <div className="study-tile__cards__content-wrapper__content__status">
                    <div className="study-tile__cards__content-wrapper__content__status__hero-maker"></div>
                    <div className="study-tile__cards__content-wrapper__content__status__text">
                      Enrolling now!
                    </div>
                  </div>
                </div>
              </article>
            </div>
          );
        })}
      </div>

      <div className="study-tile__load-more">
        {loadData < data?.studyTiles.length ? (
          <button onClick={showData}>
            <span>
              <FaPlus />
            </span>

            <span>Load more</span>
          </button>
        ) : null}
      </div>
    </div>
  );
};
