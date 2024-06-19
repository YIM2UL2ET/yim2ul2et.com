import React from "react";
import HelloBox from "../../component/Hello/HelloBox";
import ComponentBox from "../../component/Common/Boxs/ComponentBox";
import PCText from "../../component/Common/Boxs/PCText";

export default function Hello() {
    return (
        <ComponentBox>
            <HelloBox />
            <PCText>제 이름은 임승호라고 합니다.</PCText>
        </ComponentBox>
    );
}