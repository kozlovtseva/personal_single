import React, { Suspense } from "react";
import "./i18n";
import Header from "./components/header/Header";

const App: React.FC<{}> = () => {
    return (
        <div className="App">
            <Suspense fallback={null}>
                <Header />
            </Suspense>
        </div>
    );
};

export default App;
