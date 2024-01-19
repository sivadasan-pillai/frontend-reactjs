import React, { useState } from 'react';
import '../styles/Screen2.css'; 
import axios from 'axios';
const Screen2 = ({ data, updateData }) => {
    const [userInput, setUserInput] = useState('');

    const handleUpdate = (id,tableName,columnName,distinctValue, userInput) => {

  let value = {
    'tableName' : tableName,
    'columnName' : columnName,
    'uniqueColumn':distinctValue,
    'updateValue':userInput
  }
        try{
        let res = axios.post("http://localhost:8888/column/updateData",value,{
            method:"post",
            withCredentials: true,
            headers: {
                    "Content-Type": "application/json",
                     Accept: "*/*",
                    },
          }).then((response)=>{
            alert(response.data.msgout);
            window.location.reload();
          }
          )
        }catch(error){
            alert(error);
        };
        
   console.log(id,tableName,columnName,distinctValue, userInput);

    };

    return (
        <div className="screen2-container">
            {data.length === 0 ? (
                <p>No data available for given input criteria.<br/>
                   Kindly try with valid Data</p>
            ) : (
                <div>
                <table className="bordered-table">
                    <thead>
                        <tr>
                            <th style={{ backgroundColor: 'yellow' }}>Table Name</th>
                            <th style={{ backgroundColor: 'yellow' }}>Column Name</th>
                            <th style={{ backgroundColor: 'rgb(102, 249, 102)' }}>Distinct Values</th>
                            <th style={{ backgroundColor: 'rgb(246, 163, 140)' }}>User Input</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((item) => (
                            <tr key={item.id}>
                                <td>{item.tableName}</td>
                                <td>{item.columnName}</td>
                                <td>{item.uniqueColumn}</td>
                                <td>
                                    <input
                                        type="text"
                                        value={userInput}
                                        onChange={(e) => setUserInput(e.target.value)}
                                    />
                                    
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <button onClick={() => handleUpdate(data[0].id, data[0].tableName, data[0].columnName, data[0].uniqueColumn,userInput )}>Update</button>
                </div>
            )}
        </div>
    );
};

export default Screen2;
