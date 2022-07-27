import React,{useState} from 'react'
import axios from'axios'

import ShowData from './ShowData'
function App(){
    const[city,setCity]=useState("")
    const[data,setData]=useState({
        description:"",
        temp:0,
        temp_min:0,
        temp_max:0,
        humidity:0,
        sunrise:0,
        sunset:0,
        country:0,
    })
    const handleClick=()=>{
        axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=c984bcb51310b48227ac2b00ef1c4d20`).then((response)=>{
           setData({
            description:response.data.weather[0].description,
            temp:response.data.main.temp,
            temp_min:response.data.main.temp_min,
            temp_max:response.data.main.temp_max,
            humidity:response.data.main.humidity,
            sunrise:response.data.sys.sunrise,
            sunset:response.data.sys.sunset,
            country:response.data.sys.country,
           })
        })
    }
    return(
      <>
      <div className='container text-center my-2'>
          <h2 style={{color:"brown"}}>Weather App Using React JS(Axios)</h2>
          <input placeholder="enter the place..." type="text" className='from-control' value={city} onChange={(e) => {
              setCity(e.target.value);
          }} />
          <button className='btn btn-danger mx-2' type='submit' onClick={handleClick}>Search weather</button>

      </div>

      <ShowData text ={data}></ShowData>
  </>
    )
}
export default App;