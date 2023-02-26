import {BrowserRouter, Routes,Route} from "react-router-dom";
import Dash from "./Components/Dash.jsx";
import Search from "./Components/Search.jsx";

function App() {
  return (
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Routes>
          <Route path="/">
              <Route index element={<Dash />} />
              <Route path="/2" element = {<Search/>} />
          </Route>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
