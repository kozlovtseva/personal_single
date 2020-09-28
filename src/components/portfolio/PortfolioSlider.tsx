import React from "react";
import { styled } from "../../Theme";
import { Projects, Project } from "../../interfaces/data";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import PortfolioSlide from "./PortfolioSlide";

const PortfolioSlider = (props: Projects) => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        responsive: [
            {
                breakpoint: 1400,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 790,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };
    const slides = props.projects.map((item: Project, index: number) => (
        <SlideWrapper key={index}>
            <PortfolioSlide project={item} />
        </SlideWrapper>
    ));
    return <Slider {...settings}>{slides}</Slider>;
};

const SlideWrapper = styled.div``;

export default PortfolioSlider;
