import React from "react";

import { styled, media } from "../../Theme";

interface Props {
    name: string;
    link: string;
}

const SmallButton = (props: Props) => {
    return (
        <Button type="button">
            <Link target="_blank" href={props.link}>
                {props.name}
            </Link>
        </Button>
    );
};

const Button = styled.button`
    background: ${(props) => props.theme.color.primary};
    border: none;
    border-radius: 10px;
    display: block;
    height: 26px;
    line-height: 26px;
    margin: 20px auto;
    width: 135px;
    ${media.md} {
        margin: 10px auto;
    }
    ${media.xs} {
        margin: 5px auto;
    }
`;
const Link = styled.a`
    border-radius: 10px;
    color: ${(props: any) => props.theme.color.lightDarkText};
    display: block;
    font-weight: 400;
    font-size: 1em;
    height: 26px;
    text-align: center;
    width: 135px;
    transition: 0.3s ease-in-out;
    &:hover {
        background-color: rgba(0, 0, 0, 0.3);
        color: #000;
        cursor: pointer;
    }
    ${media.xs} {
        font-size: 0.7em;
    }
`;

export default SmallButton;
