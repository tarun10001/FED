import React, { useEffect, useState } from "react";
import { data } from "../../data";
import { AiOutlinePlus } from "react-icons/ai";
import { GrClose } from "react-icons/gr";

export const Studies = () => {
  const [isVisible, setIsVisible] = useState(0);

  const showData = (tile) => {
    if (isVisible === -1 || isVisible !== tile) {
      setIsVisible(tile);
    } else if (isVisible === tile) {
      setIsVisible(-1);
    }
  };

  return (
    <>
      {data?.covid19.map((item, index) => {
        return (
          <>
            <div className={index=== 0 ? 'studies-wrapper-first' : 'studies-wrapper'} key={index}>
              <div className="studies-wrapper__upper">
              <h2 className="studies-wrapper__heading">{item.heading}</h2>
              <p>{item.description}</p>
              <button
                className="studies-wrapper__btn"
                onClick={() => showData(index)}
              >
                <span>
                  {index == isVisible ? <GrClose /> : <AiOutlinePlus />}
                </span>

                <span>
                  {index == isVisible
                    ? "Close opportunities"
                    : "See opportunities"}
                </span>
              </button>
              </div>
             

              <div className="studies-wrapper__study-tile">
                {isVisible == index &&
                 item.studyTiles.map((item, index) => {
                    return (
                      <div className="studies-wrapper__study-tile__cards" key={index}>
                        <article className="studies-wrapper__study-tile__cards__content-wrapper">
                          <div className="studies-wrapper__study-tile__cards__content-wrapper__img-container">
                            <img src={item.img_url} />
                          </div>
                          <div className="studies-wrapper__study-tile__cards__content-wrapper__content">
                            <h3>{item.content_h3}</h3>
                            <div className="studies-wrapper__study-tile__cards__content-wrapper__content__description">
                              Help test a new depression option
                            </div>

                            <div className="studies-wrapper__study-tile__cards__content-wrapper__content__btn">
                              <a href="">Learn more</a>
                            </div>
                            <div className="studies-wrapper__study-tile__cards__content-wrapper__content__status">
                              <div className="studies-wrapper__study-tile__cards__content-wrapper__content__status__hero-maker"></div>
                              <div className="studies-wrapper__study-tile__cards__content-wrapper__content__status__text">
                                Enrolling now!
                              </div>
                            </div>
                          </div>
                        </article>
                      </div>
                    );
                  })}
              </div>
            </div>
          </>
        );
      })}
    </>
  );
};
