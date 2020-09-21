import React from "react";
import { css } from "styled-components";

import { styled, media } from "../../Theme";
import { ReactComponent as Girl } from "../../images/girl.svg";

const GirlImage: React.FC<{}> = () => {
    return (
        <Wrapper>
            <Girl />
            <SteamOne />
            <SteamTwo />
            <SteamThree />
            <SteamFour />
        </Wrapper>
    );
};

const back = css`
    animation: colorChanging 7s infinite linear;
    @keyframes colorChanging {
        0% {
            fill: #9be9e9;
        }
        15% {
            fill: #9be9da;
        }
        30% {
            fill: #c0bff3;
        }
        45% {
            fill: #9bc4e9;
        }
        60% {
            fill: #e8caf6;
        }
        75% {
            fill: #fbfdaf;
        }
        100% {
            fill: #9be9e9;
        }
    }
`;
const steam = css`
    border-radius: 50%;
    bottom: 280px;
    background-color: #fff;
    height: 50px;
    left: 60px;
    margin-top: -75px;
    margin-left: 75px;
    opacity: 0;
    position: absolute;
    width: 50px;
    z-index: 0;
    ${media.sm} {
        bottom: 155px;
        height: 30px;
        left: 55px;
        margin-top: -15px;
        margin-left: 15px;
        width: 30px;
    }
`;
const steamFirst = css`
    @keyframes steam-one {
        0% {
            transform: translateY(0) translateX(0) scale(0.25);
            opacity: 0.5;
        }
        100% {
            transform: translateY(-200px) translateX(-20px) scale(1);
            opacity: 0;
        }
    }
`;
const steamSecond = css`
    @keyframes steam {
        0% {
            transform: translateY(0) translateX(0) scale(0.25);
            opacity: 0.5;
        }
        100% {
            transform: translateY(-200px) translateX(20px) scale(1);
            opacity: 0;
        }
    }
`;
const Wrapper = styled.div`
    & svg #back {
        ${back};
    }
    & svg #back_small {
        ${back};
    }
    & svg {
        ${media.sm} {
            height: 261px;
            width: 300px;
        }
    }
    position: relative;
`;

const SteamOne = styled.div`
    ${steam};
    ${steamFirst};
    animation: steam 4s ease-out infinite;
`;
const SteamTwo = styled.div`
    ${steam};
    ${steamSecond};
    animation: steam 4s ease-out 0.5s infinite;
`;
const SteamThree = styled.div`
    ${steam};
    ${steamFirst};
    animation: steam 4s ease-out 1s infinite;
`;
const SteamFour = styled.div`
    ${steam};
    ${steamSecond};
    animation: steam 4s ease-out 1.5s infinite;
`;

export default GirlImage;
