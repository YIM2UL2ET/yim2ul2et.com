import React from "react";
import styled from "styled-components";
import RegularText from "../Common/Texts/RegularText";
import ElementTitle from "../Common/Texts/ElementTitle";

const Element = styled.div`
    margin-left: 10px;
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    height: 32px;
    width: 370px;
`;

const Text = styled(RegularText)`
    text-decoration: underline;
    cursor: pointer;
    color: #787878;
    
    &.none {
        cursor: default;
        text-decoration: none;
        &:hover {
            color: #787878;
        }
    }

    &:hover {
        color: #000000;
    }
`;

const Img = styled.img`
    position: relative;
    top: 4px;
    width: 17px;
`

function ContectElement(prop) {
    var type = prop.type;
    const value = prop.value;
    const title = prop.title;
    const text = prop.text;

    function clickEvent() {
        if (type === "copy") {
            try {
                navigator.clipboard.writeText(text);
                alert('복사되었습니다.');
            } catch (error) {
                alert('실패하였습니다.');
            }
        } else if (type === "link") {
            window.open(value);
        }
    }

    return (
        <Element>
            <ElementTitle>{title}</ElementTitle>
            <Text onClick={clickEvent} className={type}>
                {text}
                <Img src={process.env.PUBLIC_URL + `/images/${type}.png`} alt="" />
            </Text>
        </Element>
    )
}

export default ContectElement;