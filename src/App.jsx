import { useEffect, useState } from "react";
import "./App.css";
import Location from "./components/Location";
import ramdonDImension from "./helpers/ramdonDImension";
import AxiosHook from "./hooks/AxiosHook";
import Hero from "./components/Hero";

function App() {
  const [currentValue, setCurrentValue] = useState("");
  const [dimen, setdimen] = useState();
  const [load, setLoad] = useState(true);
  let url = `https://rickandmortyapi.com/api/location/${ramdonDImension()}`;
  const { db: location, loading, reFetch } = AxiosHook(url);

  const handleChangeInput = (e) => {
    e.target.value <= 126
      ? setCurrentValue(e.target.value)
      : alert("The number of known dimensions is 126.");
  };
  const ChangeDimen = (e) => {
    e.preventDefault();
    if (currentValue) {
      url = `https://rickandmortyapi.com/api/location/${currentValue}`;
      reFetch(url);
    }
  };
  useEffect(() => {
    location ? setdimen(location) : null;
    loading ? null : setLoad(false);
    console.log(`render`);
  }, [location]);
  return (
    <div className="App">
      <header>
        <div className="titleContainer">
          <img src="./title.png" alt="" />
        </div>
      </header>
      <main>
        <Hero/>
        <form className="searh">
          <span>Dimension N°: </span><input
            className="inputDimension" placeholder="Search a dimension" type="text" onChange={handleChangeInput} value={currentValue}/>
          {/* <div>
            <ul>
              <li>tierra</li>
              <li>marte</li>
            </ul>
          </div> */}
          <button onClick={ChangeDimen}>search</button>
        </form>
        {load ? <div className="load"></div> : <Location location={dimen} />}
      </main>
    </div>
  );
}

export default App;
