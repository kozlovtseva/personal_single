import React from "react";
import { useTranslation } from "react-i18next";

import { styled, media } from "../../Theme";
import BigTitle from "../UI/BigTitle";
import ComputerImage from "./ComputerImage";
import CheckVisibility from "../../helpers/CheckVisibility";

interface TextProps {
    isRefVisible: Boolean;
    theme: any;
}

const EducationTitle: React.FC<{}> = () => {
    const { t } = useTranslation();
    const [isRefVisible, ref] = CheckVisibility<HTMLDivElement>();
    return (
        <Section>
            <Wrapper ref={ref} isRefVisible={isRefVisible}>
                <BigTitle title={t("education.title")} color="primary" />
            </Wrapper>
            <ComputerImage />
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
    margin-bottom: 100px;
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

export default EducationTitle;
