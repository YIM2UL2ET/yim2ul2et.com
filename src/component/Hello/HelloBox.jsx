import React from "react";
import MainTitle from "../Common/Texts/MainTitle";
import ObjectBox from "../Common/Boxs/ObjectBox";
import HelloIntroduce from "./HelloIntroduce";

function HelloBox() {
    return (
        <ObjectBox>
            <MainTitle>HELLO</MainTitle>
            <HelloIntroduce />
        </ObjectBox >
    )
}

export default HelloBox;