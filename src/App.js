import './App.css';
import Header from "./components/Header";
import { Route, Routes } from "react-router-dom"
import Index from "./pages/Index";
import About from './pages/About';
import Contact from './pages/Contact';
import Events from './pages/Events';
import './styles.scss'
import Background from "./components/Background";
import {useState, useEffect} from 'react'




function App() {
  
  const [ user, setUser ] = useState(null);
const[event, setEvent] = useState(null);
const BASE_URL = 'https://irontemplarback.herokuapp.com/'

const getEvent = async () => {
  const response = await fetch(BASE_URL)
  const data = await response.json();
  setEvent(data)
  console.log(data)
}

useEffect(() => {
  getEvent()
}, [user])

  return (
    <div className="App">
      <Background />
      <Header user={user}/>
        <Routes>
          <Route path ='/' element={<Index />}/>
          <Route path ='/About' element={<About />} />
          <Route path ='/Contact' element={<Contact/>} />
          <Route path ='/Events' element={<Events/>} />
        </Routes>
    </div>
  );
}

export default App;
