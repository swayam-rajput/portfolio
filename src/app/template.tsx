"use client"
import AnimationWrapper from "@/components/ui/animwrapper";

export default function Template({ children }: { children: React.ReactNode }) {
  return <AnimationWrapper>{children}</AnimationWrapper>;
}
