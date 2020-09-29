import React from "react";
import { useTranslation } from "react-i18next";

import { EducationItem } from "../../interfaces/data";
import Background from "../../images/back.jpg";
import { styled, media } from "../../Theme";

import EducationListItem from "./EducationListItem";

const Education: React.FC<{}> = () => {
    const { t } = useTranslation();
    const educationList: any = t("education.list", { returnObjects: true });
    console.log(t("education.list", { returnObjects: true }));
    const list = educationList.map((item: EducationItem, index: number) => (
        <EducationListItem item={item} key={index} />
    ));

    return (
        <Section>
            <List>{list}</List>
        </Section>
    );
};

const Section = styled.section`
    background: linear-gradient(
            rgba(255, 255, 255, 0.7),
            rgba(255, 255, 255, 0.7)
        ),
        center top url(${Background}) no-repeat;
    background-size: cover;
    height: fit-content;
    background-attachment: fixed;
    padding-top: 50px;
`;

const List = styled.ul`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(380px, 1fr));
    ${media.sm} {
        grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    }
`;

export default Education;
