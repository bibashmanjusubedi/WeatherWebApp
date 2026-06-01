import './App.css'
import { useState } from "react"
import { WeatherSearchBar } from "./components/WeatherSearchBar";

function App() {
  const [location,setLocation] = useState("London, UnitedKingDom");
  const [refreshing,isRefreshing] = useState(false);

  function handleSearch(){
    console.log("Search location:",location);
  }

  async function handleRefresh(){
    setIsRefreshing(true);

    // later call the weather api here
    console.log("Refresh weather for : ", location);

    setTimeout(() => {
      setIsRefreshing(false);      
    },800);
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
      </section>
    </main>
  )
}

export default App
