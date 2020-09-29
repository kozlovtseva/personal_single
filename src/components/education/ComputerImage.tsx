import React from "react";

import { styled, media } from "../../Theme";

import CheckVisibility from "../../helpers/CheckVisibility";
import { ReactComponent as Computer } from "../../images/computer.svg";

const ComputerImage: React.FC<{}> = () => {
    const [isRefVisible, ref] = CheckVisibility<HTMLDivElement>();

    return (
        <Wrapper ref={ref} isRefVisible={isRefVisible}>
            <Computer />
        </Wrapper>
    );
};
interface Props {
    isRefVisible: Boolean;
}

const Wrapper = styled.div`
    margin-left: 30px;
    & svg {
        ${media.sm} {
            height: 252px;
            width: 300px;
        }
        ${media.xs} {
            height: 210px;
            width: 250px;
        }
    }
    & svg .appear {
        animation: ${(props: Props) =>
            props.isRefVisible ? "appear 1s linear" : "none"};
        animation-fill-mode: forwards;
        transform: scale(0);
        @keyframes appear {
            0% {
                transform: scale(0);
                opacity: 0.2;
            }
            100% {
                transform: scale(1);
                opacity: 1;
            }
        }
    }
    & svg .arrive {
        animation: ${(props: Props) =>
            props.isRefVisible ? "arrive 1s 1s linear" : "none"};
        animation-fill-mode: forwards;
        transform: translate(-100px);
        opacity: 0;
        @keyframes arrive {
            0% {
                transform: translate(-100px);
                opacity: 0.2;
            }
            100% {
                transform: translate(0px);
                opacity: 1;
            }
        }
    }
`;

export default ComputerImage;
