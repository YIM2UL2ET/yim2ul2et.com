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
      background: #556270;
      border-radius: 10px;
  }

  ::-webkit-scrollbar-track {
      background: #e8e8e8;
  }
`;

export default GlobalStyle;