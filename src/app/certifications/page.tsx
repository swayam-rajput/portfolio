'use client'
import React from 'react'
import Certificate from '../components/Certificate'
import { FileCode2Icon } from 'lucide-react'

const page = () => {
    return (
        <div className="mt-8 px-2 flex flex-col gap-8 pb-16 ">
			<h1 className="font-spacegrotesk text-2xl flex items-center font-bold gap-2"><FileCode2Icon strokeWidth={1.5}/> certifications</h1>
            <Certificate/>
        </div>            
    )
}

export default page