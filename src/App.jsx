import {Header} from './components/Header';
import { Dashboard } from './components/Dashboard';
import { useState } from 'react';
import { NewOperationModal } from './components/NewOperationModal';
import { OperationsProvider } from './hooks/useOperations';

export function App() {
  const[isNewOperationModalOpen, setIsNewOperationModalOpen] = useState(false);

  function handleOpenNewOperation() {
     setIsNewOperationModalOpen(true)
  }

  function handleCloseNewOperation(){
     setIsNewOperationModalOpen(false)      
  }

  return (
    <OperationsProvider>
      <Header children={handleOpenNewOperation}/>

      <Dashboard />

      <NewOperationModal
        isOpen={isNewOperationModalOpen}
        onRequestClose={handleCloseNewOperation}
      />
      
    </OperationsProvider>
  );
}