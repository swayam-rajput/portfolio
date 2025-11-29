import data from "../data/projects.json";
import { ProjectCard } from "./ProjectCard" 
import { useState,useEffect } from "react";

interface Props {
    limit?: number;
}
export const Projects = ({limit}:Props) => {
    const [projects, setProjects] = useState<object[]>([]);
    
    useEffect(()=>{
        if (limit){
            setProjects(data.slice(0,limit));

        }else{
            setProjects(data);
        }
    },[limit])
    // useEffect(() => {
    //         fetch('/projects.json')
    //     .then((res) => res.json())
    //     .then((data) => setProjects(data))
    //     .catch((error) => console.error('Error loading projects:', error));
    // }, []);

    return (
        
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        
            {projects.map((project,index:number)=>(
                <ProjectCard key={index} {...project} />
            ))}
        </div>
    
    )
}