import React, { useState, MouseEvent } from "react";
import { useTranslation } from "react-i18next";
// import styled, { css } from "styled-components";

const LanguageSelector: React.FC<{}> = () => {
    const [language, setLanguage] = useState("ru");
    const { i18n } = useTranslation();
    const changeLanguage = (event: MouseEvent<HTMLButtonElement>) => {
        i18n.changeLanguage(event.currentTarget.value);
        setLanguage(event.currentTarget.value);
    };
    return language === "ru" ? (
        <button value="eng" onClick={changeLanguage}>
            eng
        </button>
    ) : (
        <button value="ru" onClick={changeLanguage}>
            ru
        </button>
    );
};

export default LanguageSelector;
