import React, { Suspense } from "react";
import "./i18n";
import styled, { ThemeProvider } from "styled-components";

import { theme } from "./Theme";
import Header from "./components/header/Header";
import About from "./components/about/About";
import SkillsTitle from "./components/skills/SkillsTitle";
import Skills from "./components/skills/Skills";

const App: React.FC<{}> = () => {
    return (
        <ThemeProvider theme={theme}>
            <Wrapper className="App">
                <Suspense fallback={null}>
                    <Header />
                    <About />
                    <SkillsTitle />
                    <Skills />
                </Suspense>
            </Wrapper>
        </ThemeProvider>
    );
};

const Wrapper = styled.div`
    margin: 0 auto;
    max-width: 1440px;
`;

export default App;
