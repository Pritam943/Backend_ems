import "./App.css";
import EmployeeComponent from "./Components/EmployeeComponent";
import FotterComponent from "./Components/FotterComponent";
import HeaderComponent from "./Components/HeaderComponent";
import ListEmployeecomponent from "./Components/ListEmployeecomponent";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <HeaderComponent />
        <Routes>
          {/* //localhost:3000 */}
          <Route path="/" element={<ListEmployeecomponent />}></Route>
          {/* //localhost:3000/employees */}
          <Route path="/employees" element={<ListEmployeecomponent />}></Route>
          {/* //localhost:3000/add-employee */}
          <Route path="/add-employee" element={<EmployeeComponent />}></Route>
          {/* //localhost:3000/edit-employee/1 */}
          <Route
            path="/edit-employee/:id"
            element={<EmployeeComponent />}
          ></Route>
        </Routes>
        <FotterComponent />
      </BrowserRouter>
    </>
  );
}

export default App;
