import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Timeline } from "./Timeline";
import { useState } from "react";
import career from "@/app/data/work.json";

const Experience = () => {
  const [activeTab, setActiveTab] = useState<'work' | 'education'>('work');

  return (
    <div className="flex flex-col mx-1 mt-6 mb-6">
      <Tabs
        defaultValue="work"
        value={activeTab}
        onValueChange={(value) => setActiveTab(value as 'work' | 'education')}
        className="-z-0"
      >
        <TabsList variant="default" className="w-full mb-2 h-12 justify-center rounded-xl p-1 dark:bg-muted/50">
          <TabsTrigger value="work" className="data-[state=active]:border-destructive hover:text-foreground data-[state=active]:text-foreground  dark:hover:text-foreground dark:data-[state=active]:text-foreground font-medium">
            Work
          </TabsTrigger>
          <TabsTrigger value="education" className="data-[state=active]:border-destructive hover:text-foreground data-[state=active]:text-foreground  dark:hover:text-foreground dark:data-[state=active]:text-foreground font-medium">
            Education
          </TabsTrigger>
        </TabsList>

        <TabsContent value="work">
          <Timeline info={career.career} />
        </TabsContent>

        <TabsContent value="education">
          <Timeline info={career.education} />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Experience;
