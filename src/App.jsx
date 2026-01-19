import './App.css';
import { useState } from 'react';
import ModalWindow from './components/ModalWindow';
import Header from './components/Header/Header';

function App() {

  const [showModals, setShowModals] = useState(false);

  const handleOpenModal = () => {
    setShowModals(true);
  };

  const handleCloseModal = () => {
    setShowModals(false);
  };



  return (
    <>
      <Header handleOpenModal = {handleOpenModal} />

      <ModalWindow show={showModals} onClose={handleCloseModal}>
        <h2 style={{color:'#4824ff', fontSize: '40px' }}>Контакты</h2>
        <p style={{fontSize: '22px'}}>Вы можете связаться со мной в Телеграм <br/> или Инстаграм</p>
      </ModalWindow>
    </>
  );
};

export default App;

