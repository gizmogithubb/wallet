import React, {useState} from 'react'
import {  RadioGroup } from "@blueprintjs/core";
const Walletcomp = (props) => {
    const {onchange, selectedvalue, inline, statewallets, refresh, balance} = props

const [btnName, setBtnName]=useState('Connnect Wallet')

const walletCon = () => {
setBtnName('Refresh')
}


  return (
  

<div className='flex m-5 w-full mx-auto justify-center items-center'>


    <div  className='flex'
    style={{paddingTop: "10px"}}>
       
        <RadioGroup
            onChange={onchange}
            selectedValue={selectedvalue}
            inline={inline}
            className="wallets-wrapper"
        >
            {statewallets}
        </RadioGroup>
    </div>

<div className='m-0 p-auto' onClick={walletCon}>
<button className='text-red-500 bg-green-500 flex m-0 p-10 w-100%'  onClick={refresh}>
    {btnName}
</button>
</div>
   
<p className='flex text-xl' ><span style={{fontWeight: "bold"}}></span>{balance}</p>
    
</div>

  )
}

export default Walletcomp