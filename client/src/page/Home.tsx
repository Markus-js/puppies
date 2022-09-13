import React, { useEffect, useState } from "react";
import Puppy from "../components/Puppy";
import { PuppyInfo } from '../interface'

export default function Home() {

    // const somePuppies:PuppyInfo[] = [
    //     { name: "Buddy", breed: "Golden Retriever", birthDate:"13-06-2010" },
    //     { name: "Scooby", breed: "Great Dane", birthDate:"13-06-2018" },
    //     { name: "Snoopy", breed: "Beagle", birthDate:"14-07-2015"},
    // ];
    
    const [puppies, setPuppies] = useState<PuppyInfo[]>([]);


    useEffect(()=>{
        fetch('http://localhost:8080/api/puppies')
            .then(res=> res.json())
            .then(data => setPuppies(data))
            .catch(err => console.log(err))
    },[])

    return (
        <div>
            <h1>Home</h1>
            {puppies.map((puppy, index) => (
                <Puppy key={index} name={puppy.name} breed={puppy.breed} birthDate={puppy.birthDate} />
            ))}
        </div>
    )
}