import { Button } from "@/components/ui/button";
import { Timeline } from "./Timeline";
import { useState } from "react";
import career from '@/app/data/work.json'

const Experience = () => {
    const [activeTab,setTab] = useState('work')
    const [data,setData] = useState(career.career)
    return (
        <div className="flex flex-col mx-1 mt-6 mb-6">
            <div role="tablist" aria-orientation="horizontal" className=" items-center justify-center  rounded-lg bg-muted dark:bg-background p-1 text-muted-foreground mb-2 grid w-full grid-cols-2" data-orientation="horizontal" style={{"outline": "none"}}>
                
                <Button variant={"radio"} type="button" aria-selected={activeTab === 'work' ? 'true' : 'false' } aria-controls="radix-:r6:-content-work" data-state={activeTab === 'work' ? 'active' : 'inactive'} id="radix-:r6:-trigger-work" className=" font-medium overflow-hidden data-[state=active]:bg-background dark:data-[state=active]:bg-muted data-[state=active]:text-foreground data-[state=active]:shadow" onClick={() => {setTab('work');setData(career.career)}}>Work</Button>
            
                <Button variant={"radio"} type="button" aria-selected={activeTab === 'education'?'true' : 'false' } aria-controls="radix-:r6:-content-education" data-state={activeTab === 'education' ? 'active' : 'inactive'} id="radix-:r6:-trigger-education" className=" font-medium overflow-hidden  data-[state=active]:bg-background dark:data-[state=active]:bg-muted data-[state=active]:text-foreground data-[state=active]:shadow" onClick={() => {setTab('education');setData(career.education)}}>Education</Button>

            </div>

            <Timeline info={data}/>
        
        </div>
    );
}

export default Experience