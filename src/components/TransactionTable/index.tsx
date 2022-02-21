 import { useEffect } from 'react';
import { api } from '../../services/api';
import {Container} from './style';
 export function TransactionTable(){
     useEffect(()=>{
         api.get('transaction')
          .then(response => console.log (response.data))

     }, []);
    
    
    
    return (
         <Container>
             <table>
                 <thead>
                     <tr>
                         <th>Título</th>
                         <th>Valor</th>
                         <th>Categoria</th>
                         <th>Data</th>
                     </tr>

                 </thead>
                 <tbody>
                     <tr>
                         <td>desenvolvimento de website</td>
                         <td className='Deposit'>R$ 10.000</td>
                         <td>Desenvolvimento</td>
                         <td>20/02/2022</td>
                     </tr>
                     <tr>
                         <td>aluguel</td>
                         <td className='Withdraw'>-R$ 400</td>
                         <td>Casa</td>
                         <td>20/02/2022</td>
                     </tr>
                     <tr>
                         <td>Feira</td>
                         <td className='Withdraw'>-R$ 1.000</td>
                         <td>Casa</td>
                         <td>20/02/2022</td>
                     </tr>
                 </tbody>
             </table>
         </Container>
     );
 }