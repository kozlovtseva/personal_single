import React from "react";
import { useTranslation } from "react-i18next";

import { styled, media } from "../../Theme";
import BigTitle from "../UI/BigTitle";
import CheckVisibility from "../../helpers/CheckVisibility";
import { TextProps } from "../../interfaces/data";

import PortfolioSlider from "./PortfolioSlider";

const Portfolio: React.FC<{}> = () => {
    const { t } = useTranslation();
    const [isRefVisible, ref] = CheckVisibility<HTMLDivElement>();
    return (
        <Section>
            <Wrapper ref={ref} isRefVisible={isRefVisible}>
                <BigTitle title={t("portfolio.title")} color="lightText" />
                <Subtitle>{t("portfolio.subtitle")}</Subtitle>
            </Wrapper>
            <PortfolioSlider
                projects={t("portfolio.projects", { returnObjects: true })}
            />
        </Section>
    );
};

const Section = styled.section`
    background-color: ${(props) => props.theme.color.primary};
    padding: 100px;
    ${media.sm} {
        padding: 35px;
    }
`;
const Wrapper = styled.div`
    animation: ${(props: TextProps) =>
        props.isRefVisible ? "text 0.7s linear" : "none"};
    animation-fill-mode: forwards;
    margin-bottom: 100px;
    opacity: 0;
`;
const Subtitle = styled.p`
    color: ${(props) => props.theme.color.lightText};
    margin-bottom: 20px;
    ${media.sm} {
        font-size: 0.5em;
    }
`;

export default Portfolio;
