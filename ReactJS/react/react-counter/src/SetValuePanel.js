import React from 'react';


const SetValuePanel = (props) => {
    let objInput = null;
    
    return (
        <div className="button-panel">
            <input type="number" ref={input => objInput = input}/>
            <button onClick={()=>{props.setCounter(parseInt(objInput.value))}}>Add user</button>
            
            
        </div>
    );
    
}


export default SetValuePanel;