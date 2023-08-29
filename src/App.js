import React from "react";
import {useState} from "react";
import Tours from "./component/Tours";

import data from "./data";

const App = () => {
  const[tours,setTours]=useState(data);
  
  function removeTour(id){
      const newTours=tours.filter(tour => tour.id !== id);
          setTours(newTours);
      

  }
  if(tours.length===0){
    return(
      <div className="refresh">
        <h2>No tour left</h2>
        <button className="btn-white" onClick={()=>setTours(data)}>
          refresh
        </button>
        
      </div>
    )
  }

  return(
    <div>
      
      <Tours tours={tours} removeTour={removeTour} ></Tours>

      
    </div>


  )
};

export default App;
