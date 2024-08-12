import { useState,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Body from './body'
import Axios from "axios"
function App() {
  const [data,setData] = useState({})
  const [color, setColor] = useState('#16a085');
  var colors = ['#16a085', '#27ae60', '#2c3e50', '#f39c12', '#e74c3c', '#9b59b6', '#FB6964', '#342224', "#472E32", "#BDBB99", "#77B1A9", "#73A857"];
  const getQoute  = (url) =>{
    var color = colors[Math.floor(Math.random() * colors.length)];
    setColor(color);
    fetch("https://api.quotable.io/random")
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        setData({
          quote: data.content,
          author: data.author,
        });
      })
      .catch((error) => console.error('Error fetching the quote:', error));
}
useEffect(() => {
  document.body.style.backgroundColor = color;
}, [color]);
useEffect(() => {
  getQoute();
}, []);
  return (
    <>
      <Body getQoute={getQoute} color={color} quote={data.quote} author={data.author}/>
      
    </>
  )
}

export default App
