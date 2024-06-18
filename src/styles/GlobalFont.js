import { createGlobalStyle } from 'styled-components';
import reset from "styled-reset";
import Pretendard_Bold from "../assets/font/Pretendard-Bold.woff";
import Pretendard_Bold2 from "../assets/font/Pretendard-Bold.woff2";
import Pretendard_Medium from "../assets/font/Pretendard-Medium.woff";
import Pretendard_Medium2 from "../assets/font/Pretendard-Medium.woff2";
import Pretendard_Regular from "../assets/font/Pretendard-Regular.woff";
import Pretendard_Regular2 from "../assets/font/Pretendard-Regular.woff2";
import Pretendard_Black from "../assets/font/Pretendard-Black.woff";
import Pretendard_Black2 from "../assets/font/Pretendard-Black.woff2";
import Pretendard_Light from "../assets/font/Pretendard-Light.woff";
import Pretendard_Light2 from "../assets/font/Pretendard-Light.woff2";
import Pretendard_SemiBold from "../assets/font/Pretendard-SemiBold.woff";
import Pretendard_SemiBold2 from "../assets/font/Pretendard-SemiBold.woff2";

const GlobalFont = createGlobalStyle`
  @font-face {
    font-family:'Pretendard';
    font-weight:700;
    font-display:swap;
    src:local('Pretendard Bold'), url(${Pretendard_Bold}) format("woff"),
    url(${Pretendard_Bold2}) format("woff2")
  }
  @font-face {
    font-family:'Pretendard';
    font-weight:500;
    font-display:swap;
    src:local('Pretendard Medium'), url(${Pretendard_Medium}) format("woff"),
    url(${Pretendard_Medium2}) format("woff2")
  }
  @font-face {
    font-family:'Pretendard';
    font-weight:400;
    font-display:swap;
    src:local('Pretendard Regular'), url(${Pretendard_Regular}) format("woff"),
    url(${Pretendard_Regular2}) format("woff2")
  }
    @font-face {
    font-family:'Pretendard';
    font-weight:900;
    font-display:swap;
    src:local('Pretendard Black'), url(${Pretendard_Black}) format("woff"),
    url(${Pretendard_Black2}) format("woff2")
  }
    @font-face {
    font-family:'Pretendard';
    font-weight:300;
    font-display:swap;
    src:local('Pretendard Light'), url(${Pretendard_Light}) format("woff"),
    url(${Pretendard_Light2}) format("woff2")
  }
    @font-face {
    font-family:'Pretendard';
    font-weight:600;
    font-display:swap;
    src:local('Pretendard SemiBold'), url(${Pretendard_SemiBold}) format("woff"),
    url(${Pretendard_SemiBold2}) format("woff2")
  }
  ${reset}
`;

export default GlobalFont;