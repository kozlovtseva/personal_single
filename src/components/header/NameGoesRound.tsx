import React from "react";

import { styled, media } from "../../Theme";
import { useTranslation } from "react-i18next";

const NameGoesRound: React.FC<{}> = () => {
    const { t } = useTranslation();
    return (
        <CircleText>
            <svg width="600px" height="600px" viewBox="0 0 600 600">
                <defs>
                    <path
                        id="circlePath"
                        d="M 300, 300 m -200, 0 a 200,200 0 0,1 400,0 a 200,200 0 0,1 -400,0 "
                    />
                </defs>
                <text>
                    <textPath href="#circlePath">
                        {t("header.name")} {t("header.name")}
                    </textPath>
                </text>
            </svg>
        </CircleText>
    );
};

const CircleText = styled.div`
    ${media.lg} {
        right: -30%;
    }
    ${media.md} {
        display: none;
    }
    position: absolute;
    right: -20%;
    top: 0;
    & svg {
        animation: rotate 15s infinite linear;
    }
    & svg text {
        font-size: 42px;
        fill: #fff;
        letter-spacing: 11px;
        font-weight: 400;
        text-transform: uppercase;
    }
    @keyframes rotate {
        from {
            transform: rotate(360deg);
        }
        to {
            transform: rotate(0);
        }
    }
`;

export default NameGoesRound;
