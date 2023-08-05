import "./styles.css";
import PhotoEditor from "./components/PhotoEditor.js";

export default function App() {
  return (
    <div className="App">
      <PhotoEditor name="Coffee" type="Beverage" />
    </div>
  );
}
