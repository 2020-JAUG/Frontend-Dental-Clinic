import React, {useState, useEffect} from 'react';
import ClientNavbar from '../../components/ClientNavbar/ClientNavbar';
import './Dentist.css';
import axios from 'axios';


const Dentist = () => {

    //hooks
    const [dentists, setDentists] = useState({});
    const [city, setCity] = useState({city: ""});

    useEffect( () => {
        searchDentists();

    }, [])

    useEffect( () => {
        searchDentists();
    })

    const updateCredentials = (e) => {
        setCity({ ...city, [e.target.name]: e.target.value });
    };

    const searchDentists = async () => {

        try{

            let token = localStorage.getItem("token");
            let user = JSON.parse(localStorage.getItem("client"));

            let body = {
                city: city.city, //AQUI FALTA INTROUCIR POR PANTALLA
                client: user._id
            }    

            let res = await axios.post('http://localhost:3006/dentists/info',body, {headers:{'authorization':'Bearer ' + token}});

            setDentists(res.data)

        } catch (error){

            console.log(error)

        }
    }

    if(dentists[0]?.name){

        // si existe, mapeamos los resultados

        return(

            <div className="dentistsAllbyUser"> 

                <ClientNavbar />
                <h1>DENTISITS</h1>
                <p>Choose a city :</p>
                <input type="name" name="city" title="city"  onChange={updateCredentials} lenght="10" />
                <br />
                <div className="dentistsContainer">

                    {dentists.map((dentist, index) => (
                        
                        <div key={index} className="dentistCard">
    
                            <img src={dentist.image} alt="img" width="300" height="200"/>
                            <p> NAME : {dentist.name} </p>
                            <p> CITY : {dentist.city} </p>
                            <p> SPEACIALITY : {dentist.speciality} </p>
                        
                        </div>
    
                    ))}
                </div>

            </div>
        )

    }else {

        return(
            <div className="dentistsAllbyUser">
                <ClientNavbar />
                <h1>DENTISITS</h1>
                <p>Choose a city :</p>
                <input type="name" name="city" title="city"  onChange={updateCredentials} lenght="10" />
                <br />
                <div className="dentistsContainer">
            </div>
            </div>
        )

    }

}

export default Dentist;