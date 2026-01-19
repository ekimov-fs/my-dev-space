import { useState, useCallback, useEffect, Children } from "react";
import './ModalWindow.css';


function ModalWindow({show, onClose, children}) {

    const [isVisible, setIsVisible] = useState(false);
    const handleKeyDown = useCallback((event) => {
        if(event.key === 'Escape'){
            onClose();
        }
    }, [onClose]);

    useEffect((event) => {
        let timer;
        if(show){
            setIsVisible(true);
            document.addEventListener('keydown', handleKeyDown);
        } else{
            document.removeEventListener('keydown', handleKeyDown);
            timer = setTimeout(() => setIsVisible(false), 800);
        }
        return () =>{
            if(timer) clearTimeout(timer);
            document.removeEventListener('keydown', handleKeyDown)  
        } 
    }, [show, handleKeyDown]);

    useEffect(() => {
        return () => {
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, [handleKeyDown])


    return (
        <div className={`modal-backdrop ${show ? 'show' : ''}`} style={{display: isVisible ? 'flex' : 'none'}} onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <button onClick={onClose} className="modal-close-button" aria-label="Close modal"></button> 
                {children}
                <div style={{display: 'flex'}}>
                    <a href="https://t.me/javascript_tricker" target="_blank" className="social-button">
                        <a className="social telegram"/>Telegram</a>
                    <a href="https://t.me/javascript_tricker" target="_blank" className="social-button">
                        <a className="social instagram"/>Instagram</a>
                </div>

            </div>
                
        
        </div>  
    );
}

export default ModalWindow;
