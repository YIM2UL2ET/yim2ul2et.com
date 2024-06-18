import React from "react";
import styled from "styled-components";
import MainTitle from "../Common/Texts/MainTitle";
import SubTitle from "../Common/Texts/SubTitle";
import HistoryElement from "./HistoryElement";
import ElementBox from "../Common/Boxs/ElementBox";
import ObjectBox from "../Common/Boxs/ObjectBox";

function HistoryBox() {
    return (
        <ObjectBox>
            <MainTitle>HISTORY</MainTitle>
            <ElementBox>
                <SubTitle>학력</SubTitle>
                <HistoryElement
                    name="PKNU Computer Engeneering"
                    descript="국립부경대학교 컴퓨터인공지능공학부 23학번 (3학기)"
                    period="2023/03/02 ~ 현재"
                />
            </ElementBox>
            <ElementBox>
                <SubTitle>프로젝트</SubTitle>
                <HistoryElement
                    name="시페니시아의 진주"
                    descript="WAP 23-2학기 정규 프로젝트"
                    period="2023/09/08 ~ 2023/12/01"
                />
                <HistoryElement
                    name="WealthWise"
                    descript="WAP 24-1학기 정규 프로젝트"
                    period="2024/03/15 ~ 2024/06/07"
                />
            </ElementBox>
            <ElementBox>
                <SubTitle>기타 활동</SubTitle>
                <HistoryElement
                    name="WAP (Why Are Programming?)"
                    descript="PKNU 중앙동아리"
                    period="2023/09/01 ~ 현재"
                />
                <HistoryElement
                    name="BITs (Busan IT Society)"
                    descript="부산권 대학교 프로그래밍 연합동아리"
                    period="2024/02/03 ~ 현재"
                />
                <HistoryElement
                    name="AlgoLeadMe"
                    descript="알고리즘 스터디 (7팀)"
                    period="2024/02/12 ~ 2024/05/11"
                />
            </ElementBox>
        </ObjectBox>
    )
}

export default HistoryBox;