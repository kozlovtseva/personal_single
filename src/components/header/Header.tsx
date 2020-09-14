import React from "react";
import { useTranslation } from "react-i18next";
import styled, { css } from "styled-components";

import LanguageSelector from "./LanguageSelector";

const Header: React.FC<{}> = () => {
    const { t } = useTranslation();
    return (
        <Wrapper>
            <LanguageSelector />
            <Title>{t("header.title")}</Title>
            <Subtitle>{t("header.subtitle")}</Subtitle> 
        </Wrapper>
    );
};

const Wrapper = styled.header`
    color: #2196f3;
    text-align: center;
    font-size: 26px;
    margin-top: 30px;
`;
const title = css`
    color: #000;
    text-align: center;
    font-size: 26px;
    margin-top: 30px;
`;
const Title = styled.h1`
    ${title};
`;
const Subtitle = styled.h2`
    ${title};
`;

export default Header;
