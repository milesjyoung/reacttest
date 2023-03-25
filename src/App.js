
import './App.css';
import { useState } from 'react';

const API_BASE = 'http://localhost:3005/'

function App() {

  const [currentResponse, setCurrentResponse] = useState(null)

  const makeReqeustToAPI = (route) => {
    return fetch(`${API_BASE}${route}`)
      .then(response => response.json())
      .then(data => {
        console.log(data)
        setCurrentResponse(data)
        
      })
      .catch(err => console.log(err)) 
  }

  return (
    <div className="App">
      <h1>Hello world, I'm a react app...</h1>

      <div className="button-container">
        <button className='btn' onClick={() => {
          makeReqeustToAPI('')
        }}>api home route</button>
        <button className='btn' onClick={() => {
          makeReqeustToAPI('products')
        }}>api products route</button>
        <button className='btn' onClick={() => {
          makeReqeustToAPI('products/3')
        }}>api products specific route</button>
      </div>

      {currentResponse && <div>{Object.keys(currentResponse).map((key, index) =>{ 
        const item = currentResponse[key]
        if(typeof item === 'object') {
          return <h2 key={index}>{`${key}: ${currentResponse[key].value}`}</h2>
        } else {
          return <h2 key={index}>{`${key}: ${currentResponse[key]}`}</h2>
        }
      })}</div>}
      
    </div>
  );
}

export default App;
