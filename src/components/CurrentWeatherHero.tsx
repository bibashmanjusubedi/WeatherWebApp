import {
    CloudSun,
    Droplets,
    Sun,
    Thermometer,
    Wind
} from "lucide-react";

import { Separator } from "@/components/ui/separator";

export function CurrentWeatherHero(){
    return(
        <section className="mt-7 overflow-hidden rounded-[32px] border border-white/80 bg-gradient-to-br from-sky-200 via-sky-100 to-white p-6 shadow-[0_24px_70px_rgba(88,130,180,0.18)] md:p-8">
            <div className="relative min-h-[360px] overflow-hidden rounded-[26px] bg-[radial-gradient(circle_at_88%_15%,rgba(255,244,180,0.95)_0,rgba(255,244,180,0.45)_8%,transparent_22%),linear-gradient(135deg,rgba(186,220,255,0.95),rgba(239,248,255,0.9)_55%,rgba(255,255,255,0.95))] p-8 md:min-h-[430px] md:p-12">
                <div className = "pointer-events-none absolute left-[25%] top-[15%] h-28 w-64 rounded-full bg-white/55 blur-xl"/>
                <div className="pointer-events-none absolute left-[34%] top-[20%] h-20 w-52 rounded-full bg-white/45 blur-2xl" />
                <div className="pointer-events-none absolute right-10 top-10 size-36 rounded-full bg-yellow-100/45 blur-3xl" />
            </div>
        </section>
    )
}