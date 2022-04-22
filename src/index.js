import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import IdentityForm from './components/IdentityForm';
import ContactForm from './components/ContactForm';
import BankForm from './components/BankForm';
const root = ReactDOM.createRoot(document.getElementById('root'));


let form = {

  identity:{
    firstName:"",
    lastName:"",
    businessName:"",
    address:"",
    city:"",
    state:"",
    zip:""
  }
}

export default form
root.render(
  <BrowserRouter>

  <Routes>

<Route path='/' element={<App/>}>
<Route path='contact' element={<ContactForm/>}/>
<Route path='identity' element={<IdentityForm/>}/>
<Route path='bank' element={<BankForm/>}/>


</Route>

  </Routes>
  
   </BrowserRouter>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
