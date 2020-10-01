import React from "react";

import { styled, media } from "../../Theme";

import { CertificatesItemTypes } from "../../interfaces/data";

interface Props {
    item: CertificatesItemTypes;
    value: number;
}

const CertificatesItem = (props: Props) => {
    const backgroundColors: string[] = [
        "rgba(155, 233, 233, 0.26)",
        "rgba(250, 240, 203, 0.3)",
        "#f5f5f3",
        "rgba(217, 155, 233, 0.1)",
        "rgba(204, 250, 203, 0.3)",
        "#eff6fe",
        "rgba(155, 233, 233, 0.26)",
        "rgba(250, 240, 203, 0.3)",
        "#f5f5f3",
        "rgba(217, 155, 233, 0.1)",
        "rgba(204, 250, 203, 0.3)",
        "#eff6fe",
    ];
    return (
        <Container
            id={(props.value + 2).toString()}
            color={backgroundColors[props.value]}
        >
            <Title>{props.item.name}</Title>
            {props.item.topics.map((item: string, key: number) => (
                <Text key={key}>{item}</Text>
            ))}
            <Link href={props.item.link} target="_blank">
                <Arrow>
                    <ArrowBody />
                    <ArrowHead />
                </Arrow>
            </Link>
        </Container>
    );
};

const Container = styled.li`
    background-color: ${(props: any) => props.color};
    grid-row-end: ${(props: any) => "span " + props.id};
    list-style: none;
    padding: 20px 20px 40px 20px;
    position: relative;
    ${media.md} {
        padding: 10px 10px 40px 10px;
    }
`;
const Title = styled.h4`
    color: ${(props: any) => props.theme.color.lightDarkText};
    font-size: 0.5em;
    font-weight: 500;
    margin-bottom: 20px;
`;
const Text = styled.p`
    color: ${(props: any) => props.theme.color.lightDarkText};
    font-size: 0.5em;
    margin-bottom: 10px;
`;
const Link = styled.a``;
const Arrow = styled.div`
    position: absolute;
    right: 20px;
    bottom: 20px;
    &:hover {
        animation: bounceToRight 0.6s infinite alternate;
        cursor: pointer;
    }
    @keyframes bounceToRight {
        from {
            transform: translate3d(0, 0, 0);
        }
        to {
            transform: translate3d(10px, 0, 0);
        }
    }
`;
const ArrowBody = styled.div`
    background-color: ${(props) => props.theme.color.lightDarkText};
    height: 2px;
    width: 20px;
    margin-bottom: -6px;
`;
const ArrowHead = styled.div`
    border-top: 5px solid transparent;
    border-bottom: 5px solid transparent;
    border-left: 5px solid ${(props) => props.theme.color.lightDarkText};
    margin-left: 20px;
`;

export default CertificatesItem;
