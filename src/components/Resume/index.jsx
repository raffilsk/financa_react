import { useOperations } from '../../hooks/useOperations'
import './styles.css'
import entradaImg from '../../assets/up.png'
import saidaImg from '../../assets/down.png'



export function Resume() {
   const {operations} = useOperations();

   const resume = operations.reduce((acumulator, operation) =>{
      if(operation.type === 'entrada'){
         acumulator.entradas += operation.amount;
         acumulator.total += operation.amount;
      }else{
         acumulator.saidas += operation.amount;
         acumulator.total -= operation.amount;         
      }

      return acumulator;

      },{
         entradas: 0,
         saidas: 0,
         total: 0

      })


   return (
      <div className='resume'>
         <div className='resume--item'>
            <header className='resume--title'>
               <p>Entradas</p>
               <img className='resume--title--setas'
                    src={entradaImg}
                    alt="Seta para cima"
               />
            </header>
            <strong>
            {new Intl.NumberFormat('pt-BR',{
               style: 'currency',
               currency: 'BRL'
            }).format(resume.entradas)}
            </strong>
         </div>

         <div className='resume--item'>
            <header className='resume--title'>
               <p>Saídas</p>
               <img className='resume--title--setas'
                    src={saidaImg}
                    alt="Seta para baixo"
               />
            </header>
            <strong>
               -
            {new Intl.NumberFormat('pt-BR',{
               style: 'currency',
               currency: 'BRL'
            }).format(resume.saidas)}
            </strong>
         </div>

         <div className='resume--item'>
            <header className='resume--title'>
               <p>Total</p>
               <div>
                  <img className='resume--title--setas' 
                       src={entradaImg}
                       alt="Seta para cima"
                  />
                  <img className='resume--title--setas'
                       src={saidaImg}
                       alt="Seta para baixo"
                  />
               </div>
            </header>
            <strong>
            {new Intl.NumberFormat('pt-BR',{
               style: 'currency',
               currency: 'BRL'
            }).format(resume.total)}
            </strong>
         </div>
        

      </div>
      
   )
}
