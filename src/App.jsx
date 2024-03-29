import "./App.css";
import Card from "./Card";
import data from "./data.json";

function App() {
  return (
    <div className="App py-[3rem] xl:px-[6rem] lg:px-[4rem] md:px-[3rem] sm:px-[2rem] px-[1.5rem]">
      <div className="grid gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1">
        {data.map((item, index) => (
          <div key={index.id} className="flex justify-center">
            <Card key={index} data={item} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
