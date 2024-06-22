import React from "react";
import MainTitle from "../Common/Texts/MainTitle";
import ObjectBox from "../Common/Boxs/ObjectBox";
import HelloIntroduce from "./HelloIntroduce";

export default function HelloCompo() {
    return (
        <ObjectBox>
            <MainTitle>HELLO</MainTitle>
            <HelloIntroduce />
        </ObjectBox >
    );
}