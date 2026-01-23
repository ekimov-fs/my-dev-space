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

      <div className="welcom-block">
        <div className="first-block">
          <h1>Веб разработчик <span className='title'>EkimovS</span></h1>
          <h2 style={{marginBottom: '7%', marginTop: '7%'}}>Создаю уникальные <span style={{color: '#4824ff'}}>Web</span> продукты <br />
             под ваши задачи. 
          </h2>
          <h3>Занимаюсь разработкой <br />
          на протяжении <span style={{color: '#4824ff'}}>2 лет</span>.
          </h3>
        </div>
        <div className="image-block" style={{width:'100%', display: 'flex',
          justifyContent: 'center', alignItems: 'center'
        }}>
          <h1>Здесь будет анимированное изображение </h1>
        </div>
        
      </div>
    </>
  );
};

export default App;

