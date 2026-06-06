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
        <section>
            <div>
                <History />

                <h2>
                    Past 24 Hours
                </h2>

                <Separator />
            </div>

            <div>
                <span>24 Hours ago</span>
                <span>Now</span>
            </div>

            <div>

            </div>
        </section>   
    )
}