import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Graph from "./components/BarChart";
import FormData from "./components/FormData";
import LineChart from "./components/LineChart";
import BarChart from "./components/BarChart";
import DoughnutChart from "./components/DoughnutChart";
function App() {
  return (
    <Router>
      <FormData />
      <Routes>
        <Route exact path="/linechart" element={<LineChart />}></Route>
        <Route exact path="/barchart" element={<BarChart />}></Route>

        <Route exact path="/doughnutchart" element={<DoughnutChart />}></Route>
        <Route exact path="/graph" element={<Graph />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
