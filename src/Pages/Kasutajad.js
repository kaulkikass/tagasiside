import { useState } from 'react';
import kasutajateFail from '../kasutajad.json';

function Kasutajad() {
    const [kasutajad, muudaKasutajaid] = useState(kasutajateFail);
    const displayAll = () => {
        muudaKasutajaid(kasutajateFail);

    }
    const displayUsernameOver10 = () => {
        const vastus = kasutajateFail.filter(element => element.username.length >= 10);
        muudaKasutajaid(vastus);
    }
    const deleteIndex = (kasutaja) => {
        const index = kasutajad.indexOf(kasutaja);
        kasutajad.splice(index,1);
        muudaKasutajaid(kasutajad.slice());
    }
    const displayAGuy = () => {
        const vastus = kasutajad.findIndex(element => element.email === "Lucio_Hettinger@annie.ca");
        console.log(vastus);
    }
    const displayNameFirstLetterC = () => {
        const vastus = kasutajad.find(element => element.name.startsWith('C'));
        console.log(vastus);
    }

    const displaySortLat = () => {
        kasutajad.sort((a,b) => a.address.geo.lat.localeCompare(b.address.geo.lat))
        muudaKasutajaid(kasutajad.slice());
    }
    const displaydIfLng = () => {
        const result = kasutajad.filter(user => user.address.geo.lng > 0);
        muudaKasutajaid(result);
    }

    const displaySumId = () => {
        let sum=0;
       kasutajad.forEach(user =>  sum += user.id )
        console.log(sum);
    }

    const display000 = () => {
        const vastus = kasutajad.map(user => ({...user, phone: "000-"+user.phone}));
        muudaKasutajaid(vastus);
    }

    const displayEmails = () => { 

        const vastus = kasutajad.map(user => user.email);
        console.log(vastus);
    }

    const displayReplaceAE = () => {
        const result = kasutajad.map(user => (
            {...user,company: {...user.company,catchPhrase:user.company.catchPhrase.replaceAll("a", "e")}}
        ));
        muudaKasutajaid(result);
        console.log(result);
        }
    return ( 
    <div>
        <div>Leitud: {kasutajad.length}</div>
        <button onClick={() => displayAll()}>Kuva kõik</button> <br/>
        <button onClick={() => displayUsernameOver10()}>Kuva, kelle kasutajanimi pikem, kui 10 tähemärki</button> <br/>
        <button onClick={() => displayAGuy()}>Kuva, „Lucio_Hettinger@annie.ca“.</button> <br/>
        <button onClick={() => displayNameFirstLetterC()}>Kuva ESIMENE kasutaja, kelle nime kõige esimene täht on „C“. Console.log vastus.</button> <br/>
        <button onClick={() => displaySortLat()}>Sorteeri kasutajad "lat" väärtuse järgi</button>
        <button onClick={() => displaydIfLng()}>Näita ainult lng</button>
        <button onClick={() => displaySumId()}>Liida kokku kasutajate ID'd</button>
        <button onClick={() => display000()}>Lisa telefonile 000 algusesse</button>
        <button onClick={() => displayEmails()}>Liida massiiviks emailid</button>
        <button onClick={() => displayReplaceAE()}>Asenda catchphrase sees koik a tahed e tahega</button>
        {kasutajad.map((element, index) =>
        <div key={index}>
            <div>{element.id}</div>
            <div>{element.name}</div>
            <div>{element.username}</div>
            <div>{element.email}</div>
            <div>{element.address.street}</div>
            <div>{element.address.suite}</div>
            <div>{element.address.city}</div>
            <div>{element.address.zipcode}</div>
            <div>{element.address.geo.lat}</div>
            <div>{element.address.geo.lng}</div>
            <div>{element.phone}</div>
            <div>{element.website}</div>
            <div>{element.company.name}</div>
            <div>{element.company.catchPhrase}</div>
            <div>{element.company.bs}</div>
            <button onClick={() => deleteIndex(element)}>Kustuta järjekorranumber</button>
        </div>
        )}
    </div>
    );
}

export default Kasutajad;