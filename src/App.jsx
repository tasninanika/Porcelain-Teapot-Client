import { useLoaderData } from "react-router-dom";
import "./App.css";
import TeaCard from "./components/TeaCard";
import { useState } from "react";

function App() {
  const loadedTeas = useLoaderData();
  const [teas, setTeas] = useState(loadedTeas);

  return (
    <>
      <div className="w-11/12 mx-auto my-10 flex flex-col justify-center items-center">
        <h1 className="text-6xl text-purple-600 text-center">
          Our Popular Products
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 px-4 md:px-10 my-10 gap-10">
          {teas.map((tea) => (
            <TeaCard
              key={tea._id}
              tea={tea}
              teas={teas}
              setTeas={setTeas}
            ></TeaCard>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
