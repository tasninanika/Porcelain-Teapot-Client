import { useLoaderData } from "react-router-dom";
import "./App.css";

function App() {
  const teas = useLoaderData();

  return (
    <>
      <h1 className="text-6xl text-purple-600">Porcelain Tea</h1>
    </>
  );
}

export default App;
