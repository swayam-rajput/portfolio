import data from "../data/projects.json";
import { Navbar } from "./Navbar";
import { ProjectCard } from "./ProjectCard" 
import { useState,useEffect } from "react";

interface Props {
    limit?: number;
  }
export const Projects = ({limit}:Props) => {
    const [projects, setProjects] = useState([]);
    
    useEffect(()=>{
        if (limit){
            setProjects(data.slice(0,limit));

        }else{
            setProjects(data);
        }
    },[limit,data])
    // useEffect(() => {
    //         fetch('/projects.json')
    //     .then((res) => res.json())
    //     .then((data) => setProjects(data))
    //     .catch((error) => console.error('Error loading projects:', error));
    // }, []);

    return (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {projects.map((project:[],index)=>(
                <ProjectCard key={index} {...project} />
            ))}
        </div>
    
    )
}

{/* <ProjectCard img_src={"https://images.unsplash.com/photo-1542372712-fc07597133cd?q=80&w=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} title="Tradingview Telegram Alerts" description="Real-time trading alerts with chart snapshots sent to Telegram, designed to keep traders informed and responsive to market changes" tech_stack={'Python'} link="Source" /> */}
{/* <ProjectCard img_src={"https://images.unsplash.com/photo-1542704504091-49b394c14bb2?q=80&w=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} title="NFT" description="Non-Fungible Tokens (NFTs) Gallery Viewer website that allows users to connect their crypto wallets to view and verify their tokens" tech_stack={'Python'} link="Source" /> */}
