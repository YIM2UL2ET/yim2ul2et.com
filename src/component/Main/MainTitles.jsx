import React from "react";
import styled from "styled-components";

const TitleBox = styled.div`
    font-family: Pretendard;
    font-weight: 800;
`

const Title = styled.div`
    @media screen and (max-width:767px) {
        font-size: 12vw;   
    }
    @media screen and (min-width:768px) {
        font-size: 9vw;   
    }
`

const SubTitle = styled.div`
    @media screen and (max-width:767px) {
        text-align:center;
        font-size: 4vw;   
    }
    @media screen and (min-width:768px) {
        position: relative;
        left: 4%;
        font-size: 3vw;
    }
`

function MainTitles() {
    return (
        <TitleBox>
            <Title>YIM2UL2ET</Title>
            <SubTitle>Study Computer Science</SubTitle>
        </TitleBox>
    )
}

export default MainTitles;