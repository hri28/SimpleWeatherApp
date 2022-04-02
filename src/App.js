import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import Form from './Components/Form/Form'
import Information from './Components/Information/Information'
import axios from 'axios'
import React,{useState} from 'react'


function App() {
  const [state,setState] = useState({});
  const getDataFromServer = (city) =>{
    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=3c7380ed6c3148b63430aa57873504fd`).then((res) => {
      console.log(res.data)
      setState(res.data)
    },()=>{
      alert("Data not available")
    })
  }
  return (
    <div className="App">
     <h1 className='text-white mt-5'>Weather App</h1>
     <Form getDataFromServer={getDataFromServer} />
     {Object.keys(state).length===0? <div className='text-white mt-5'>Check your city's weather</div>:<Information info={state} />}
    </div>
  );
}

export default App;
