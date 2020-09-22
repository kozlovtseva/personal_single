import React from "react";
import { useTranslation } from "react-i18next";

import { styled, media } from "../../Theme";
import SmallTitle from "../UI/SmallTitle";
import NoteImage from "./NoteImage";
import CheckVisibility from "../../assets/CheckVisibility";

interface TextProps {
    isRefVisible: Boolean;
    theme: any;
}

const SkillsTitle: React.FC<{}> = () => {
    const { t } = useTranslation();
    const [isRefVisible, ref] = CheckVisibility<HTMLDivElement>();
    return (
        <Section>
            <Wrapper>
                <SmallTitle title={t("skills.title")} color="lightText" />
                <Subtitle ref={ref} isRefVisible={isRefVisible}>
                    {t("skills.subtitle")}
                </Subtitle>
            </Wrapper>
            <Wrapper>
                <NoteImage />
            </Wrapper>
        </Section>
    );
};

const Section = styled.section`
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
    @keyframes text {
        0% {
            opacity: 0;
            transform: translateX(-100px);
        }

        100% {
            opacity: 1;
            transform: translate(0);
        }
    }
`;

export default SkillsTitle;
