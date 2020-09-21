import React from "react";

import { styled, media } from "../../Theme";

interface Props {
    title: string;
    color: string;
}

const BigTitle = (props: Props) => {
    return <Title color={props.color}>{props.title}</Title>;
};

const Title = styled.h3`
    color: ${(props: any) => props.theme.color[props.color]};
    font-weight: 400;
    font-size: 2em;
    margin-bottom: 20px;
    text-transform: uppercase;
    ${media.sm} {
        font-size: 1.5em;
    }
    ${media.xs} {
        font-size: 1em;
    }
`;

export default BigTitle;
