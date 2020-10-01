import React from "react";
import { useTranslation } from "react-i18next";

import { styled, media } from "../../Theme";
import CheckVisibility from "../../helpers/CheckVisibility";
import { TextProps } from "../../interfaces/data";

import BigTitle from "../UI/BigTitle";
import GirlImage from "./GirlImage";

const About: React.FC<{}> = () => {
    const { t } = useTranslation();
    const [isRefVisible, ref] = CheckVisibility<HTMLDivElement>();

    return (
        <Section>
            <Wrapper ref={ref} isRefVisible={isRefVisible}>
                <BigTitle title={t("about.title")} color="primary" />
                <Text>{t("about.text")}</Text>
            </Wrapper>
            <GirlImage />
        </Section>
    );
};

const Section = styled.section`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    padding: 100px;
    ${media.sm} {
        padding: 35px;
    }
`;
const Wrapper = styled.div`
    animation: ${(props: TextProps) =>
        props.isRefVisible ? "text 0.7s linear" : "none"};
    animation-fill-mode: forwards;
    opacity: 0;
    flex: 1 1;
`;
const Text = styled.p`
    color: ${(props) => props.theme.color.lightDarkText};
    margin-bottom: 20px;
    ${media.sm} {
        font-size: 0.5em;
    }
`;

export default About;
