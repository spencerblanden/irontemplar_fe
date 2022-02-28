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
import Login from "./pages/Login";
import Register from "./pages/Register";
import Profile from "./pages/Profile";
import AuthService from "./services/auth.service";



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
          <Route path ='/Login' element={<Login/>} />
          <Route path ='/Register' element={<Register/>} />
          <Route path ='/Profile' element={<Profile/>} />
        </Routes>
    </div>
  );
}

export default App;
