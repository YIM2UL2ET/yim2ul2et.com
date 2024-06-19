import React from "react";
import styled from "styled-components";

const Picture = styled.img`
    box-shadow: 0px 4px 10px 5px rgba(0, 0, 0, 0.25);
    border-radius: 7vw;

    @media screen and (max-width:767px) {
        width: 35vw;
        height: 35vw;
    }
    @media screen and (min-width:768px) {
        width: 25vw;
        height: 25vw;
    }

    transition: 0.5s ease-in-out;
    &:hover {
      transform:scale(1.05);
    }
`

export default function ProfileImg() {
    return (
        <Picture src={process.env.PUBLIC_URL + '/profile.png'} alt="dfs" />
    );
}