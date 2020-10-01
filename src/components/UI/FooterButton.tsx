import React from "react";

import { styled, media } from "../../Theme";
import { FooterButtonTypes } from "../../interfaces/data";

interface Props {
    item: FooterButtonTypes;
}

const FooterButton = (props: Props) => {
    return (
        <Button type="button">
            <Link target="_blank" href={props.item.link}>
                <Text>{props.item.name}</Text>
                <span>→</span>
            </Link>
        </Button>
    );
};

const Button = styled.button`
    background: rgba(255, 255, 255, 0.32);
    border: none;
    border-radius: 5px;
    height: 45px;
    line-height: 45px;
    margin: 30px;
    width: 200px;
    ${media.xs} {
        margin: 15px;
        width: 120px;
    }
`;
const Link = styled.a`
    border-radius: 5px;
    color: ${(props: any) => props.theme.color.lightDarkText};
    display: block;
    font-weight: 400;
    font-size: 1.2em;
    height: 45px;
    line-height: 45px;
    text-align: center;
    width: 200px;
    transition: 0.3s ease-in-out;
    &:hover {
        background-color: rgba(0, 0, 0, 0.3);
        color: #545454;
        cursor: pointer;
    }
    ${media.xs} {
        font-size: 0.7em;
        width: 120px;
    }
`;
const Text = styled.span`
    margin-right: 5px;
`;

export default FooterButton;
