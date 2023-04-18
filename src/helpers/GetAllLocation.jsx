import axios from "axios";
import React, { useEffect, useState } from "react";

const GetAllLocation = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
      for (let i = 1; i <= 7; i++) {
        let url = `https://rickandmortyapi.com/api/location?page=${i}`;
      axios
        .get(url)
        .then((res) => {
            let temp = res.data.results.map( (element) =>{
                let id = element.id
                let name = `${element.name}- Dimension${element.id}`
                return{
                    id,
                    name
                }
            })
            setData((prevData) => [...prevData, ...temp])
        })
        .catch((err) => console.log(err));
    }

    
  }, []);
  return {data}
};

export default GetAllLocation;
