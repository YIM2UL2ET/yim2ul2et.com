import React, { useEffect } from "react";
import Profile from "../features/Page/Profile";
import Hello from "../features/Page/Hello";
import History from "../features/Page/History";
import Skills from "../features/Page/Skills";
import Contect from "../features/Page/Contect";
import { useState } from 'react';
import { FullpageContainer, FullpageSection } from '@shinyongjun/react-fullpage';
import '@shinyongjun/react-fullpage/css';

export default function Yim2ul2et() {

    const [activeIndex, setActiveIndex] = useState(5);
    const [speed, setSpeed] = useState(0);
    console.log(activeIndex);

    useEffect(() => {
        setTimeout(() => { setSpeed(1000); }, 80);
    }, [])

    useEffect(() => {
        if (activeIndex === 0) {
            setTimeout(() => { setActiveIndex(5); setSpeed(0); }, 1000);
            setTimeout(() => { setSpeed(1000); }, 1080);
        }
        if (activeIndex === 6) {
            setTimeout(() => { setActiveIndex(1); setSpeed(0); }, 1000);
            setTimeout(() => { setSpeed(1000); }, 1080);
        }
    }, [activeIndex])

    return (
        <FullpageContainer
            activeIndex={activeIndex}
            setActiveIndex={setActiveIndex}
            transitionDuration={speed}
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
            <FullpageSection>
                <Profile />
            </FullpageSection>
            <FullpageSection>
                <Hello />
            </FullpageSection>
        </FullpageContainer>
    );
}