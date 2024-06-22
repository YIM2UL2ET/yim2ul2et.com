import React from "react";
import MainTitle from "../Common/Texts/MainTitle";
import ObjectBox from "../Common/Boxs/ObjectBox";
import jsonData from '../../history.json';
import HistoryElementBox from "./HistoryElementBox";

export default function HistoryBox() {
    const historyData = jsonData;
    const boxData = historyData.members;

    function loadData() {
        return boxData.map((entity) => (
            <HistoryElementBox
                subTitle={entity.subTitle}
                data={entity.data}
            />
        ));
    }

    return (
        <ObjectBox>
            <MainTitle>{historyData.title}</MainTitle>
            {loadData()}
        </ObjectBox>
    );
}