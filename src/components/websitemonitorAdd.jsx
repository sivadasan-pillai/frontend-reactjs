import React, { useState } from 'react';
import '../styles/websitemonitorAddCss.css';
import axios from 'axios'

const WebsitemonitorAdd = () => {

const [inputvalue, setInputValue] =  useState("");

let addmethod = async(e) =>{
  e.preventDefault();

let value = {
  url :inputvalue
};

let res ;

try{
  res = await axios.post("http://localhost:8888/websitemonitor/add",value,{
    method:"post",
    withCredentials: true,
    headers: {
            "Content-Type": "application/json",
             Accept: "*/*",
            //  Connection: "keep-alive"
            },
  }).then((response)=>{
    alert(response.data.status);
    setInputValue ('');
  })
}  
 catch (error)
{
  console.log({error});
  alert(error);
  setInputValue ('');


}
}

  return (
    <div >

<input  className='inputbox' value={inputvalue}  onChange={(e)=>setInputValue(e.target.value)} placeholder='Enter the website here to be monitored'/>
<br/>
<button className='addButton' disabled={!inputvalue}  onClick={addmethod}>ADD</button>
    </div>
  )
}

export default WebsitemonitorAdd