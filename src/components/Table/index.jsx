import { useOperations } from '../../hooks/useOperations'
import './styles.css'
import entradaImg from '../../assets/up.png'
import saidaImg from '../../assets/down.png'

export function Table() {
   const {operations} = useOperations()

   function imgEntradaSaida(tipo){
      if(tipo === 'entrada'){
         return <img src={entradaImg}
                     className="resume--title--setas"
                     alt="Entrada"
               /> 
      }else{
        return <img src={saidaImg}
                    className="resume--title--setas"
                    alt="Saida"
               /> 
      }
   }
   return (
      
      <div className="table">
         <table>
            <thead>
               <tr>
                  <th>Título</th>
                  <th>Tipo</th>
                  <th>Valor</th>
                  <th>Categoria</th>
                  <th>Data</th>
               </tr>
            </thead>

            <tbody>
               {operations.map(operation => (
                     <tr key={operation.id}>
                        <td>{operation.title}</td>
                        <td>{imgEntradaSaida(operation.type)}</td>
                        <td>
                           {new Intl.NumberFormat('pt-BR',{
                              style: 'currency',
                              currency: 'BRL'
                           }).format(operation.amount)}
                        </td>
                        <td>{operation.category}</td>
                        <td>{new Intl.DateTimeFormat('pt-BR')
                              .format(new Date(operation.date))}
                        </td>
                     </tr>
               ))}
            </tbody>
         </table>
      </div>
   )
}