import React from "react";
import styled from "styled-components";
import ContectElement from "./ContectElement";
import MainTitle from "../Common/Texts/MainTitle";
import SubTitle from "../Common/Texts/SubTitle";
import ElementBox from "../Common/Boxs/ElementBox";

const ContectObj = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 390px;
`


function ContectBox() {
    return (
        <ContectObj>
            <MainTitle>CONTECT</MainTitle>
            <ElementBox>
                <SubTitle>PROGRAMMING</SubTitle>
                <ContectElement
                    type="link"
                    value="https://solved.ac/profile/yim2ul2et"
                    title="Solved.ac"
                    text="yim2ul2et" />
                <ContectElement
                    type="link"
                    value="https://www.acmicpc.net/user/yim2ul2et"
                    title="BAEKJOON"
                    text="yim2ul2et" />
                <ContectElement
                    type="link"
                    value="https://github.com/YIM2UL2ET"
                    title="Github"
                    text="YIM2UL2ET" />
            </ElementBox>
            <ElementBox>
                <SubTitle>SOCIAL</SubTitle>
                <ContectElement
                    type="link"
                    value="https://twitter.com/YIM2UL2ET"
                    title="X(Twitter)"
                    text="@YIM2UL2ET" />
                <ContectElement
                    type="link"
                    value="https://www.instagram.com/ysh041216/"
                    title="Instagram"
                    text="ysh041216" />
                <ContectElement
                    type="link"
                    value="https://www.discord.com/users/431805857689239574"
                    title="Discord"
                    text="yim2ul2et" />
            </ElementBox>
            <ElementBox>
                <SubTitle>GAME</SubTitle>
                <ContectElement
                    type="link"
                    value="https://steamcommunity.com/profiles/76561199013209022"
                    title="Steam"
                    text="YIM2UL2ET" />
                <ContectElement
                    type="none"
                    value=""
                    title="BEMANI Games"
                    text="yimullet" />
            </ElementBox>
            <ElementBox>
                <SubTitle>OTHER</SubTitle>
                <ContectElement
                    type="link"
                    value="https://yim2ul2et.github.io/"
                    title="BLOG"
                    text="yim2ul2et.github.io" />
                <ContectElement
                    type="link"
                    value="https://www.youtube.com/@YIM2UL2ET"
                    title="Youtube"
                    text="YIM2UL2ET" />
                <ContectElement
                    type="copy"
                    value="dlatmdgh1216@naver.com"
                    title="Email"
                    text="dlatmdgh1216@naver.com" />
            </ElementBox>
        </ContectObj>
    )
}

export default ContectBox;