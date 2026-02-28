/* eslint-disable react-hooks/rules-of-hooks */
'use client'
import AnimationWrapper from "@/components/ui/animwrapper";
import { Button } from "@/components/ui/button";
import { FormEvent,  useState } from "react";
import React from 'react'

const page = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [isdisabled,setDisabled] = useState(false)
    const handleSubmit= (e:FormEvent)=>{
        e.preventDefault();
        const { name, email, message } = formData;
        if (!name.trim() || !email.trim() || !message.trim()) {
            alert("All fields are required.");
            return;
        }
        setDisabled(true);

        
        const recipient = "sr.dumpinbox@gmail.com";
        const subject = `Message from ${name}`;
        const body = `Name: ${name}\n\nEmail: ${email}\n\nMessage:\n\n${message}`;

        const gmailURL = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
            recipient
        )}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

        window.open(gmailURL, "_blank");

        setFormData({ name: '', email: '', message: '' });
        setDisabled(false);
    }
    
    return (
        <article className="mt-8 flex flex-col gap-8  pb-16">
            <h1 className="title font-spacegrotesk text-2xl md:text-5xl">contact me.</h1>
            <form className="font-spacegrotesk" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                    <div className="md:h-16 h-12">
                        <input required autoComplete="off" onChange={(e) => setFormData({ ...formData, name: e.target.value })} className="flex h-9 w-full rounded-md border border-neutral-300 dark:border-neutral-700/50 focus-visible:border-opacity-100 bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground dark:focus-visible:border-neutral-600 focus-visible:border-neutral-400  focus-visible:outline-none  disabled:cursor-not-allowed disabled:opacity-50" id="name" placeholder="Name"  type="text" name="name"/>
                    </div>
                    <div className="md:h-16 h-12">
                        <input required autoComplete="off" onChange={(e) => setFormData({ ...formData, email: e.target.value })} className="flex h-9 w-full rounded-md border border-neutral-300 dark:border-neutral-700/50  focus-visible:border-opacity-100 bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none dark:focus-visible:border-neutral-600 focus-visible:border-neutral-400   disabled:cursor-not-allowed disabled:opacity-50" id="email" placeholder="Email"  type="email" name="email"/>
                    </div>
                    <div className="h-32 sm:col-span-2">
                        <textarea  onChange={(e) => setFormData({ ...formData, message: e.target.value })} required className="flex min-h-[60px] w-full rounded-md border border-neutral-300 dark:border-neutral-700/50  focus-visible:border-opacity-100 bg-transparent px-3 py-2 text-sm shadow-sm placeholder:text-muted-foreground focus-visible:outline-none dark:focus-visible:border-neutral-600 focus-visible:border-neutral-400  disabled:cursor-not-allowed disabled:opacity-50 resize-none" rows={4} placeholder="Leave feedback about the site, career opportunities or just to say hello"  name="message">
                        </textarea>
                    </div>
                </div>
                <div className="mt-1.5 flex justify-start ">
                    <Button disabled={isdisabled}  className=" group transition active:opacity-80 " variant={"default"} type="submit" >
                        <div className="flex items-center">
                            <span>Send Message</span>
                            <svg width="15" height="15"   viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="group-hover:translate-x-1 group-active:translate-x-10 duration-300 translate-x-0 transition ml-2">

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
