import{useState} from 'react'
import Modal from 'react-modal';
import logoimg from '../../assets/Logo.svg'


import { Container, Content } from './style'

export function Header (){
 const [istNewTransactionModalOpen, setIstNewTransactionModalOpen] = useState(false);

 function handleOpenNewTransactionModal(){
    setIstNewTransactionModalOpen(true);
 }
 
  function handleCloseNewTransactionModal(){
     setIstNewTransactionModalOpen(false);
  }
 

    return(
        <Container>
            <Content>

            <img src={logoimg} alt="eco money" />
            <button type="button" onClick={handleOpenNewTransactionModal}>
                Nova transação
            </button>
            <Modal isOpen={istNewTransactionModalOpen}>
                <h2>Cadatrar transação</h2>
            </Modal>
            </Content>
        </Container>
    )
}