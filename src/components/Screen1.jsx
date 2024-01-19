import React, { useState } from 'react';
import '../styles/Screen1.css'; 
const Screen1 = ({ fetchData, setScreen }) => {
    const [tableName, setTableName] = useState('');
    const [columnName, setColumnName] = useState('');
    const [uniqueColumn, setUniqueColumn] = useState('');

    const handleUpdate = async () => {
        if (!tableName || !columnName || !uniqueColumn) {
            alert('Please fill in all fields');
            return;
        }

        try {
            await fetchData(tableName, columnName, uniqueColumn);
            // setScreen(2);
        } catch (error) {
            // console.error('Error fetching data:', error);
            alert('Error fetching data. Please try again.');
        }
    };

    return (
        <div className="screen1-container">
            <label>
                <input
                    type="text"
                    placeholder="Table Name"
                    value={tableName}
                    onChange={(e) => setTableName(e.target.value)}
                />
            </label>
            <br />
            <label>
                <input
                    type="text"
                    placeholder="Unique column Value"
                    value={uniqueColumn}
                    onChange={(e) => setUniqueColumn(e.target.value)}
                />
            </label>
            <br />
            <label>
                <input
                    type="text"
                    placeholder="Column Name"
                    value={columnName}
                    onChange={(e) => setColumnName(e.target.value)}
                />
            </label>
            <br />
            <button onClick={handleUpdate}>Manual Update</button>
        </div>
    );
};

export default Screen1;
