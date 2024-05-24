
import { useState } from "react";
import axios from "axios"
import {  useNavigate } from "react-router-dom";

function App() {
  const navigate=useNavigate()
  const [user,setuser]=useState()
  const [pass,setpass]=useState()
  function handleuser(evt){
    setuser(evt.target.value)
  }
  function handlepass(evt){
    setpass(evt.target.value)
  }
  function check(){
    var logindetails=axios.post("http://localhost:5005/login",{"username":user,"password":pass})
    logindetails.then(function(data){
      if(data.data===true){
        console.log(data)
        navigate("/success")}
        else{
          navigate("/fail")
        }
      
    })
  }    
  return (<div>
    <input placeholder="username" name="username" onChange={handleuser}></input>
    <input placeholder="password" name="password" onChange={handlepass}></input>
    <button onClick={check}>Login</button></div>
  )
}
  

export default App;
