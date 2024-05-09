import { useEffect } from "react";
import { useState } from "react";
import ServiceCard from "./ServiceCard";
import { data } from "autoprefixer";


const Servecese = () => {
    const [services, setSurvices] = useState([])

    useEffect(()=>{
        fetch('http://localhost:5000/servises')
        .then(res => res.json())
        .then(data => setSurvices(data))
        console.log(data);
    }, [])
    return (
        <div>
            <div className=" text-center mt-5"> 
                <h1 className=" text-2xl text-orange-500">Service</h1>
                <h1 className=" text-5xl font-bold">Our Service Area</h1>
                <p className=" mt-4 text-gray-500"></p>the majority have suffered alteration in some form, by injected humour, <br /> or randomised words which don't look even slightly believable. 

            </div>
            <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                
            {
                    services.map(sevice => <ServiceCard key={sevice._id} service={sevice}></ServiceCard>)
                }
            </div>
        </div>
    );
};

export default Servecese;