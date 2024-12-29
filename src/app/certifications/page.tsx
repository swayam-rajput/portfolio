'use client'
import React from 'react'
import Certificate from '../components/Certificate'

const page = () => {
    return (
        <div className="mt-8 px-2 flex flex-col gap-8 pb-16 ">
			<h1 className="font-quicksand text-4xl font-bold">certifications</h1>
            <Certificate/>
            
        </div>
		

            
    )
}

export default page