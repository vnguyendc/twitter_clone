import React, {useEffect, useState} from 'react';
import './App.css';
import Tweet from './Tweet'
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {

  const [data, setData] = useState([])

  const fetchData = async() => {
    try{
      const response = await axios.get('https://coursera-twitter-api.herokuapp.com/tweets')
      setData(response.data)
    }
    catch(err){
      console.error(err)
    }
  }

  useEffect(() => {
    console.log("here")
    fetchData()
  })

  return (
    // for ever element in data received from API, return a Tweet component
    <div style={{background: '#111111', padding:'30px'}}>

      {data.map(tweet => <Tweet{...tweet} />)}

    </div>
  )
}

export default App;
