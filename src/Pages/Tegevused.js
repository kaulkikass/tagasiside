import { useState } from 'react';
import tegevusteFail from '../tegevused.json';

function Tegevused() {
    const [tegevused, uuendaTegevused] = useState(tegevusteFail);

    const n2itaKasutajaYks = () => {
        const vastus= tegevused.filter(element => element.userId===1);
        uuendaTegevused(vastus);
    }

    const n2itaKasutajaKaks = () => {
        const vastus= tegevused.filter(element => element.userId===2);
        uuendaTegevused(vastus);
    }

    const n2itaKasutajaKolm = () => {
        const vastus= tegevused.filter(element => element.userId===3);
        uuendaTegevused(vastus);
    }

    const n2itaValmis = () => {
        const vastus= tegevused.filter(element => element.completed===true);
        uuendaTegevused(vastus);
    }

    const n2itaTegemata = () => {
        const vastus= tegevused.filter(element => element.completed===false);
        uuendaTegevused(vastus);
    }

    const n2itaTAlgav = () => {
        const vastus= tegevused.filter(element => element.title.startsWith('t'));
        uuendaTegevused(vastus);
    }

    const n2ita20 = () => {
        const vastus= tegevused.filter(element => element.title.length > 20);
        uuendaTegevused(vastus);
    }
    

    const n2itaK6iki = () => {
        uuendaTegevused(tegevusteFail);
    }

    return (
         <div>
            <div>{tegevused.length} tegevust</div>
            <button onClick={() => n2itaKasutajaYks()}>Kuva kõik kasutaja ID 1 tegevused</button>
            <button onClick={() => n2itaKasutajaKaks()}>Kuva kõik kasutaja ID 2 tegevused</button>
            <button onClick={() => n2itaKasutajaKaks()}>Kuva kõik kasutaja ID 3 tegevused</button>
            <button onClick={() => n2itaValmis()}>Kuva kõik valmis tegevused</button>
            <button onClick={() => n2itaTegemata()}>Kuva kõik mittevalmis tegevused</button>
            <button onClick={() => n2itaTAlgav()}>Kuva kõik 't' tähega algavad tegevused</button>
            <button onClick={() => n2ita20()}>Kuva tegevused, millel on tähemärke rohkem kui 20</button>
            <button onClick={() => n2itaK6iki()}>Kuva kõik</button>
            {tegevused.map(element => 
                <div>
                    <div>{element.userId}</div>
                    <div>{element.id}</div>
                    <div>{element.title}</div>
                    <div>{element.completed}</div>
                </div>)}
         </div> 
         );
}

export default Tegevused;