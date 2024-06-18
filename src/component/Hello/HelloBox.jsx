import React from "react";
import MainTitle from "../Common/Texts/MainTitle";
import ElementBox from "../Common/Boxs/ElementBox";
import ObjectBox from "../Common/Boxs/ObjectBox";
import RegularText from "../Common/Texts/RegularText";

function HelloBox() {

    return (
        <ObjectBox>
            <MainTitle>HELLO</MainTitle>
            <ElementBox>
                <RegularText>
                    안녕하세요, 개발자를 목표로 하는 임승호입니다.<br />
                    <br />
                    개발을 시작한지 2년도 채 되지 않았지만,<br />
                    장래에 개발자가 되기 위하여 열심히 공부중입니다.<br />
                    <br />
                    현재는 기초를 탄탄히 다지기 위해 학부 또는<br />
                    개인적으로도 컴퓨터과학 지식을 쌓고 있습니다.<br />
                    <br />
                    학교 중앙동아리인 WAP에도 가입하여 여러 프로젝트에<br />
                    참여해보며 개발에 대한 경험 또한 쌓아가는 중입니다.<br />
                    <br />
                    문제해결(Problem Solving)을 매우 좋아하여<br />
                    하루에 적어도 한 문제씩 푸는 과정을 통하여<br />
                    열심히 논리적 사고를 기르기도 합니다.<br />
                    <br />
                    당장 급하게 하기보다는<br />
                    내가 모자란 것을 천천히 채워나가는<br />
                    빈틈없는 개발자가 되기 위해 노력하겠습니다.<br />
                    <br />
                    감사합니다.
                </RegularText>
            </ElementBox>
        </ObjectBox >
    )
}

export default HelloBox;