import React, { useState } from "react";

const Semaforo = () =>{

    const [greenSemaforo,setGreenSemaforo]=useState ('green')
    const [orangeSemaforo,setOrangeSemaforo]=useState ('darkorange')
    const [redSemaforo,setRedSemaforo]=useState ('darkred ')


    function colorGreen(){
        if(greenSemaforo == 'green'){
            setGreenSemaforo('limegreen')
            setOrangeSemaforo('darkorange')
            
            setRedSemaforo('darkred ')
        }else{
            setGreenSemaforo('green')
        }
    }
    function colorOrange(){
        if(orangeSemaforo == 'darkorange'){
            setOrangeSemaforo('gold ')
            setGreenSemaforo('green')
            setRedSemaforo('darkred ')
        }else{
            setOrangeSemaforo('darkorange')
        }
    }
    function colorRed(){
        if(redSemaforo == 'darkred '){
            setRedSemaforo('red')
            setGreenSemaforo('green')
            setOrangeSemaforo('darkorange')
        }else{
            setRedSemaforo('darkred ')
        }
    }
    return(
        <>
        <h1>Esto es el semáforo</h1>
        <div className="container d-grid gap-2 col-6 mx-auto " id="contenedor">
                        <div className="col-lg-4">
                                <button onClick={colorGreen}  style={{backgroundColor:greenSemaforo}} className="btn btn-success rounded-circle" width="140"></button>
                        </div>
                        <div className="col-lg-4" >
                                <button onClick={colorOrange}  style={{backgroundColor:orangeSemaforo}}className="btn btn-warning rounded-circle"></button>  
                        </div>
                        <div className="col-lg-4">

      
                            <button onClick={colorRed}  style={{backgroundColor:redSemaforo}} className="btn btn-danger rounded-circle" width="140"></button>  
                        </div>
                 </div>
        
        </>
    );

    
};

export default Semaforo;