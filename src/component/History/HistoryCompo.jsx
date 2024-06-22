import React from "react";
import MainTitle from "../Common/Texts/MainTitle";
import ObjectBox from "../Common/Boxs/ObjectBox";
import jsonData from '../../json/history.json';
import HistoryBox from "./HistoryBox";

export default function HistoryCompo() {
    const historyData = jsonData;
    const boxData = historyData.members;

    function loadData() {
        return boxData.map((entity) => (
            <HistoryBox
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