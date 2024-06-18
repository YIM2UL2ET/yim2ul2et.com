import React from "react";
import styled from "styled-components";
import MainTitles from "../../component/Profile/ProfileTitle";
import ProfileImg from "../../component/Profile/ProfileImg";
import ComponentBox from "../../component/Common/Boxs/ComponentBox";

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

function Profile() {
    return (
        <ComponentBox>
            <Box>
                <MainTitles />
                <ProfileImg />
            </Box>
        </ComponentBox>
    )
}

export default Profile;