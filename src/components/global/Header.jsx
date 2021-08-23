import { Container, Button } from "reactstrap"
import web3 from '../../web3';
import React, { useState,useEffect } from "react";
//window.wallet="";
const Header = (props) => {
    const[walletconnect,setwalletconnect]=useState();
    console.log("checkwalletconnect",walletconnect)
    const toggleNav = () => {        
        let sidebar = document.getElementsByClassName("sidebar")[0];
        sidebar.classList.toggle("collapse");         
    }

  
    const Connectwallet=async()=>{                  
        window.ethereum.enable();  
        let accounts=await web3.eth.getAccounts();
        await web3.eth.getAccounts().then(()=>{          
            console.log("acc Binance",accounts[0])
            setwalletconnect(accounts[0])
            window.wallet=accounts[0];
           //localStorage.setItem("wallet",accounts[0])
           sessionStorage.setItem("wallet", accounts[0]);
          }).then(()=>{
          })
        console.log(accounts);
        
    }
    


    return (<>
        <div className="header bg-site-secondary">
            <Container fluid className="px-md-5">
                <div className="d-flex align-items-center font-semi-bold">
                    <span className="mr-3 toggler-btn" onClick={e=>toggleNav()}><i className="fa fa-bars"></i></span>
                    <h5 className="m-0" id="header-title"></h5>
                    <div className="ml-auto topbar-btns">
                        <Button color="outline-site-primary">Binance Mainnet</Button>
                        {
                            walletconnect === null || walletconnect ==="" ||walletconnect=== undefined  ?  
                            (<Button color="site-primary" className="ml-4"onClick={Connectwallet}>Connect Wallet</Button>):(
                                <Button color="site-primary" className="ml-4">{walletconnect.slice(0,10)}......{walletconnect.slice(39,42)}</Button>   
                            )
                        }

                        
                    </div>
                </div>
            </Container>
        </div>
    </>);
}

export default Header;