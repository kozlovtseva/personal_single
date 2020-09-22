import React from "react";

import { styled, media } from "../../Theme";
import CheckVisibility from "../../assets/CheckVisibility";

interface Props {
    title: string;
    color: string;
}
interface TitleProps {
    isRefVisible: Boolean;
    color: string;
    theme: any;
}

const SmallTitle = (props: Props) => {
    const [isRefVisible, ref] = CheckVisibility<HTMLDivElement>();
    return (
        <Title color={props.color} ref={ref} isRefVisible={isRefVisible}>
            {props.title}
        </Title>
    );
};

const Title = styled.h3`
    animation: ${(props: TitleProps) =>
        props.isRefVisible ? "text 0.7s linear" : "none"};
    animation-fill-mode: forwards;
    color: ${(props: TitleProps) => props.theme.color[props.color]};
    font-weight: 600;
    font-size: 1.3em;
    margin-bottom: 20px;
    opacity: 0;
    ${media.sm} {
        font-size: 0.7em;
    }
    @keyframes text {
        0% {
            opacity: 0;
            transform: translateX(-100px);
        }

        100% {
            opacity: 1;
            transform: translate(0);
        }
    }
`;

export default SmallTitle;
