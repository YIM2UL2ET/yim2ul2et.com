import styled from "styled-components"

const PCText = styled.div`
    @media screen and (max-width:768px) {
        display: none;
    }
    @media screen and (min-width:769px) {
        width: calc(96% - 370px);
        font-family: Pretendard;
        text-align: center;
        font-weight: 800;
        font-size: 3.8vw;
    }
`

export default PCText;