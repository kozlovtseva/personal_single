import React from "react";

import { styled, media } from "../../Theme";

interface Props {
    title: string;
    color: string;
    shadow?: boolean;
}
export interface ThemeProps {
    color: string;
    shadow?: boolean;
    theme: any;
}
const BigTitle = (props: Props) => {
    return (
        <Title shadow={props.shadow} color={props.color}>
            {props.title}
        </Title>
    );
};

const Title = styled.h3`
    color: ${(props: ThemeProps) => props.theme.color[props.color]};
    font-weight: 400;
    font-size: 2em;
    margin-bottom: 20px;
    ${(props: any) =>
        props.shadow
            ? "text-shadow: 0px 4px 4px " + props.theme.color[props.color] + ";"
            : ""}
    text-transform: uppercase;
    transition: 0.3s ease-in-out;
    ${media.sm} {
        font-size: 1.5em;
    }
    ${media.xs} {
        font-size: 1em;
    }
`;

export default BigTitle;
