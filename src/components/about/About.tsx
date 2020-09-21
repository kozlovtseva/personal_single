import React from "react";
import { useTranslation } from "react-i18next";

import { styled, media } from "../../Theme";
import BigTitle from "../UI/BigTitle";
import GirlImage from "./GirlImage";

const About: React.FC<{}> = () => {
    const { t } = useTranslation();
    return (
        <Section>
            <Wrapper>
                <BigTitle title={t("about.title")} color="primary" />
                <Text>{t("about.text")}</Text>
            </Wrapper>
            <Wrapper>
                <GirlImage />
            </Wrapper>
        </Section>
    );
};

const Section = styled.section`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    height: 100vh;
    padding: 100px;
    ${media.sm} {
        padding: 35px;
    }
`;
const Wrapper = styled.div`
    flex: 1 1;
`;
const Text = styled.p`
    color: ${(props) => props.theme.color.lightDarkText};
    margin-bottom: 20px;
    ${media.sm} {
        font-size: 0.7em;
    }
`;

export default About;
