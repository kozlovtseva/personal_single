import React from "react";
import { useTranslation } from "react-i18next";

import { styled, media } from "../../Theme";
import SmallTitle from "../UI/SmallTitle";
import NoteImage from "./NoteImage";
import CheckVisibility from "../../helpers/CheckVisibility";
import { TextProps } from "../../interfaces/data";

const SkillsTitle: React.FC<{}> = () => {
    const { t } = useTranslation();
    const [isRefVisible, ref] = CheckVisibility<HTMLDivElement>();
    return (
        <Container>
            <Wrapper>
                <SmallTitle title={t("skills.title")} color="lightText" />
                <Subtitle ref={ref} isRefVisible={isRefVisible}>
                    {t("skills.subtitle")}
                </Subtitle>
            </Wrapper>
            <Wrapper>
                <NoteImage />
            </Wrapper>
        </Container>
    );
};

const Container = styled.div`
    background-color: ${(props) => props.theme.color.primary};
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    padding: 100px;
    ${media.sm} {
        padding: 35px;
    }
`;
const Wrapper = styled.div`
    flex: 1 1;
`;
const Subtitle = styled.p`
    animation: ${(props: TextProps) =>
        props.isRefVisible ? "text 0.7s linear" : "none"};
    animation-fill-mode: forwards;
    color: ${(props) => props.theme.color.lightText};
    margin-bottom: 20px;
    opacity: 0;
    ${media.sm} {
        font-size: 0.5em;
    }
`;

export default SkillsTitle;
