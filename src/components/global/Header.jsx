import { Container, Button } from "reactstrap"
import web3 from '../../web3';
import React, { useState,useEffect } from "react";
import Popup from "../../Popup";
import Modald from "../../ModalD";
import FolowStepsd from "../../FolowStepsd";
//window.wallet="";
const Header = (props) => {
    const[walletconnect,setwalletconnect]=useState();
    const [isOpen, setIsOpen] = useState(false);
    var[dis,setDis] = useState("");
    console.log("checkwalletconnect",walletconnect)
    const toggleNav = () => {        
        let sidebar = document.getElementsByClassName("sidebar")[0];
        sidebar.classList.toggle("collapse");         
    }

  
    const Connectwallet=async()=>{                  
        const networkid=await web3.eth.getChainId();
        console.log("network id",networkid);
        if(networkid!=97){
        setIsOpen(true);
        setDis("Connected to Wrong Network,Please connect to Binance Mainnet");
        }else{

        
        window.ethereum.enable();  
        
        let accounts=await web3.eth.getAccounts();
       // web3.eth.getChainId().then(console.log);
       // const networkid=await web3.eth.getChainId();
       // console.log("network id",networkid);
        await web3.eth.getAccounts().then(()=>{          
            console.log("acc Binance",accounts[0])
            setwalletconnect(accounts[0])
            window.wallet=accounts[0];
           
           localStorage.setItem("wallet",accounts[0])
           //sessionStorage.setItem("wallet", accounts[0]);
          }).then(()=>{
              window.location.reload()
          })
        console.log(accounts);
        }  
    }

    const Disconnect=()=>{            
        
        
       localStorage.setItem("wallet","")
       window.location.reload()
        
        
    }
    


    return (<>
       <Modald visible={isOpen} onClose={() => setIsOpen(false)}>
        <FolowStepsd viewhistory={dis}  />
      </Modald>
        <div className="header bg-site-secondary">
            <Container fluid className="px-md-5">
                <div className="d-flex align-items-center font-semi-bold">
                    <span className="mr-3 toggler-btn" onClick={e=>toggleNav()}><i className="fa fa-bars"></i></span>
                   
                    <h5 className="m-0" id="header-title"></h5>
                    <div className="ml-auto topbar-btns">
                        <Button color="outline-site-primary">Binance Mainnet</Button>
                        {
                            localStorage.getItem("wallet")===null || localStorage.getItem("wallet")==="" ||localStorage.getItem("wallet")==='undefined' ||localStorage.getItem("wallet")===undefined ?  
                            (<Button color="site-primary" className="ml-4"onClick={Connectwallet}>Connect Wallet</Button>):(
                              < ><Button color="site-primary" className="ml-4" onClick={Connectwallet}>{localStorage.getItem("wallet").slice(0,10)}......{localStorage.getItem("wallet").slice(39,42)}</Button>
                                &nbsp; &nbsp;
                                <Button color="outline-site-primary" onClick={Disconnect}>disconnect</Button>
                                </>    
                            )
                        }
                      
                    </div>
                </div>
            </Container>
        </div>
    </>);
}

export default Header;