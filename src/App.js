import { Button } from '@mui/material';
import { useState } from 'react';
import './App.css';

function App() {

 const [dd,setDD]= useState(0);
 const [mm,setMM]= useState(0);
 const [cc,setCC]= useState(0);
 const [yy,setYY]= useState(0);


 const [dd1,setDD1]= useState(0);
 const [mm1,setMM1]= useState(0);
 const [cc1,setCC1]= useState(0);
 const [yy1,setYY1]= useState(0);

 const [dd2,setDD2]= useState(0);
 const [mm2,setMM2]= useState(0);
 const [cc2,setCC2]= useState(0);
 const [yy2,setYY2]= useState(0);

 const [dd3,setDD3]= useState(0);
 const [mm3,setMM3]= useState(0);
 const [cc3,setCC3]= useState(0);
 const [yy3,setYY3]= useState(0);


const handleCalculation = ()=>{
    
  setDD1(parseInt(yy)+1);
  setMM1(cc-1);
  setCC1(mm-3);
  setYY1(parseInt(dd)+3);

  setDD2(mm-2);
  setMM2(parseInt(dd)+2);
  setCC2(parseInt(yy)+2);
  setYY2(cc-2);

  setDD3(parseInt(cc)+1);
  setMM3(yy-1);
  setCC3(parseInt(dd)+1);
  setYY3(mm-1);
 }

return(
<div>
<input type="number" placeholder='DD' name='dd' minLength={2} value={dd} 
onChange={e=>setDD(e.target.value)}
></input>
<input type="number" placeholder='MM' name='mm' value={mm} onChange={e=>setMM(e.target.value)}
></input>
<input type="number" placeholder='CC' name='cc' value={cc} onChange={e=>setCC(e.target.value)}
></input>
<input type="number" placeholder='YY' name='yy' value={yy} onChange={e=>setYY(e.target.value)}
></input>



<Button onClick={handleCalculation}>Calculate</Button>

<div className='displayData'>
  <div>
  <h5>{dd}</h5>
  <h5>{mm}</h5>
  <h5>{cc}</h5>
  <h5>{yy}</h5>

  </div>

  <div>
  <h5>{dd1}</h5>
  <h5>{mm1}</h5>
  <h5>{cc1}</h5>
  <h5>{yy1}</h5>

  </div>

  <div>
  <h5>{dd2}</h5>
  <h5>{mm2}</h5>
  <h5>{cc2}</h5>
  <h5>{yy2}</h5>

  </div>

  <div>
  <h5>{dd3}</h5>
  <h5>{mm3}</h5>
  <h5>{cc3}</h5>
  <h5>{yy3}</h5>

  </div>
</div>

</div>)
   
}

export default App;
