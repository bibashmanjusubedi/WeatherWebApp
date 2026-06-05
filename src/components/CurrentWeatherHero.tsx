import { CloudSun, Droplets, Sun, Thermometer, Wind } from "lucide-react";

import { Separator } from "@/components/ui/separator";

export function CurrentWeatherHero() {
  return (
    <section className="mt-7 overflow-hidden rounded-[32px] border border-white/80 bg-gradient-to-br from-sky-200 via-sky-100 to-white p-6 shadow-[0_24px_70px_rgba(88,130,180,0.18)] md:p-8">
      <div className="relative min-h-[360px] overflow-hidden rounded-[26px] bg-[radial-gradient(circle_at_88%_15%,rgba(255,244,180,0.95)_0,rgba(255,244,180,0.45)_8%,transparent_22%),linear-gradient(135deg,rgba(186,220,255,0.95),rgba(239,248,255,0.9)_55%,rgba(255,255,255,0.95))] p-8 md:min-h-[430px] md:p-12">
        <div className="pointer-events-none absolute left-[25%] top-[15%] h-28 w-64 rounded-full bg-white/55 blur-xl" />
        <div className="pointer-events-none absolute left-[34%] top-[20%] h-20 w-52 rounded-full bg-white/45 blur-2xl" />
        <div className="pointer-events-none absolute right-10 top-10 size-36 rounded-full bg-yellow-100/45 blur-3xl" />

        <div className="relative grid h-full gap-8 md:grid-cols-[240px_1fr] md:items-end">
          <div>
            <Sun
              className="size-32 fill-yellow-300 text-yellow-400 drop-shadow-[0_8px_18px_rgba(245,158,11,0.35)] md:size-36"
              strokeWidth={1.7}
            />

            <div className="mt-8 flex items-start">
              <h1 className="text-[86px] font-bold leading-none tracking-[-0.06em] text-slate-950 md:text-[108px]">
                18
              </h1>

              <span className="ml-2 mt-4 text-[36px] font-bold leading-none text-slate-950md md:text-[42px]">
                °C
              </span>
            </div>

            <p className="mt-5 text-[34px] font-semibold leading-none tracking-[-0.04em] text-slate-950 md:text-[42px]">
              Sunny
            </p>
          </div>

          <div className="rounded-[28px] border border-white/80 bg-white/65 p-5 shadow-[0_18px_45px_rgba(88,130,180,0.14)] backdrop-blur-xl md:mb-4">
            <div className="grid grid-cols-2 gap-y-6 md:grid-cols-[1fr_auto_1fr_auto_1fr_auto_1fr] md:items-center">
              <WeatherMetric
                icon={
                  <Thermometer
                    className="size-10 text-blue-500"
                    strokeWidth={1.8}
                  />
                }
                label="Temperature"
                value="18°C"
                description="Feels like 18°C"
              />

              <Separator
                orientation="vertical"
                className="hidden h-36 bg-slate-200/70 md:block"
              />

              <WeatherMetric
                icon={
                  <Wind className="size-10 text-blue-500" strokeWidth={1.8} />
                }
                label="Wind Speed"
                value="14 km/h"
                description="NW"
              />

              <Separator
                orientation="vertical"
                className="hidden h-36 bg-slate-200/70 md:block"
              />

              <WeatherMetric
                icon={
                  <Droplets
                    className="size-10 fill-blue-400 text-blue-500"
                    strokeWidth={1.8}
                  />
                }
                label="Rain Chance"
                value="10%"
                description="Low"
              />

              <Separator
                orientation="vertical"
                className="hidden h-36 bg-slate-200/70 md:block"
              />

              <WeatherMetric
                icon={
                  <CloudSun
                    className="size-10 text-blue-500"
                    strokeWidth={1.8}
                  />
                }
                label="Conditions"
                value="Sunny"
                description="Clear skies"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

type WeatherMetricProps = {
  icon: React.ReactNode;
  label: string;
  value: string;
  description: string;
};

function WeatherMetric({ icon, label, value, description }:WeatherMetricProps) {
  return (
    <div className="flex flex-col items-center px-3 text-center">
      {icon}
      <p className="mt-4 text-sm font-semibold text-slate-700">{label}</p>

      <p className="mt-3 text-2xl font-bold tracking-[-0.03em] text-slate-950">
        {value}
      </p>

      <p className="mt-2 text-sm font-medium text-slate-500">{description}</p>
    </div>
  );
}
