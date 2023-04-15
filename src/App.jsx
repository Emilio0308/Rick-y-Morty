import { useEffect, useState } from "react";
import "./App.css";
import Location from "./components/Location";
import ramdonDImension from "./helpers/ramdonDImension";
import AxiosHook from "./hooks/AxiosHook";
import axios from "axios";

function App() {
  const [currentValue, setCurrentValue] = useState("");
  const [dimen, setdimen] = useState();
  let url = `https://rickandmortyapi.com/api/location/${ramdonDImension()}`;
  const { db: location } = AxiosHook(url);
  useEffect(() => {
    location ? setdimen(location) : null;
  }, [location]);

  const handleChangeInput = (e) => {
    e.target.value < 126 ? setCurrentValue(e.target.value) : alert("The number of known dimensions is 126.")
  };
  const ChangeDimen = (e) => {
    e.preventDefault();
    url = `https://rickandmortyapi.com/api/location/${currentValue}`;
    axios
      .get(url)
      .then((res) => {
        setdimen(res.data);
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="App">
      <main>
        <form className="searh">
          <input className="inputDimension" placeholder="Search a dimension" type="text" onChange={handleChangeInput} value={currentValue}/>
          <button onClick={ChangeDimen}>search</button>
        </form>
        <Location location={dimen} />
      </main>
    </div>
  );
}

export default App;
