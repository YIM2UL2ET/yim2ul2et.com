import React from "react";
import styled from "styled-components";

const Box = styled.div`
    position: relative;
    top: 30%;

    @media screen and (max-width:767px) {
        width: 35vw;
        height: 35vw;
    }
    @media screen and (min-width:768px) {
        width: 25vw;
        height: 25vw;
    }
    transform: translateX(-50%);
    transform: translateY(-50%);

    perspective: 1000px;
`

const Card = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  
  perspective-origin: center;
  transform-style: preserve-3d;

  color: white;
  transition: 0.5s ease-in-out;
  ${Box}:hover & {
        transform: rotateY(180deg);
    }
`

const Images = styled.img`
    width: 100%;
    height: 100%;
    border-radius: 20px;

    display: flex;
    align-items: center;
    justify-content: center;
    
`

const Front = styled(Images)`
    z-index: 2;
    position: absolute;
    backface-visibility: hidden;
`

const Back = styled(Images)`
    z-index: 1;
    transform: rotateY(180deg);
`

export default function ProfileImg() {
    return (
        <Box>
            <Card>
                <Front src={process.env.PUBLIC_URL + '/profile.png'} alt="front" />
                <Back src={process.env.PUBLIC_URL + '/profile2.jpg'} alt="back" />
            </Card>
        </Box>
    );
}