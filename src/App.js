import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyle from "./styles/GlobalStyle";
import GlobalFont from "./styles/GlobalFont";
import Yim2ul2et from "./page/Yim2ul2et";
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <GlobalFont />
      <Routes>
        <Route path="/" element={<Yim2ul2et />} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;