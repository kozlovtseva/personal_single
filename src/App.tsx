import React, { Suspense } from "react";
import "./i18n";
import styled, { ThemeProvider } from "styled-components";

import { theme } from "./Theme";
import Header from "./components/header/Header";
import About from "./components/about/About";
import SkillsTitle from "./components/skills/SkillsTitle";
import Skills from "./components/skills/Skills";
import Portfolio from "./components/portfolio/Portfolio";
import EducationTitle from "./components/education/EducationTitle";
import Education from "./components/education/Education";
import Certificates from "./components/education/Certificates";

const App: React.FC<{}> = () => {
    return (
        <ThemeProvider theme={theme}>
            <Wrapper className="App">
                <Suspense fallback={null}>
                    <Header />
                    <About />
                    <Section>
                        <SkillsTitle />
                        <Skills />
                    </Section>
                    <Portfolio />
                    <Section>
                        <EducationTitle />
                        <Education />
                        <Certificates />
                    </Section>
                </Suspense>
            </Wrapper>
        </ThemeProvider>
    );
};

const Wrapper = styled.div`
    margin: 0 auto;
    max-width: 1440px;
`;
const Section = styled.section``;

export default App;
