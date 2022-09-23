import "./App.css";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import HeaderComponent from "./components/HeaderComponent";
import FooterComponent from "./components/FooterComponent";
import ListEmployee from "./pages/ListEmployee";
import AddEmployee from "./pages/AddEmployee";

function App() {
  return (
    <div>
      <HeaderComponent />
      <Router>
        <Routes>
          <Route path="/" element={<ListEmployee />} />
          <Route path="/employees" element={<ListEmployee />} />
          <Route path="/add-employee" element={<AddEmployee />} />
        </Routes>
      </Router>
      <FooterComponent />
    </div>
  );
}

export default App;
