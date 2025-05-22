import { useLoaderData } from "react-router-dom";
import "./App.css";
import TeaCard from "./components/TeaCard";

function App() {
  const teas = useLoaderData();

  return (
    <>
      <h1 className="text-6xl text-purple-600">Porcelain Tea</h1>
      {teas.map((tea) => (
        <TeaCard key={tea._id} tea={tea}></TeaCard>
      ))}
    </>
  );
}

export default App;
