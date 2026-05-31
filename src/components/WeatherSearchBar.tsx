import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button"

export function WeatherSearchBar(){
    return (
        <div className="flex flex-col gap-4 md:flex-row">
            <div className="relative flex-1">
                <Input
                    className = "w-64"
                    placeholder="London, United Kingdom"
                />
                <Button className="bg-blue-600">Button</Button>

        </div>

        </div>


    );
}