import React, { useState } from 'react';
import Screen1 from './Screen1';
import Screen2 from './Screen2';

const Tablecolumnupdate = () => {

    const [screen, setScreen] = useState(1);
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);

    const fetchData = async (tableName, columnName, uniqueColumn) => {
        setLoading(true);
        try {
            const response = await fetch(`http://localhost:8888/column/fetchData?tableName=${tableName}&columnName=${columnName}&uniqueColumn=${uniqueColumn}`);
            const result = await response.json();
            setData(result);
            if(result){
            setScreen(2);
            }
        } catch (error) {
            console.error('Error fetching data:', error);
        } finally {
            setLoading(false);
        }
    };

    const updateData = async (id, userInput) => {
        try {
            const response = await fetch(`/api/example/updateData/${id}?userInput=${userInput}`, { method: 'PUT' });
            const result = await response.json();
            setData(data.map((item) => (item.id === id ? result : item)));
        } catch (error) {
            console.error('Error updating data:', error);
        }
    };



  return (
    <div>
    {screen === 1 && <Screen1 fetchData={fetchData} />}
    {screen === 2 && <Screen2 data={data} updateData={updateData} />}
    </div>
  )
}

export default Tablecolumnupdate