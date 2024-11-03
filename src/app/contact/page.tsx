'use client'
import { Button } from "@/components/ui/button";
import { useState } from "react";

const page = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    

    return (
        <article className="mt-8 flex flex-col gap-8  pb-16">
            <h1 className="title font-quicksand text-5xl">contact me.</h1>
            <form>
                <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                <div className="h-16">
                    <input required onChange={(e) => setFormData({ ...formData, name: e.target.value })} className="flex h-9 w-full rounded-md border border-opacity-0 focus-visible:border-opacity-100 border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground dark:focus-visible:border-slate-600 focus-visible:border-slate-400  focus-visible:outline-none  disabled:cursor-not-allowed disabled:opacity-50" id="name" placeholder="Name"  type="text" name="name"/>
                </div>
                <div className="h-16">
                    <input required onChange={(e) => setFormData({ ...formData, email: e.target.value })} className="flex h-9 w-full rounded-md border border-input border-opacity-0 focus-visible:border-opacity-100 bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none dark:focus-visible:border-slate-600 focus-visible:border-slate-400   disabled:cursor-not-allowed disabled:opacity-50" id="email" placeholder="Email"  type="email" name="email"/>
                </div>
                <div className="h-32 sm:col-span-2">
                    <textarea onChange={(e) => setFormData({ ...formData, message: e.target.value })} required className="flex min-h-[60px] w-full rounded-md border border-input border-opacity-0 focus-visible:border-opacity-100 bg-transparent px-3 py-2 text-sm shadow-sm placeholder:text-muted-foreground focus-visible:outline-none dark:focus-visible:border-slate-600 focus-visible:border-slate-400  disabled:cursor-not-allowed disabled:opacity-50 resize-none" rows={4} placeholder="Leave feedback about the site, career opportunities or just to say hello etc."  name="message">
                    </textarea>
                </div>
                </div>
                <div className="mt-2 flex justify-start ">
                    <Button disabled className="  transition active:opacity-80 " variant={"default"} type="submit">
                    <div className="flex items-center">
                        <span>Send Message</span>
                        <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="ml-2">
                            <path d="M1.20308 1.04312C1.00481 0.954998 0.772341 1.0048 0.627577 1.16641C0.482813 1.32802 0.458794 1.56455 0.568117 1.75196L3.92115 7.50002L0.568117 13.2481C0.458794 13.4355 0.482813 13.672 0.627577 13.8336C0.772341 13.9952 1.00481 14.045 1.20308 13.9569L14.7031 7.95693C14.8836 7.87668 15 7.69762 15 7.50002C15 7.30243 14.8836 7.12337 14.7031 7.04312L1.20308 1.04312ZM4.84553 7.10002L2.21234 2.586L13.2689 7.50002L2.21234 12.414L4.84552 7.90002H9C9.22092 7.90002 9.4 7.72094 9.4 7.50002C9.4 7.27911 9.22092 7.10002 9 7.10002H4.84553Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd">
                            </path>
                        </svg>
                    </div>
                    </Button>
                </div>
            </form>
        </article>
    )
}

export default page;