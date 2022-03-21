import { createContext, useContext, useEffect, useState } from "react";
import { api } from "../services/api";


const OperationsContext = createContext([]);

export function OperationsProvider({children}){
   const [operations, setOperations] = useState([]);


   useEffect(() => {
      api.get('/operations')
         .then(response => setOperations(response.data.operations))
   }, []);

   async function createOperation(operationInput){
      const response = await api.post('/operations', {
         ...operationInput,
         date: new Date()
      })
      const {operation} = response.data;

      setOperations([
         ...operations,
         operation
      ])
   }

   return(
      <OperationsContext.Provider value={{operations, createOperation}}>
         {children}
      </OperationsContext.Provider>

   )
}

export function useOperations(){
   const context = useContext(OperationsContext)

   return context;
}