import React from "react";
import ComponentBox from "../../component/Common/Boxs/ComponentBox";
import HistoryCompo from "../../component/History/HistoryCompo";
import PCText from "../../component/Common/Boxs/PCText";

export default function History() {
    return (
        <ComponentBox>
            <HistoryCompo />
            <PCText>2년도 안된 자그마한 이력입니다.</PCText>
        </ComponentBox>
    );
}