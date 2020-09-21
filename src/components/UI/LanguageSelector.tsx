import React, { useState, MouseEvent } from "react";
import { useTranslation } from "react-i18next";

import { styled, media } from "../../Theme";

const LanguageSelector: React.FC<{}> = () => {
    const [language, setLanguage] = useState("ru");
    const { i18n } = useTranslation();
    const changeLanguage = (event: MouseEvent<HTMLButtonElement>) => {
        i18n.changeLanguage(event.currentTarget.value);
        setLanguage(event.currentTarget.value);
    };

    return (
        <Button
            type="button"
            value={language === "ru" ? "eng" : "ru"}
            onClick={changeLanguage}
        >
            {language === "ru" ? "eng" : "ru"}
        </Button>
    );
};

const Button = styled.button`
    ${media.sm} {
        font-size: 0.7em;
    }
    background: transparent;
    border: none;
    color: ${(props) => props.theme.color.lightText};
    font-size: 1em;
    text-shadow: 0 0 0 transparent, 0 0 0 transparent;
    transition: 0.5s ease-in-out;
    &:hover {
        cursor: pointer;
        text-shadow: 0 0 10px #fff, 0 0 50px #fff;
    }
`;

export default LanguageSelector;
