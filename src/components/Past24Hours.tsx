import type { ElementType } from "react";

import {
    Cloud,
    CloudMoon,
    CloudSun,
    History,
    Sun,
    Wind
} from "lucide-react"


import { Separator } from "@/components/ui/separator"


type HourWeather = {
    time:string
    temp:string
    wind:string
    icon:ElementType
    iconClassName:string
    active?:boolean
}


const past24Hours: HourWeather[] = [
    {
        time:"11:00",
        temp:"14°C",
        wind:"12 km/h",
        icon:Cloud,
        iconClassName: "fill-sky-100 text-slate-500"
    },
    {
        time: "14:00",
        temp: "16°C",
        wind: "13 km/h",
        icon: Cloud,
        iconClassName: "fill-sky-100 text-slate-500",
    },
    {
        time: "17:00",
        temp: "17°C",
        wind: "15 km/h",
        icon: CloudSun,
        iconClassName: "fill-sky-100 text-yellow-500",
    },
    {
        time: "20:00",
        temp: "15°C",
        wind: "11 km/h",
        icon: Cloud,
        iconClassName: "fill-sky-100 text-slate-500",
    },
    {
        time: "23:00",
        temp: "13°C",
        wind: "9 km/h",
        icon: CloudMoon,
        iconClassName: "fill-sky-100 text-slate-500",
    },
    {
        time: "02:00",
        temp: "11°C",
        wind: "9 km/h",
        icon: CloudMoon,
        iconClassName: "fill-blue-100 text-slate-500",
    },
    {
        time: "05:00",
        temp: "10°C",
        wind: "7 km/h",
        icon: CloudMoon,
        iconClassName: "fill-blue-100 text-slate-500",
    },
    {
        time: "08:00",
        temp: "12°C",
        wind: "9 km/h",
        icon: Sun,
        iconClassName: "fill-yellow-300 text-yellow-500",
    },
    {
        time: "Now",
        temp: "18°C",
        wind: "14 km/h",
        icon: Sun,
        iconClassName: "fill-yellow-300 text-yellow-500",
        active: true,
    },
]

export function Past24Hours(){
    return (
        <section className="mt-7 rounded-[24px] border border-white/80 bg-white/65 p-5 shadow-[0_18px_50px_rgba(88,130,180,0.14)] backdrop-blur-xl md:p-6">
            <div className="flex items-center gap-3">
                <History className="w-5 h-5 shrink-0 text-slate-500" strokeWidth={1.8} />

                <h2 className="text-lg font-bold tracking-[-0.03rem] ">
                    Past 24 Hours
                </h2>

                <Separator className="ml-4 flex-1 bg-blue-100"/>
            </div>

            <div className="mt-5 flex items-center justify-between px-1 text-xs font-medium">
                <span className="text-slate-500" >24 Hours ago</span>
                <span className="text-blue">Now</span>
            </div>

            <div className="mt-5 flex gap-3 overflow-x-auto pb-1">
                Hello
            </div>
        </section>   
    )
}


function PastHourCard({ item }: { item:HourWeather }){
    const Icon = item.icon

    return (
        <div>
            hello

            <p>

            </p>

            <Icon />

            <p>

            </p>

            <div>
                <Wind />
                <span></span>
            </div>
        </div>
    )

}