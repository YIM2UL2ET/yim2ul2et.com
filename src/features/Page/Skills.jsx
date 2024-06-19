import React from "react";
import ComponentBox from "../../component/Common/Boxs/ComponentBox";
import SkillsBox from "../../component/Skills/SkillsBox";
import PCText from "../../component/Common/Boxs/PCText";

export default function Skills() {
    return (
        <ComponentBox>
            <SkillsBox />
            <PCText>그래도 이정도는 쓸 수 있습니다.</PCText>
        </ComponentBox>
    );
}