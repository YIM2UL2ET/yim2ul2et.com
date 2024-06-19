import Profile from "../features/Page/Profile";
import Hello from "../features/Page/Hello";
import History from "../features/Page/History";
import styled from "styled-components";
import Skills from "../features/Page/Skills";
import Contect from "../features/Page/Contect";
import { ScrollToTopOnMount, SectionsContainer, Section } from 'react-fullpage';

const PageBox = styled.div`
    display: flex;
    flex-direction: column;
`

export default function Yim2ul2et() {
    let options = {
        anchors: ['profile', 'hello', 'history', 'skills', 'contect'],
        navigation: false,
    };
    return (
        <div>
            <ScrollToTopOnMount />
            <SectionsContainer {...options}>
                <PageBox>
                    <Section><Profile /></Section>
                    <Section><Hello /></Section>
                    <Section><History /></Section>
                    <Section><Skills /></Section>
                    <Section><Contect /></Section>
                </PageBox>
            </SectionsContainer>
        </div>
    );
}