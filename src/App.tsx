import { useEffect, useState } from "react";
import Card from "./components/Card";

function App() {
  const [data, setData] = useState<string[]>([]);

  useEffect(() => {
    const letters = "abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz";
    setData(
      letters
        .toUpperCase()
        .split("")
        .sort(() => Math.random() - Math.random())
    );
  }, []);

  return (
    <div className="wrapper">
      <div className="cards-container">
        {data.map((l, i) => (
          <Card letter={l} key={i} />
        ))}
      </div>
    </div>
  );
}

export default App;
