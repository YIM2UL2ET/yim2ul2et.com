import React from "react";
import styled from "styled-components";
import ContectComp from "./ContectElement";
import MainTitle from "../Common/Texts/MainTitle";
import SubTitle from "../Common/Texts/SubTitle";

const ContectObj = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 390px;
    height: 680px;
`

const ContectEl = styled.div`
    border-top: 1px solid #E8E8E8;
`

function ContectBox() {
    return (
        <ContectObj>
            <MainTitle>CONTECT</MainTitle>
            <ContectEl>
                <SubTitle>PROGRAMMING</SubTitle>
                <ContectComp
                    type="link"
                    value="https://solved.ac/profile/yim2ul2et"
                    title="Solved.ac"
                    text="yim2ul2et" />
                <ContectComp
                    type="link"
                    value="https://www.acmicpc.net/user/yim2ul2et"
                    title="BAEKJOON"
                    text="yim2ul2et" />
                <ContectComp
                    type="link"
                    value="https://github.com/YIM2UL2ET"
                    title="Github"
                    text="YIM2UL2ET" />
            </ContectEl>
            <ContectEl>
                <SubTitle>SOCIAL</SubTitle>
                <ContectComp
                    type="link"
                    value="https://twitter.com/YIM2UL2ET"
                    title="X(Twitter)"
                    text="@YIM2UL2ET" />
                <ContectComp
                    type="link"
                    value="https://www.instagram.com/ysh041216/"
                    title="Instagram"
                    text="ysh041216" />
                <ContectComp
                    type="link"
                    value="https://www.discord.com/users/431805857689239574"
                    title="Discord"
                    text="yim2ul2et" />
            </ContectEl>
            <ContectEl>
                <SubTitle>GAME</SubTitle>
                <ContectComp
                    type="link"
                    value="https://steamcommunity.com/profiles/76561199013209022"
                    title="Steam"
                    text="YIM2UL2ET" />
                <ContectComp
                    type="none"
                    value=""
                    title="BEMANI Games"
                    text="yimullet" />
            </ContectEl>
            <ContectEl>
                <SubTitle>OTHER</SubTitle>
                <ContectComp
                    type="link"
                    value="https://yim2ul2et.github.io/"
                    title="BLOG"
                    text="yim2ul2et.github.io" />
                <ContectComp
                    type="link"
                    value="https://www.youtube.com/@YIM2UL2ET"
                    title="Youtube"
                    text="YIM2UL2ET" />
                <ContectComp
                    type="copy"
                    value="dlatmdgh1216@naver.com"
                    title="Email"
                    text="dlatmdgh1216@naver.com" />
            </ContectEl>
        </ContectObj>
    )
}

export default ContectBox;