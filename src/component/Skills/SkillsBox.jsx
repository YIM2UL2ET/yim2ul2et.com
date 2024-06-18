import React from "react";
import styled from "styled-components";
import MainTitle from "../Common/Texts/MainTitle";
import ElementBox from "../Common/Boxs/ElementBox";
import ObjectBox from "../Common/Boxs/ObjectBox";
import SubTitle from "../Common/Texts/SubTitle";

const Img = styled.img`
    margin-left: 10px;
    margin-right: 5px;
    margin-bottom: 10px;
`

function SkillsBox() {
    return (
        <ObjectBox>
            <MainTitle>SKILLS</MainTitle>
            <ElementBox>
                <SubTitle>Main</SubTitle>
                <div>
                    <Img src="https://img.shields.io/badge/c-%2300599C.svg?style=for-the-badge&logo=c&logoColor=white"></Img>
                    <Img src="https://img.shields.io/badge/C++-00599C.svg?style=for-the-badge&logo=c&logoColor=white"></Img>
                </div>
                <div>
                    <Img src="https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white"></Img>
                    <Img src="https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white"></Img>
                </div>
                <div>
                    <Img src="https://img.shields.io/badge/Visual%20Studio%20Code-0078d7.svg?style=for-the-badge&logo=visual-studio-code&logoColor=white"></Img>
                </div>
                <div>
                    <Img src="https://img.shields.io/badge/Visual%20Studio-5C2D91.svg?style=for-the-badge&logo=visual-studio&logoColor=white"></Img>
                </div>
            </ElementBox>
            <ElementBox>
                <SubTitle>Other</SubTitle>
                <div>
                    <Img src="https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white"></Img>
                    <Img src="https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white"></Img>
                </div>
                <div>
                    <Img src="https://img.shields.io/badge/javascript-%23F7DF1E.svg?style=for-the-badge&logo=javascript&logoColor=%23323330"></Img>
                </div>
                <div>
                    <Img src="https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB"></Img>
                    <Img src="https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white"></Img>
                </div>
                <div>
                    <Img src="https://img.shields.io/badge/figma-%23F24E1E.svg?style=for-the-badge&logo=figma&logoColor=white"></Img>
                    <Img src="https://img.shields.io/badge/python-3670A0?style=for-the-badge&logo=python&logoColor=white"></Img>
                </div>
            </ElementBox>
        </ObjectBox >
    )
}

export default SkillsBox;