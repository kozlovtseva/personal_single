import React from "react";
import { useTranslation } from "react-i18next";
import { css } from "styled-components";

import { styled, media } from "../../Theme";
import Background from "../../images/me.jpg";
import LanguageSelector from "../UI/LanguageSelector";
import NameGoesRound from "./NameGoesRound";
import ContactsAnchor from "./ContactsAnchor";

const Header: React.FC<{}> = () => {
    const { t } = useTranslation();
    return (
        <Wrapper>
            <LanguageSelector />
            <Title>{t("header.title")}</Title>
            <Subtitle>{t("header.subtitle")}</Subtitle>
            <NameGoesRound />
            <Name>{t("header.name")}</Name>
            <ContactsAnchor />
        </Wrapper>
    );
};

const Wrapper = styled.header`
    background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
        center top url(${Background}) no-repeat;
    background-size: cover;
    height: 100vh;
    overflow: hidden;
    padding: 35px;
    position: relative;
`;
const title = css`
    ${media.xs} {
        font-size: 1em;
        max-width: 100%;
    }
    ${media.lg} {
        margin-left: 0px;
    }
    font: 400 1.7em "Cutive Mono", monospace;
    color: ${(props) => props.theme.color.lightText};
    max-width: 70%;
    margin-left: 65px;
`;
const Title = styled.h1`
    ${title};
    ${media.sm} {
        margin-top: 200px;
    }
    margin-top: 25vh;
`;
const Subtitle = styled.h2`
    ${title};
`;
const Name = styled.p`
    color: ${(props) => props.theme.color.lightText};
    display: none;
    height: -29%;
    font-size: 0.7em;
    position: absolute;
    right: -90px;
    transform: rotate(-90deg);
    top: 110px;
    ${media.md} {
        display: block;
    }
`;

export default Header;
