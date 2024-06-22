import React from "react";
import ElementBox from "../Common/Boxs/ElementBox";
import SubTitle from "../Common/Texts/SubTitle";
import ContectElement from "./ContectElement";

export default function ContectBox(props) {
    const subTitle = props.subTitle;
    const data = props.data;

    function loadData() {
        return data.map((entity) => (
            <ContectElement
                type={entity.type}
                value={entity.value}
                title={entity.title}
                text={entity.text}
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