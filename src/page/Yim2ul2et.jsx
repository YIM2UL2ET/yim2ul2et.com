import React from "react";
import Profile from "../features/Page/Profile";
import Hello from "../features/Page/Hello";
import History from "../features/Page/History";
import Skills from "../features/Page/Skills";
import Contect from "../features/Page/Contect";
import { useState } from 'react';
import { FullpageContainer, FullpageSection } from '@shinyongjun/react-fullpage';
import '@shinyongjun/react-fullpage/css';

export default function Yim2ul2et() {

    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <FullpageContainer
            activeIndex={activeIndex}
            setActiveIndex={setActiveIndex}
        >
            <FullpageSection>
                <Profile />
            </FullpageSection>
            <FullpageSection>
                <Hello />
            </FullpageSection>
            <FullpageSection>
                <History />
            </FullpageSection>
            <FullpageSection>
                <Skills />
            </FullpageSection>
            <FullpageSection>
                <Contect />
            </FullpageSection>
        </FullpageContainer>
    );
}