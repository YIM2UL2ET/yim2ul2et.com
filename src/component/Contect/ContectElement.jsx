import React from "react";
import styled from "styled-components";
import ElementTitle from "../Common/Texts/ElementTitle";
import ContectValue from "./ContectValue";

const Element = styled.div`
    display: flex;
    justify-content: space-between;

    margin-left: 10px;
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    height: 32px;
    width: 370px;
`;

function ContectElement(prop) {
    const type = prop.type;
    const value = prop.value;
    const title = prop.title;
    const text = prop.text;

    return (
        <Element>
            <ElementTitle>{title}</ElementTitle>
            <ContectValue value={value} type={type} text={text} />
        </Element>
    )
}

export default ContectElement;