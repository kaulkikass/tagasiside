import { useState } from 'react';
import andjateFail from '../nimed.json';

function TagasisideAndjad() {
const [andjad, uuendaAndjad] = useState(andjateFail);

const filtreeriM = () => {
    const vastus = andjad.filter(element => element.startsWith('M'));
    uuendaAndjad(vastus);
}

const filtreeri6 = () => {
    const vastus = andjad.filter(element => element.length===6);
    uuendaAndjad(vastus);
}

const filtreeriY = () => {
    const vastus = andjad.filter(element => element.endsWith('y'));
    uuendaAndjad(vastus);
}

const sortZA = () => {   //muudab ka originaalset arrayd
/*     const vastus = andjad.sort().reverse();
    uuendaAndjad(vastus.slice()); */
    const vastus = [...andjad].sort().reverse();
    uuendaAndjad(vastus);
}

const mapEst = () => {
    const vastus = andjad.map(andja => 'est-' + andja);
    uuendaAndjad(vastus);
}

const indexOfPaul = () => {
    const vastus = andjad.indexOf('Paul');
    console.log(vastus);
} 

const findD = () => {
    const vastus = andjad.find(element => element.startsWith('D'));
    console.log(vastus);
}

    return (
        <div>
            <div>{andjad.length} nime</div>
            <button onClick={() => filtreeriM()}>Filtreeri ehk jäta kõik M tähega algavad nimed alles</button><br />
            <button onClick={() => filtreeri6()}>Filtreeri ehk jäta kõik täpselt 6-kohalised nimed alles</button><br />
            <button onClick={() => filtreeriY()}>Filtreeri ehk jäta kõik Y tähega lõppevad nimed alles</button><br />
            <button onClick={() => sortZA()}>Sorteeri Z-A</button><br />
            <button onClick={() => mapEst()}>Proovi .map funktsiooni - kirjuta iga nime ette 'EST-'</button><br />
            <button onClick={() => indexOfPaul()}>Leia üles, mis on nime 'Paul' järjekorranumber - console.log</button><br />
            <button onClick={() => findD()}>Kuva tähestikus esimene, kellel on D-tähega algav nimi .find abil - console.log</button><br />
            {andjad.map(element => <div>{element}</div>)};
        </div> 
    );
}

export default TagasisideAndjad;