import type { ElementType } from "react";
import { Cloud, CloudRain, CloudSun, History,Sun,Wind } from "lucide-react";
import { Separator } from "@/components/ui/separator";

type FutureHourWeather = {
    time:string,
    temp:string,
    wind:string,
    icon:ElementType,
    iconClassName: string,
    rainChance?:string
}

const next24Hours: FutureHourWeather[] = [
    { time: "11:00", temp: "19°C", wind: "16 km/h", icon: Sun, iconClassName: "fill-yellow-300 text-yellow-500" },
    { time: "14:00", temp: "21°C", wind: "18 km/h", icon: Sun, iconClassName: "fill-yellow-300 text-yellow-500" },
    { time: "17:00", temp: "20°C", wind: "17 km/h", icon: CloudSun, iconClassName: "fill-sky-100 text-yellow-500" },
    { time: "20:00", temp: "17°C", wind: "14 km/h", icon: Cloud, iconClassName: "fill-sky-100 text-slate-400" },
    { time: "23:00", temp: "15°C", wind: "13 km/h", icon: CloudRain, iconClassName: "fill-sky-200 text-blue-400", rainChance: "20%" },
    { time: "02:00", temp: "13°C", wind: "12 km/h", icon: CloudRain, iconClassName: "fill-sky-200 text-blue-400", rainChance: "30%" },
    { time: "05:00", temp: "12°C", wind: "10 km/h", icon: Cloud, iconClassName: "fill-sky-100 text-slate-400", rainChance: "20%" },
    { time: "08:00", temp: "14°C", wind: "12 km/h", icon: CloudSun, iconClassName: "fill-sky-100 text-yellow-500", rainChance: "10%" }, 
]


export function Next24Hours(){
    return (
        <section>
            {/* Header Row */}
            <div>
                <History />
                <h2>Next 24 Hours</h2>
                <Separator />
            </div>
             
            {/* Timeline Range Indicator */}
            <div>
                <span>Now</span>
                <span>+24 Hours</span> 
            </div>

            {/* Horizontal Scrollable Row Track */}
            <div>
                
            </div>
        </section>
    )
}


function NextHourCard({ item }:{ item:FutureHourWeather }){
    const Icon = item.icon;

    return(
        <div>
            {/* Time */}
            <p>{item.time}</p>

            {/* Weather Condition Icon */}
            <div>
                <Icon />

            </div>

            {/* Temperature */}
            <p>{item.temp}</p>


            {/* Wind Metrics*/}
            <div>
                <Wind />
                <span>{item.wind}</span>
            </div>

            {/* Rain Chance Field */}
            <div>

            </div>
        </div>
    );
}