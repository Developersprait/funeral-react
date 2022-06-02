import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
    return (
      <div>
        <Slider {...settings}>
          <div>
            <div className="slider__item">
              <div className="slider__item-content">
                <div className="slider__title">"ПОХОРОН-СЕРВИС"</div>
                <div className="slider__text">
                  Ритуальные услуги в Бресте, Брестской области, РБ
                  <br />
                  Своевременная помощь в организации похорон КРУГЛОСУТОЧНО
                </div>
                {/* <a data-fancybox data-src="#modal" href="javascript:;" className="slider__btn default-btn">
                            Оставить заявку
                        </a> */}
              </div>
            </div>
          </div>
          <div>
            <div className="slider__item">
              <div className="slider__item-content">
                <div className="slider__title">ОРГАНИЗАЦИЯ ПОХОРОН "ПОД КЛЮЧ"</div>
                <div className="slider__text">
                  Полный спектр оказания услуг, широкий выбор ритуальной
                  продукции
                </div>
                {/* <a
                  data-fancybox
                  data-src="#modal"
                  href="javascript:;"
                  className="slider__btn default-btn"
                >
                  Оставить заявку
                </a> */}
              </div>
            </div>
          </div>
          <div>
            <div className="slider__item">
              <div className="slider__item-content">
                <div className="slider__title">АДЕКВАТНЫЕ ЦЕНЫ</div>
                <div className="slider__text">
                  Приемлемые расценки на оказание качественных услуг по
                  погребению
                </div>
                {/* <a
                  data-fancybox
                  data-src="#modal"
                  href="javascript:;"
                  className="slider__btn default-btn"
                >
                  Оставить заявку
                </a> */}
              </div>
            </div>
          </div>
        </Slider>
      </div>
    );
  }
}
