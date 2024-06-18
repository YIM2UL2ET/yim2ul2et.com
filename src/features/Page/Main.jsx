import React from "react";
import styled from "styled-components";

const Picture = styled.img`
width: 25vw;
height: 25vw;

background: url(KakaoTalk_20240617_230419620.jpg);
box-shadow: 0px 4px 10px 5px rgba(0, 0, 0, 0.25);
border-radius: 7vw;
`

const MainBox = styled.div`
    height: 600px;
    display: flex;
    justify-content: space-around;
    align-items: center;
`

const TitleBox = styled.div`
    font-family: Pretendard;
    font-weight: 800;
`

const Title = styled.div`
    font-size: 9vw;
`

const SubTitle = styled.div`
    position: relative;
    left: 4%;
    font-size: 3vw;

`

function Main() {
    return (
        <MainBox>
            <TitleBox>
                <Title>YIM2UL2ET</Title>
                <SubTitle>Study Computer Science</SubTitle>
            </TitleBox>
            <Picture src={process.env.PUBLIC_URL + '/profile.png'} alt="dfs" />
        </MainBox>
    )
}

export default Main;