import React from "react";
import { EducationItem } from "../../interfaces/data";

import { styled, media } from "../../Theme";

export interface Props {
    item: EducationItem;
}

const Education = (props: Props) => {
    return (
        <Container>
            <Image
                src={require(`../../images/${props.item.image}`)}
                alt={props.item.name}
            />
            <Type>{props.item.type}</Type>
            <Name>{props.item.name + ", " + props.item.year}</Name>
            {props.item.specialization.map((item: string, index: number) => (
                <Text key={index}>{item}</Text>
            ))}
        </Container>
    );
};

const Container = styled.li`
    list-style: none;
    padding: 20px;
`;
const Image = styled.img`
    border-radius: 10px;
    display: block;
    margin: 0 auto;
    ${media.sm} {
        width: 300px;
    }
    ${media.xs} {
        width: 280px;
    }
`;
const Type = styled.div`
    background-color: ${(props: any) => props.theme.color.primary};
    border-radius: 10px;
    color: ${(props: any) => props.theme.color.lightText};
    font-size: 0.8em;
    height: 60px;
    line-height: 60px;
    margin: 20px 0;
    text-align: center;
    width: 100%;
    ${media.sm} {
        font-size: 0.7em;
    }
    ${media.xs} {
        font-size: 0.5em;
    }
`;
const Name = styled.p`
    color: ${(props: any) => props.theme.color.lightDarkText};
    margin-bottom: 20px;
    text-align: center;
    ${media.sm} {
        font-size: 0.8em;
    }
    ${media.xs} {
        font-weight: 600;
        font-size: 0.5em;
    }
`;
const Text = styled.p`
    color: ${(props: any) => props.theme.color.lightDarkText};
    font-size: 0.8em;
    margin-bottom: 20px;
    text-align: center;
    ${media.sm} {
        font-size: 0.6em;
    }
    ${media.xs} {
        font-size: 0.5em;
    }
`;

export default Education;
