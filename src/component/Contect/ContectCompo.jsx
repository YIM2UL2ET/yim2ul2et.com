import React from "react";
import MainTitle from "../Common/Texts/MainTitle";
import ObjectBox from "../Common/Boxs/ObjectBox";
import jsonData from '../../json/contect.json';
import ContectBox from "./ContectBox";

export default function ContectCompo() {
    const contectData = jsonData;
    const boxData = contectData.members;

    function loadData() {
        return boxData.map((entity) => (
            <ContectBox
                subTitle={entity.subTitle}
                data={entity.data}
            />
        ));
    }

    return (
        <ObjectBox>
            <MainTitle>{contectData.title}</MainTitle>
            {loadData()}
        </ObjectBox>
    );
}