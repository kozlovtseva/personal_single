import React from "react";

import { styled } from "../../Theme";
import BubbleSkills from "./BubbleSkills.jsx";

const Skills: React.FC<{}> = () => {
    return (
        <Section>
            <BubbleSkills />
        </Section>
    );
};

const Section = styled.section``;

export default Skills;
