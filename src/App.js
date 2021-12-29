import { Routes, Route, Navigate } from "react-router-dom";
import Detailpage from "./components/Detailpage";
import List from "./components/List";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="*" element={<Navigate to="/pokemon" />} />
        <Route path="/pokemon" element={<List />} />
        <Route path="/pokemon/:name" element={<Detailpage />} />
      </Routes>
    </div>
  );
}

export default App;
