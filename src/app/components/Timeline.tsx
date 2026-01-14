import TimelineItem from "./TimelineItem";

interface Prop{
    info:Object[]
}
export const Timeline = ({info}:Prop) => {
    
    return (
        <div data-state="active" data-orientation="horizontal" role="tabpanel" aria-labelledby="radix-:Rkv5kq:-trigger-work" id="radix-:Rkv5kq:-content-work"  className="mt-2 ring-offset-background overflow-hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2" >
            <div className="rounded-xl border bg-card text-card-foreground shadow">
                <div className="p-0">
                    <ul className="ml-10 pr-4 border-l -z-40">
                        {info.map((data,idx)=>(
                            <TimelineItem name={""} href={""} title={""} logo={{
                                src: "",
                                type:"",
                                alt: ""
                            }} start={""} key={idx} {...data}/>

                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}