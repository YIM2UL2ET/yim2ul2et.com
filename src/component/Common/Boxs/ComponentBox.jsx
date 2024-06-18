import styled from "styled-components"

const ComponentBox = styled.div`
    display: flex;
    align-items: center;
    height: 800px;

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