import { Card } from "./ui/card";
import { Cloud, CloudRain, Sun, Wind, Droplets } from "lucide-react";

const weatherData = [
  { day: "Monday", temp: 75, condition: "Sunny", icon: Sun, color: "text-yellow-500" },
  { day: "Tuesday", temp: 72, condition: "Breezy", icon: Wind, color: "text-blue-500" },
  { day: "Wednesday", temp: 68, condition: "Partly Cloudy", icon: Cloud, color: "text-slate-400" },
  { day: "Thursday", temp: 65, condition: "Rainy", icon: CloudRain, color: "text-blue-600" },
];

export function WeatherCard() {
  return (
    <section id="weather" className="py-16">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-light tracking-wide text-slate-800 mb-4">
          Plan with <span className="font-serif italic">Confidence</span>
        </h2>
        <p className="text-slate-500 text-lg max-w-2xl mx-auto">
          Seven days of sunshine and smiles ahead
        </p>
      </div>

      <div className="bg-gradient-to-br from-sky-50 via-blue-50 to-cyan-50 rounded-3xl p-10 shadow-sm">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {weatherData.map((day, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 text-center shadow-sm hover:shadow-md transition-shadow">
              <p className="text-slate-500 text-sm tracking-wide mb-6">{day.day}</p>
              <day.icon className={`size-16 mx-auto mb-6 ${day.color}`} strokeWidth={1.5} />
              <div className="text-4xl font-light mb-3 text-slate-800">{day.temp}°</div>
              <div className="text-sm text-slate-600">
                {day.condition}
              </div>
            </div>
          ))}
        </div>

        <div className="flex items-center justify-center gap-12 text-slate-600 pt-8 border-t border-slate-200/50">
          <div className="flex items-center gap-3">
            <Wind className="size-5 text-sky-500" strokeWidth={1.5} />
            <span className="text-sm">5-10 mph breeze</span>
          </div>
          <div className="flex items-center gap-3">
            <Droplets className="size-5 text-sky-500" strokeWidth={1.5} />
            <span className="text-sm">45% humidity</span>
          </div>
        </div>
      </div>
    </section>
  );
}