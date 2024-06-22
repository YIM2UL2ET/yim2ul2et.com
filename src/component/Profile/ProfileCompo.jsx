import React from "react";
import styled from "styled-components";
import ProfileTitle from "./ProfileTitle";
import ProfileImg from "./ProfileImg";

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

export default function ProfileCompo() {
    return (
        <Box>
            <ProfileTitle />
            <ProfileImg />
        </Box>
    );
}