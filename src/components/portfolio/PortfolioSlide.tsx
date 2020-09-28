import React from "react";
import { styled, media } from "../../Theme";
import { css } from "styled-components";

import { Project } from "../../interfaces/data";
import SmallButton from "../UI/SmallButton";

export interface Props {
    project: Project;
}

const PortfolioSlide = (props: Props) => {
    return (
        <Wrapper>
            <Image
                src={require(`../../images/${props.project.image}`)}
                alt={props.project.name}
            />
            <Info>
                <Title>{props.project.name}</Title>
                <ul>
                    {props.project.details.map(
                        (item: string, index: number) => (
                            <DetailsItem key={index}>{item}</DetailsItem>
                        )
                    )}
                </ul>
                <SmallButton
                    name={props.project.button}
                    link={props.project.link}
                />
            </Info>
        </Wrapper>
    );
};

const slideMedia = css`
    ${media.xl} {
        height: 260px;
        width: 300px;
    }
    ${media.lg} {
        height: 220px;
        width: 280px;
    }
    ${media.xs} {
        height: 205px;
        width: 250px;
    }
`;

const Wrapper = styled.div`
    height: 300px;
    margin: 0 auto;
    position: relative;
    width: 350px;

    ${slideMedia};
`;

const Image = styled.img`
    border-radius: 20px;
    height: 300px;
    margin: 0 auto;
    width: 350px;
    ${slideMedia};
`;
const Info = styled.div`
    background-color: rgba(0, 0, 0, 0.78);
    border-radius: 20px;
    opacity: 0;
    height: 300px;
    padding: 20px;
    position: absolute;
    right: 0;
    top: 0;
    transition: 0.5s ease-in-out;
    width: 350px;
    &:hover {
        cursor: pointer;
        opacity: 1;
    }
    ${slideMedia};
    ${media.xl} {
        padding: 10px;
    }
`;
const Title = styled.h4`
    color: ${(props: any) => props.theme.color.lightText};
    font-size: 0.5em;
    font-weight: 600;
    margin-bottom: 20px;
    ${media.xl} {
        font-size: 0.4em;
    }
    ${media.xs} {
        font-size: 0.3em;
        margin-bottom: 7px;
    }
`;
const DetailsItem = styled.li`
    color: ${(props: any) => props.theme.color.lightText};
    font-size: 0.3em;
    font-weight: 400;
    list-style: none;
    margin-bottom: 5px;
    ${media.xl} {
        font-size: 0.27em;
    }
    ${media.lg} {
        font-size: 0.23em;
    }
    ${media.xs} {
        font-size: 0.21em;
    }
`;

export default PortfolioSlide;
