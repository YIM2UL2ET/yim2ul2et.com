import React from "react";
import ElementBox from "../Common/Boxs/ElementBox";
import HistoryElement from "./HistoryElement";
import SubTitle from "../Common/Texts/SubTitle";

export default function HistoryBox(props) {
    const subTitle = props.subTitle;
    const data = props.data;

    function loadData() {
        return data.map((entity) => (
            <HistoryElement
                name={entity.name}
                descript={entity.descript}
                period={entity.period}
            />
        ));
    }

    return (
        <ElementBox>
            <SubTitle>{subTitle}</SubTitle>
            {loadData()}
        </ElementBox>
    );
}