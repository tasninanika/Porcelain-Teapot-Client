import { useLoaderData } from "react-router-dom";
import "./App.css";
import TeaCard from "./components/TeaCard";

function App() {
  const teas = useLoaderData();

  return (
    <>
      <h1 className="text-6xl text-purple-600">Porcelain Tea</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-4 md:px-10 my-10">
        {teas.map((tea) => (
          <TeaCard key={tea._id} tea={tea}></TeaCard>
        ))}
      </div>
    </>
  );
}

export default App;
