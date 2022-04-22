import './App.css';
import Banner from './components/Banner';
import Form from './components/Form';
import { useNavigate, Outlet, Routes, Route, Link} from 'react-router-dom';
import ContactForm from './components/ContactForm';
import IdentityForm from './components/IdentityForm';
let currentPage = 0;






function App() {



  let navigate = useNavigate();


  let pagePaths = ['/identity', '/contact', '/bank'];

  function nextPage(){

    console.log(currentPage)

    if(!(currentPage === pagePaths.length-1)){

      currentPage += 1;
    }

    

    navigate(pagePaths[currentPage])



  }

  function previousPage(){

    if(!(currentPage <=0)){

      currentPage -= 1;
    }

    navigate(pagePaths[currentPage])

  }
  return (
    <div className="App">
<Banner/>



<div className='form-container'>


  <div className='form-page'>
  
  <Outlet/>

  </div>
  

  <button className='form-button' onClick={previousPage}>{'< '}Previous</button>
<button className='form-button' onClick={nextPage}>Next {' >'}</button>

</div>

    </div>

   
  );
}

export default App;
