import loadable from "@loadable/component";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/Home.page";

const homePage = loadable(() => import("./pages/Home.page"));

const App = () => {
  return <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage/>} loader={homePage.load}/>
      <Route path="/:id" element={<h1>디테일 페이지</h1>}/>
      <Route path="/cart" element={<h1>쇼핑카트 페이지</h1>}/>
    </Routes>
  </BrowserRouter>
}

export default App;