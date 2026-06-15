import "./App.css"
import { useState } from "react"
import { CurrentWeatherHero } from "./components/CurrentWeatherHero"
import { WeatherSearchBar } from "./components/WeatherSearchBar"
import { Past24Hours } from "./components/Past24Hours"
import { Next24Hours } from "./components/Next24Hours"

function App() {
  const [location, setLocation] = useState("London, United Kingdom")
  const [isRefreshing, setIsRefreshing] = useState(false)

  function handleSearch() {
    console.log("Search location:", location)
  }

  function handleRefresh() {
    setIsRefreshing(true)

    // later call the weather api here
    console.log("Refresh weather for:", location)

    setTimeout(() => {
      setIsRefreshing(false)
    }, 800)
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-sky-100 via-white to-blue-100 p-5 text-slate-900 md:p-8">
      <section className="mx-auto max-w-7xl">
        <WeatherSearchBar
          location={location}
          onLocationChange={setLocation}
          onSearch={handleSearch}
          onRefresh={handleRefresh}
          isRefreshing={isRefreshing}
        />

        <CurrentWeatherHero />

        <Past24Hours />

        <Next24Hours />
      </section>
    </main>
  )
}

export default App