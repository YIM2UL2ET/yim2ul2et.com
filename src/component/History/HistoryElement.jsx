import React from "react";
import styled from "styled-components";
import ElementTitle from "../Common/Texts/ElementTitle";
import MinimalText from "../Common/Texts/MinimalText";

const Box = styled.div`
`


const Element = styled.div`
    margin-left: 10px;
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    height: 52px;
    width: 370px;
`;

function HistoryElement(props) {
    const name = props.name;
    const descript = props.descript;
    const period = props.period;

    return (
        <div>
            <Element>
                <Box>
                    <ElementTitle>{name}</ElementTitle>
                    <MinimalText>{descript}</MinimalText>
                </Box>
                <MinimalText>{period}</MinimalText>
            </Element>
        </div>

    )
}

export default HistoryElement;