import React from "react";

import { styled, media } from "../../Theme";

import CheckVisibility from "../../helpers/CheckVisibility";
import { ReactComponent as Notebook } from "../../images/notebook.svg";

const NoteImage: React.FC<{}> = () => {
    const [isRefVisible, ref] = CheckVisibility<HTMLDivElement>();

    return (
        <Wrapper ref={ref} isRefVisible={isRefVisible}>
            <Notebook />
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
    & svg .zoom {
        animation: ${(props: Props) =>
            props.isRefVisible ? "appear 1s 1.2s linear" : "none"};
        animation-fill-mode: forwards;
        transform: scale(0);
        opacity: 0;
    }
`;

export default NoteImage;
