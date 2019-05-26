import React from 'react';


const ButtonPanel = (props) => {
    
    return (
        <div className="button-panel">
            <button onClick={props.changeCounterValue}>Dodaj 1</button>
            <button onClick={props.changeClearValue}>Zeruj</button>
            <button onClick={props.changeFirstValue}>Przywróć</button>
            
            
        </div>
    );
    
}


export default ButtonPanel;