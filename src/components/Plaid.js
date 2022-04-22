import {React, useState, useEffect} from "react";
import { usePlaidLink } from 'react-plaid-link';
import BankForm from "./BankForm";
import {useNavigate} from 'react-router-dom'
import formData from './data.js'



export default function Plaid(props){
    let navigate = useNavigate();

    let [cancel, setCancel] = useState(false)

    let { open, ready } = usePlaidLink({
        token: props.token,
        onSuccess: (public_token, metadata) => {
          console.log(public_token, metadata);

          formData.bankName = metadata.institution.name;
          setCancel(cancel=true);

          return(
              <BankForm key={34366}/>
          )
        },
        onExit:(err, metadata)=>{
            setCancel(cancel=true)
            return(
            
                <BankForm key={23123}/>
            )
            
        }
      });
      console.log('aaa')



      if(!cancel){

        ready = true
   
        open();
        return(
            
            <div>Plaid</div>
        )
      }else{

        console.log('bank')
        return(
            
            <BankForm key={23123}/>
        )
      }

}