import logo from './logo.svg';
import './App.css';
import WebsitemonitorAdd from '../src/components/websitemonitorAdd';
import React, { useState } from 'react';

import WebsitemonitorStatus from './components/websitemonitorStatus';
import Tablecolumnupdate from './components/tablecolumnupdate';

function App() {
  const [ques, setQues] = useState(0);
  const [screen, setScreen] = useState(1);

  return (
    <div className="App">

<button onClick={() => setQues(2)}>QUESTION 2</button> 
<button onClick={() => {setQues(1);setScreen(1);}
                       }>QUESTION 1</button>


      {ques === 2 && 
      <><WebsitemonitorAdd/>
      <WebsitemonitorStatus/> </>
       } 
    
    {ques === 1 && 
      <Tablecolumnupdate/> 
    }

    </div>
  );
}

export default App;
