import React from "react"
import { FaQuoteLeft } from "react-icons/fa6";
import Last from "./lastpart"
const Body = ({getQoute,color,quote,author}) => {
    return(
        <div className="qoute" >
           <div className="qoute-space"><FaQuoteLeft  className="icon"/><span className="real-qoute" style={{ 
          color: color, 
          border: 'none',  
          cursor: 'pointer',
          transition: 'color 3s ease'
        }}>{quote}</span></div>
           <div className="speaker" style={{ 
          color: color, 
          border: 'none',  
          cursor: 'pointer',
          transition: 'color 3s ease'
        }}>-{author}</div>
            <Last getQoute={getQoute}/>
            
        </div>
    );
}
export default Body