import React from "react";
import SideNav from "../ui/dashboard/sidenav";
import '@/app/ui/global.css';
import { inter } from "@/app/ui/fonts";



export const experimental_ppr = true; // Enable Partial Page Rendering (PPR)

export default function Layout({ children } : { children: React.ReactNode }) {
    return (
        <div className={`flex h-screen flex-col md:flex-row md:overflow-hidden ${inter.className}`}>
            <div className="w-full flex-none md:w-64">
                <SideNav />
            </div>
            <div className="flex-grow p-6 md:overflow-y-auto md:p-12">{children}</div>
        </div>
    );
}