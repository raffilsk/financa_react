import { useState } from "react";
import Modal from "react-modal"
import { useOperations } from "../../hooks/useOperations";

import './styles.css';

Modal.setAppElement('#root');

export function NewOperationModal({ isOpen, onRequestClose }) {
   const {createOperation} = useOperations();

   const [title, setTitle] = useState('');
   const [amount, setAmount] = useState(0);
   const [category, setCategory] = useState('');
   const [type, setType] = useState('entrada')

   async function handleCreateOperation(e) {
      e.preventDefault();

      await createOperation({
         title,
         amount,
         category,
         type
      })

      setTitle('');
      setAmount();
      setCategory('');
      setType('entrada');

      onRequestClose();
   }

   return (
      <Modal
         isOpen={isOpen}
         onRequestClose={onRequestClose}
         overlayClassName="react-modal-overlay"
         className="react-modal-content"
      >
         <span onClick={onRequestClose}> X </span>

         <form onSubmit={handleCreateOperation}>
            <h2>Cadastrar Operação</h2>

            <input
               type="text"
               placeholder="Titulo"
               value={title}
               onChange={e => setTitle(e.target.value)}
            />

            <input
               type="text"
               placeholder="Categoria"
               value={category}
               onChange={e => setCategory(e.target.value)}
            />
            <div className="button--type">
               <button
                  type="button"
                  className="button--type--entrada"
                  onClick={() => { setType('entrada') }}
               >
                  Entrada
               </button>

               <button
                  type="button"
                  className="button--type--saida"
                  onClick={() => { setType('saida') }}
               >
                  Saída
               </button>
            </div>

            <input
               type="number"
               placeholder="Valor"               
               onChange={e => setAmount(Number(e.target.value))}
            />

            <button
               type="submit"
               className="button--submitCadastro">
               Cadastrar
            </button>

         </form>
      </Modal>

   );
}