import styled from "styled-components"

const ComponentBox = styled.div`
    display: flex;
    align-items: center;

    @media screen and (max-height:630px) {
        height : 630px;
    }
    @media screen and (min-height:631px) {
        height: 100vh;
    }

    @media screen and (max-width:767px) {
        justify-content: center;
    }
    @media screen and (min-width:768px) {
        margin-left: 2%;
        margin-right: 2%;
        justify-content: space-between;
    }
`

export default ComponentBox;