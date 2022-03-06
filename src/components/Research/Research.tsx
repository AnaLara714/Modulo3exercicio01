import React, { useEffect, useState } from "react";
import "./Research.css";
import {useDispatch } from 'react-redux';
import {ActionCodes} from '../../_config/redux';
import api from "../../_config/api";


const Input = () => {

  const [input, setInput] = useState("");
  const [term, setTerm] = useState("");
  const [data, setData] = useState([]);
  
  const Search = () => {
    setTerm(input)
  }

  useEffect(()=>{
      
    const fetchData = async () => {

      const response = await api.get(term)
    
      setData(response?.data.hits);

    }

    fetchData();
    
  },[term]);
  
  
  
  return (
    <div>

    <div>
        <label className="subtitulo">Faça sua pesquisa</label><br/>
        <input
          type="text"
          className="input"
          placeholder="Search"
          value={input}
          onChange={(evt) => setInput(evt.target.value)}
          />
        <button 
          type="button"
          className="button"
          onClick={Search}
          >🔍</button>
    </div>

    <div className="list ">
      {data?.map((item:any, index:number) => (
        <div className="item " key={index}>
         <h3>📘 {item.title}</h3>
          <p>👥 {item.author}</p>
          <p>
            <a href={item.url} target="_blank" rel="noreferrer">
              🌐 {item.url}
            </a>
          </p>
        </div>
      ))}
    </div>
    </div>
  );
};

export default Input;
