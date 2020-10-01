import React from "react";
import { useTranslation } from "react-i18next";

import { styled, media } from "../../Theme";
import BigTitle from "../UI/BigTitle";
import ComputerImage from "./ComputerImage";
import CheckVisibility from "../../helpers/CheckVisibility";
import { TextProps } from "../../interfaces/data";

const EducationTitle: React.FC<{}> = () => {
    const { t } = useTranslation();
    const [isRefVisible, ref] = CheckVisibility<HTMLDivElement>();
    return (
        <Container>
            <Wrapper ref={ref} isRefVisible={isRefVisible}>
                <BigTitle title={t("education.title")} color="primary" />
            </Wrapper>
            <ComputerImage />
        </Container>
    );
};

const Container = styled.div`
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
    margin-bottom: 30px;
    opacity: 0;
    ${media.sm} {
        margin-bottom: 0px;
    }
`;

export default EducationTitle;
