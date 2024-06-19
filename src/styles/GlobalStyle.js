import reset from "styled-reset";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`    
  ${reset}   
  #root {
    font-family : "nanum"
  }
  ::-webkit-scrollbar {
        width: 10px;  
    }

    ::-webkit-scrollbar-thumb {
        background: #556270; /* 스크롤바 색상 */
        border-radius: 10px; /* 스크롤바 둥근 테두리 */
    }

    ::-webkit-scrollbar-track {
        background: #e8e8e8;  /*스크롤바 뒷 배경 색상*/
    }
`;

export default GlobalStyle;