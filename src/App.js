import "./styles.css";
import NavigationBar from "./components/navbar";
import CropPlan from "./CropPlan";
import Onion from "./components/onion";


export default function App() {
  return (
    <div className="App">
      <NavigationBar/>
      <Onion />
    </div>
  );
}
