import { Button } from "@/components/ui/button";
import { Timeline } from "./Timeline";
import { useState } from "react";
import career from "@/app/data/work.json";

const Experience = () => {
  const [activeTab, setTab] = useState<'work' | 'education'>('work');
  const [data, setData] = useState(career.career);
  const [isAnimating, setIsAnimating] = useState(false);

  const switchTab = (tab: 'work' | 'education') => {
    if (tab === activeTab) return;

    setIsAnimating(true);

    setTimeout(() => {
      setTab(tab);
      setData(tab === 'work' ? career.career : career.education);
      setIsAnimating(false);
    }, 150);
  };

  return (
    <div className="flex flex-col mx-1 mt-6  mb-6">
      <div
        role="tablist"
        aria-orientation="horizontal"
        className={`mb-2 grid w-full grid-cols-2 items-center justify-center rounded-lg bg-muted/80 p-1 text-muted-foreground dark:bg-muted/30 `}
      >
        <Button
          variant="radio"
          aria-selected={activeTab === 'work'}
          data-state={activeTab === 'work' ? 'active' : 'inactive'}
          onClick={() => switchTab('work')}
          className=" font-medium overflow-hidden data-[state=active]:bg-background dark:data-[state=active]:bg-muted data-[state=active]:text-foreground data-[state=active]:shadow data-[state=active]:opacity-100 opacity-70 rounded-lg transition-all duration-200 ease-out"
        >
          Work
        </Button>

        <Button
          variant="radio"
          aria-selected={activeTab === 'education'}
          data-state={activeTab === 'education' ? 'active' : 'inactive'}
          onClick={() => switchTab('education')}
          className=" font-medium overflow-hidden  data-[state=active]:bg-background dark:data-[state=active]:bg-muted data-[state=active]:text-foreground data-[state=active]:shadow data-[state=active]:opacity-100 opacity-70 rounded-lg transition-all duration-200 ease-out"
        >
          Education
        </Button>
      </div>

      <div
        className={`
          transition-all sm:duration-50 duration-200 overflow-hidden ease-out
          ${isAnimating
            ? 'opacity-0 scale-95 blur-sm'
            : 'opacity-100 scale-100 blur-0'}
        `}
      >
        <Timeline info={data} />
      </div>
    </div>
  );
};

export default Experience;
