'use client'

import {Projects} from "@/app/components/Projects";
import AnimationWrapper from "@/components/ui/animwrapper";
import { TerminalIcon } from "lucide-react";

const page = () => {
    return (
		<div className="mt-8 px-2 flex flex-col gap-8 pb-16 ">
			<h1 className="font-spacegrotesk text-2xl flex items-center font-bold gap-2"><TerminalIcon/>projects</h1>
			
			<Projects />
		</div>
	)
}
export default page;
{/* <ProjectCard img_src={"https://images.unsplash.com/photo-1542372712-fc07597133cd?q=80&w=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} title="Tradingview Telegram Alerts" description="Real-time trading alerts with chart snapshots sent to Telegram, designed to keep traders informed and responsive to market changes" tech_stack={'Python'} link="Source" /> */}
{/* <ProjectCard img_src={"https://images.unsplash.com/photo-1542704504091-49b394c14bb2?q=80&w=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} title="NFT" description="Non-Fungible Tokens (NFTs) Gallery Viewer website that allows users to connect their crypto wallets to view and verify their tokens" tech_stack={'Python'} link="Source" /> */}
