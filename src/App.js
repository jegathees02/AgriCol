import "./styles.css";
import NavigationBar from "./components/navbar";
import CropPlan from "./CropPlan";
import Onion from "./components/onion";
// import Weather from "./components/pages/weather";
import Dashboard from "./components/dashboard";

import Weather from "./components/weather";

export default function App() {
  return (
    <div className="App">
      {/* <NavigationBar/> */}
      {/* <Weather/> */}
      <Dashboard/>
      {/* <Onion /> */}
    </div>
  );
}
