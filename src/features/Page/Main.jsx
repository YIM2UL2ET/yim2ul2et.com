import React from "react";
import styled from "styled-components";
import MainTitles from "../../component/Main/MainTitles";
const Picture = styled.img`
    box-shadow: 0px 4px 10px 5px rgba(0, 0, 0, 0.25);
    border-radius: 7vw;

    @media screen and (max-width:767px) {
        width: 35vw;
        height: 35vw;
    }
    @media screen and (min-width:768px) {
        width: 25vw;
        height: 25vw;
    }
`

const MainBox = styled.div`
    display: flex;
    align-items: center;
    height: 650px;

    @media screen and (max-width:767px) {
        justify-content: center;
    }
`

const Box = styled.div`
    width: 100%;
    @media screen and (max-width:767px) {
        position: relative;
        height: 70vw;
        display: flex;
        flex-direction: column-reverse;
        justify-content: space-around;
        align-items: center;
    }
    @media screen and (min-width:768px) {
        position: relative;
        height: 600px;
        display: flex;
        justify-content: space-around;
        align-items: center;
    }
`



function Main() {
    return (
        <MainBox>
            <Box>
                <MainTitles />
                <Picture src={process.env.PUBLIC_URL + '/profile.png'} alt="dfs" />
            </Box>
        </MainBox>
    )
}

export default Main;