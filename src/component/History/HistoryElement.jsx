import React from "react";
import styled from "styled-components";
import ElementTitle from "../Common/Texts/ElementTitle";
import MinimalText from "../Common/Texts/MinimalText";

const Element = styled.div`
    margin-left: 10px;
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    height: 50px;
    width: 340px;
`;

export default function HistoryElement(props) {
    const name = props.name;
    const descript = props.descript;
    const period = props.period;

    return (
        <Element>
            <div>
                <ElementTitle>{name}</ElementTitle>
                <MinimalText>{descript}</MinimalText>
            </div>
            <MinimalText>{period}</MinimalText>
        </Element>
    );
}