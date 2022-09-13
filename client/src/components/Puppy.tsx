import React from "react";

interface Props {
    name:string,
    breed: string,
    birthDate:string
}

const Puppy:React.FC<Props>= ( {name, breed, birthDate} ) =>{
    return ( 
        <div>
            <h1>{name}</h1>
            <h2>{breed}</h2>
            <p>{birthDate}</p>
        </div>
    )
}

export default Puppy