import React from "react";
import ComponentBox from "../../component/Common/Boxs/ComponentBox";
import HistoryBox from "../../component/History/HistoryBox";
import PCText from "../../component/Common/Boxs/PCText";

function History() {
    return (
        <ComponentBox>
            <HistoryBox />
            <PCText>2년도 안된 자그마한 이력입니다.</PCText>
        </ComponentBox>
    )
}

export default History;