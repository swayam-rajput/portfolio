type Props = {
    title:string,
    child: any;
    progress: number;
};

export const TechStackItem = ({ title,child, progress=50 }: Props) => {
    let col = ''
    if (progress>=25){
        col +=' dark:border-t-slate-500 border-t-slate-300  '
    }if(progress>=50){
        col+= ' dark:border-l-slate-500 border-l-slate-300  '
    }if(progress>=75){
        col+= ' dark:border-b-slate-500 border-b-slate-300  '
    }if(progress>=100){
        col+= ' dark:border-r-slate-500 border-r-slate-300  '
    }
    if(progress<25) col=''
    return (
        <div  className="relative inline-flex  items-center justify-center w-16 h-16 rounded-full">
            <div style={{
        borderColor: `conic-gradient(#4caf50 ${progress * 3.6}deg, #e0e0e0 0deg)`,
      }} className={"absolute inset-0  rounded-full -rotate-45 border-4 dark:border-slate-800 shadow-md border-transparent "+col} ></div>

            <div className="z-10 w-14 h-14  overflow-clip rounded-full flex items-center justify-center ">
                {/* <svg xmlns="http://www.w3.org/2000/svg" className="" fill="none" viewBox="0 0 24 24" stroke="currentColor"> */}
                    {/* <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v8l4 4" /> */}
                {/* <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"> */}
                {child}
            </div>
        </div>

    );
};
