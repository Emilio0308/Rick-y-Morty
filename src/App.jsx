import { useEffect, useState } from "react";
import "./App.css";
import Location from "./components/Location";
import ramdonDImension from "./helpers/ramdonDImension";
import AxiosHook from "./hooks/AxiosHook";


function App() {
  const [currentValue, setCurrentValue] = useState("");
  const [dimen, setdimen] = useState();
  const [load, setLoad] = useState(true)
  let url = `https://rickandmortyapi.com/api/location/${ramdonDImension()}`;
  const { db: location , loading , reFetch} = AxiosHook(url);
  useEffect(() => {
    location ? setdimen(location) : null;
    loading ? null : setLoad(false)
  }, [location]);

  const handleChangeInput = (e) => {
    e.target.value < 126 ? setCurrentValue(e.target.value) : alert("The number of known dimensions is 126.")
  };
  const ChangeDimen = (e) => {
    e.preventDefault();
    if (currentValue){
    url = `https://rickandmortyapi.com/api/location/${currentValue}`;
    reFetch(url)}
  };
  return (
    <div className="App">
      <main>
        <form className="searh">
          <input className="inputDimension" placeholder="Search a dimension" type="text" onChange={handleChangeInput} value={currentValue}/>
          <button onClick={ChangeDimen}>search</button>
        </form>
        {
          load ? <div className="load"></div> : <Location location={dimen} />
        }
      </main>
    </div>
  );
}

export default App;
