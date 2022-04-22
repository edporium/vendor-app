import {React, useState, useEffect} from "react";
import { usePlaidLink } from 'react-plaid-link';
import Plaid from "./Plaid";
import './BankForm.css';
import {ReactComponent as PlaidLogo} from '../assets/Plaid_logo.svg'
import formData from "./data";
var token = null;
async function getPlaidToken(){

    let res = await fetch('http://localhost:5000/plaid/link');

    let t = await res.text();

    token = JSON.parse(t).token;

    return token

    

}

let loaded = false;


function BankForm(props){




    
 

    
let [ready, setReady] = useState(false);




    //   useEffect(() => {
    //     if (ready) {
    //       open();
    //     }
    //   }, [ready, open]);


      function start(){

      getPlaidToken().then((t)=>{

        token = t
        
        setReady(ready=true)



      }
          

      
      )
    }

    if(ready){

        console.log('calling plaid')
        return(
            <Plaid token={token}/>
        )
    }else{
        return(
    
            <div>
                <div className="bank-info">
                    <div className="bank-name">Bank: {formData.bankName}</div>
                </div>
                
      <button className="add-bank-button" onClick={start}>
          <div>
        Connect

          </div>
      </button>
    
            </div>
        )

    }
    
   
}

export default BankForm