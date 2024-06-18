import React from "react";
import Main from "../features/Page/Main";
import Hello from "../features/Page/Hello";
import History from "../features/Page/History";
import styled from "styled-components";
import Skills from "../features/Page/Skills";
import Contect from "../features/Page/Contect";

const PageBox = styled.div`
    display: flex;
    flex-direction: column;
`

function Yim2ul2et() {
    return (
        <PageBox>
            <Main />
            <Hello />
            <History />
            <Skills />
            <Contect />
        </PageBox>
    );
}

export default Yim2ul2et;