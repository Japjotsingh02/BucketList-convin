import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CardContainer from './pages/CardContainer/CardContainer';
import NavBar from './components/NavBar/NavBar';
import History from './pages/History/History';
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [cardData,setCardData]=useState(null);

  useEffect(()=>{
      axios.get("https://test-api-augx.onrender.com/cards").then((res)=>{
          const data=res.data;
          setCardData(data);
      })
      .catch((err)=>{
          console.log(err);
      });
  },[]);

  return (
    <>
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route exact path='/' element={<CardContainer cardData={cardData} setCardData={setCardData}/>}></Route>
          <Route exact path='/history' element={<History data={cardData}/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
