import React, { Suspense } from "react";
import "./i18n";
import styled, { ThemeProvider } from "styled-components";

import { theme } from "./Theme";
import Header from "./components/header/Header";
import About from "./components/about/About";

const App: React.FC<{}> = () => {
    return (
        <ThemeProvider theme={theme}>
            <Wrapper className="App">
                <Suspense fallback={null}>
                    <Header />
                    <About />
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
