import React from "react";
import ComponentBox from "../../component/Common/Boxs/ComponentBox";
import ContectBox from "../../component/Contect/ContectBox";
import PCText from "../../component/Common/Boxs/PCText";

export default function Contect() {
    return (
        <ComponentBox>
            <ContectBox />
            <PCText>이곳에서 만나볼 수 있습니다.</PCText>
        </ComponentBox>
    );
}