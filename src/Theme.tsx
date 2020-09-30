import baseStyled, { ThemedStyledInterface } from "styled-components";

const customMediaQuery = (maxWidth: number) =>
    `@media (max-width: ${maxWidth}px)`;

export const media = {
    xs: customMediaQuery(480),
    sm: customMediaQuery(576),
    md: customMediaQuery(768),
    lg: customMediaQuery(992),
    xl: customMediaQuery(1200),
    xxl: customMediaQuery(1600),
};

export const theme = {
    color: {
        primary: "#9BE9E9",
        primaryActive: "#2CDFDF",
        lightText: "#fff",
        lightDarkText: "#777",
        darkText: "#000",
    },
};

export type Theme = typeof theme;
export const styled = baseStyled as ThemedStyledInterface<Theme>;
