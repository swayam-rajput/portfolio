import React, { useEffect, useState } from 'react'
import data from '@/app/data/certificates.json'
import CertificateCard from './CertificateCard';
const Certificate = () => {
    const [certifs, setCertifs] = useState(data);    
    
    return (
        <div className="grid grid-cols-1 gap-4 justify-center">
            {certifs.map((certif:{},index)=>(
                <CertificateCard key={index} {...certif}/>

            ))}
        </div>
    )
}

export default Certificate