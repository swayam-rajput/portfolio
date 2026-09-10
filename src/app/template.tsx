"use client"
import AnimationWrapper from "@/components/ui/animwrapper";
import { useEffect } from "react";
import { bind, setVolume } from 'cuelume';
export default function Template({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    bind();
    setVolume(0.2);
    
  }, []);
  return <AnimationWrapper>{children}</AnimationWrapper>;
}
