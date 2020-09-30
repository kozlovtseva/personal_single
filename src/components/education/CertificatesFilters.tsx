import React from "react";

import { styled, media } from "../../Theme";
import { Filter } from "../../interfaces/data";

interface Props {
    filters: Filter[];
    list: number;
    setListItem: (id: number) => void;
}

const CertificatesFilters = (props: Props) => {
    return (
        <Container>
            {props.filters.map((item: Filter, index: number) => (
                <Item
                    color={item.id === props.list ? "primaryActive" : "primary"}
                    key={index}
                    onClick={() => props.setListItem(item.id)}
                >
                    {item.name}
                </Item>
            ))}
        </Container>
    );
};

const Container = styled.div`
    display: grid;
    grid-gap: 1rem;
    grid-template-columns: repeat(3, 1fr);
`;
const Item = styled.div`
    background-color: ${(props: any) => props.theme.color[props.color]};
    border-radius: 10px;
    box-shadow: ${(props: any) =>
        props.color === "primaryActive" ? "0px 0px 8px 5px #9be9e9" : "none"};
    color: ${(props: any) => props.theme.color.lightText};
    font-size: 0.8em;
    height: 65px;
    line-height: 65px;
    text-align: center;
    transition: 0.3s ease-in-out;
    &:hover {
        background-color: ${(props: any) => props.theme.color.primaryActive};
        box-shadow: 0px 0px 8px 5px #9be9e9;
        cursor: pointer;
    }
    ${media.md} {
        font-size: 0.5em;
    }
    ${media.sm} {
        font-size: 0.4em;
    }
    ${media.xs} {
        font-size: 0.25em;
        height: 30px;
        line-height: 30px;
    }
`;

export default CertificatesFilters;
