// src/components/WeatherSearchBar.tsx

import { MapPin, RefreshCw, X } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

type WeatherSearchBarProps = {
  location: string
  onLocationChange: (value: string) => void
  onSearch: () => void
  onRefresh: () => void
  isRefreshing?: boolean
}

export function WeatherSearchBar({
  location,
  onLocationChange,
  onSearch,
  onRefresh,
  isRefreshing = false,
}: WeatherSearchBarProps) {
  function handleSubmit(event: React.SyntheticEvent<HTMLFormElement>) {
    event.preventDefault()
    onSearch()
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-[32px] border border-white/80 bg-white/70 p-4 shadow-[0_24px_70px_rgba(88,130,180,0.18)] backdrop-blur-xl"
    >
      <div className="flex flex-col gap-4 md:flex-row">
        <div className="relative flex-1">
          <MapPin className="pointer-events-none absolute left-6 top-1/2 size-7 -translate-y-1/2 text-slate-500" />

          <Input
            value={location}
            onChange={(event) => onLocationChange(event.target.value)}
            placeholder="Enter location"
            className="
              h-[72px]
              rounded-[24px]
              border-white/80
              bg-white/55
              pl-16
              pr-16
              text-[22px]
              font-medium
              text-slate-900
              shadow-[inset_0_1px_1px_rgba(255,255,255,0.9),0_10px_30px_rgba(105,140,180,0.10)]
              outline-none
              placeholder:text-slate-400
              focus-visible:ring-2
              focus-visible:ring-blue-300/70
              focus-visible:ring-offset-0
            "
          />

          {location && (
            <button
              type="button"
              onClick={() => onLocationChange("")}
              aria-label="Clear location"
              className="
                absolute
                right-6
                top-1/2
                flex
                size-8
                -translate-y-1/2
                items-center
                justify-center
                rounded-full
                text-slate-500
                transition
                hover:bg-slate-200/60
                hover:text-slate-800
              "
            >
              <X className="size-7" />
            </button>
          )}
        </div>

        {/* <Button
          type="submit"
          className="h-[72px] rounded-[22px] bg-slate-900 px-8 text-[22px] font-medium text-white hover:bg-slate-800"
        >
          Search
        </Button> */}

        <Button
          type="button"
          onClick={onRefresh}
          disabled={isRefreshing}
          className="
            h-[72px]
            rounded-[22px]
            bg-blue-500
            px-8
            text-[22px]
            font-medium
            text-white
            shadow-[0_16px_35px_rgba(37,99,235,0.28)]
            transition
            hover:bg-blue-600
            disabled:cursor-not-allowed
            disabled:opacity-70
          "
        >
          <RefreshCw
            className={`mr-3 size-6 ${isRefreshing ? "animate-spin" : ""}`}
          />
          Refresh
        </Button>
      </div>
    </form>
  )
}