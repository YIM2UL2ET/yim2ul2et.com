import React from "react";
import styled from "styled-components";
import RegularText from "../Common/Texts/RegularText";

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

export default function ContectValue(prop) {
    const type = prop.type;
    const value = prop.value;
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
        <Text onClick={clickEvent} className={type}>
            {text}
            <Img src={process.env.PUBLIC_URL + `/images/${type}.png`} alt="" />
        </Text>
    );
}