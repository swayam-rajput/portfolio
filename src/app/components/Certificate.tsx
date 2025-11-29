// import React from 'react'
import React, { useEffect, useState } from 'react'
import data from '@/app/data/certificates.json'
import CertificateCard from './CertificateCard';

interface Props{
    limit?: number;
}
const Certificate = ({limit}:Props) => {
    const [certifs, setCertifs] = useState(data);    
    // const certifs = data;    
    useEffect(()=>{
        if (limit){
            setCertifs(data.slice(0,limit));
        }else{
            setCertifs(data);
        }
    },[limit])
    

    return (
        <div className=" grid grid-cols-1 gap-4 justify-center">
            {certifs.map((certif:object,index)=>(
                <CertificateCard key={index} {...certif}/>

            ))}
        </div>
    )
}

export default Certificate