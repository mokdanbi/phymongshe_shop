import React, { useRef } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import { main_content } from "../data/common";
import "../css/MainSlider.scss"

const MainSlider = () => {
    const MainSlide = useRef(null)
    return (
        <div className="MainSlider">
            <Slider
                arrows={false}
                autoplay={true}
                pauseOnHover={false}
                ref={MainSlide}
                dots={true}
            >
                {
                    main_content.map((it, idx) => {
                        return (
                            <figure className={`itm itm0${idx + 1}`}>
                                <div className="inner">
                                    <strong>{it.strong}</strong>
                                    <p>{it.content}</p>
                                    <span className="des">{it.des}</span>
                                    <Link to={it.link}>more</Link>
                                </div>
                            </figure>
                        )
                    })
                }
            </Slider>
        </div>
    )
}

export default MainSlider;