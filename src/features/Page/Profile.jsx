import React from "react";
import styled from "styled-components";
import ComponentBox from "../../component/Common/Boxs/ComponentBox";
import ProfileBox from "../../component/Profile/ProfileBox";

const Box = styled.div`
    width: 100%;
    @media screen and (max-width:767px) {
        position: relative;
        height: 70vw;
        display: flex;
        flex-direction: column-reverse;
        justify-content: space-around;
        align-items: center;
    }
    @media screen and (min-width:768px) {
        position: relative;
        height: 600px;
        display: flex;
        justify-content: space-around;
        align-items: center;
    }
`

export default function Profile() {
    return (
        <ComponentBox>
            <ProfileBox />
        </ComponentBox>
    );
}