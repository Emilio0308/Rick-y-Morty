import { useEffect, useState } from "react";
import "./App.css";
import Location from "./components/Location";
import ramdonDImension from "./helpers/ramdonDImension";
import AxiosHook from "./hooks/AxiosHook";
import Hero from "./components/Hero";
import axios from "axios";
import GetAllLocation from "./helpers/GetAllLocation";

function App() {
  const [currentValue, setCurrentValue] = useState("");
  const [dimen, setdimen] = useState();
  const [load, setLoad] = useState(true);
  const [newData, setNewData] = useState([])
  let url = `https://rickandmortyapi.com/api/location/${ramdonDImension()}`;
  const { db: location, loading, reFetch } = AxiosHook(url);


  let {data } = GetAllLocation()

  
  const handleChangeInput = (e) => {
    // e.target.value <= 126
       setCurrentValue(e.target.value)
      // : alert("The number of known dimensions is 126.");
      dataFilter(e.target.value)

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
  }, [location]);


  const dataFilter =(value)=>{
    if(!value)setNewData([])
    else{
    setNewData(data.filter( (dimension) => {
      return dimension.name.includes(value)
    }))
    }
  }
  const handleInsertInput = (id)=>{
    setCurrentValue(id)
    setNewData([])
  }

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
          <label htmlFor="inputDimension">Dimension N°: </label>
          <input id="inputDimension" className="inputDimension" placeholder="Search a dimension" type="text" onChange={handleChangeInput} value={currentValue}/>
          <div className="listInputContainer">
            {
              newData?.map((d)=>{
                return <button className="listInput" key={d.id} onClick={()=> handleInsertInput(d.id)}>{d.name}</button>
              })
            }
          </div>
          <button onClick={ChangeDimen}>search</button>
        </form>
        {load ? <div className="load"></div> : <Location location={dimen} />}
      </main>
    </div>
  );
}

export default App;
