import React from "react";
import ComponentBox from "../../component/Common/Boxs/ComponentBox";
import ContectCompo from "../../component/Contect/ContectCompo";
import PCText from "../../component/Common/Boxs/PCText";

export default function Contect() {
    return (
        <ComponentBox>
            <ContectCompo />
            <PCText>이곳에서 만나볼 수 있습니다.</PCText>
        </ComponentBox>
    );
}