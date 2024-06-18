import React from "react";
import styled from "styled-components";
import MainTitle from "../Common/Texts/MainTitle";
import SubTitle from "../Common/Texts/SubTitle";
import HistoryElement from "./HistoryElement";

const HistoryObj = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 390px;
    height: 680px;
`

const HistoryElBox = styled.div`
    border-top: 1px solid #E8E8E8;
`

function HistoryBox() {
    return (
        <HistoryObj>
            <MainTitle>HISTORY</MainTitle>
            <HistoryElBox>
                <SubTitle>학력</SubTitle>
                <HistoryElement
                    name="PKNU Computer Engeneering"
                    descript="국립부경대학교 컴퓨터인공지능공학부 23학번 (3학기)"
                    period="2023/03/02 ~ 현재"
                />
            </HistoryElBox>
            <HistoryElBox>
                <SubTitle>프로젝트</SubTitle>
                <HistoryElement
                    name="BITs (Busan IT Society)"
                    descript="WAP 23-2학기 정규 프로젝트"
                    period="2023/09/08 ~ 2023/12/01"
                />
                <HistoryElement
                    name="BITs (Busan IT Society)"
                    descript="WAP 24-1학기 정규 프로젝트"
                    period="2024/03/15 ~ 2024/06/07"
                />
            </HistoryElBox>
            <HistoryElBox>
                <SubTitle>기타 활동</SubTitle>
                <HistoryElement
                    name="Why Are Programming?"
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
            </HistoryElBox>
        </HistoryObj>
    )
}

export default HistoryBox;