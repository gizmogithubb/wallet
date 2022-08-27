import React from 'react'

function stuff() {
  return (
   
    <div style={{margin: "20px"}}>


    <div style={{paddingTop: "10px"}}>
       
        <RadioGroup
            onChange={this.handleWalletSelect}
            selectedValue={this.state.whichWalletSelected}
            inline={true}
            className="wallets-wrapper"
        >
            { this.state.wallets.map(key =>
                <Radio
                    key={key}
                    className="wallet-label"
                    value={key}>
                    <img src={window.cardano[key].icon} width={24} height={24} alt={key}/>
                    {window.cardano[key].name} ({key})
                </Radio>
            )}
        </RadioGroup>
    </div>



    <button style={{padding: "20px"}} onClick={this.refreshData}>Connect Wallet</button>
   < <p style={{paddingTop: "20px"}}><span style={{fontWeight: "bold"}}>Balance: </span>{this.state.balance * 0.000001}</p>>
    

</div>
  )
}

export default stuff