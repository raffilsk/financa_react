import { Resume } from '../Resume'
import { Table } from '../Table'
import './styles.css'

export function Dashboard(){
   return(
      <main>
         <Resume/>
         <Table />
      </main>
   )
}