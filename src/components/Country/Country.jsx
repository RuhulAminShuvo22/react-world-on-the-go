import React, { useState } from 'react';
import './Country.css'

const Country = ({country, handleVisitedCountries, handleVisitedFlag}) => {

    const [visited, setVisited] = useState(false);
    //console.log(country.area.area)
    console.log(handleVisitedCountries)

    const handleVisited =() =>{
        if(visited){
            setVisited(false)
        }
        else{
            setVisited(true)
        }

        // second method

        //setVisited ( visited ? false  :  true) ;

        handleVisitedCountries(country);
    }



    return (
        <div className={`country  ${visited && `country-visited`}`}>
            <img src={country?.flags?.flags?.png} alt={country.flags.flags.alt} />
            <h3>Name :{country.name.common} </h3>
            <p>Population: {country.population.population}</p>
            <p>Region: {country.region.region}</p>
            <p>Area: {country.area.area } 
                {
                country.area.area > 300000 ? " Big Country" : ' Small Country'
                } 
                </p>

                <button onClick={handleVisited}>
                     
                     {
                        visited ? 'Visited'  :  'Not Visited'
                     }
                </button>

                {/* adding visited flag */}
                <button onClick={ ()=> { handleVisitedFlag(country?.flags?.flags?.png)} }>Add visited flag</button>

            
        </div>
    );
};

export default Country;