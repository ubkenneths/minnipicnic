import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Button } from "./ui/button";
import { Sun, MapPin } from "lucide-react";

export function Hero() {
  return (
    <div className="relative h-[600px] overflow-hidden">
      <ImageWithFallback
        src="https://images.unsplash.com/photo-1760915170473-d8abc441e229?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaWNuaWMlMjBibGFua2V0JTIwcGFya3xlbnwxfHx8fDE3NjM1MjY2Nzd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
        alt="Picnic blanket in park"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent" />
      
      <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
        <div className="text-white max-w-2xl">
          <div className="flex items-center gap-2 mb-4">
            <Sun className="size-8 text-yellow-400" />
            <span className="px-3 py-1 bg-green-600/80 backdrop-blur-sm rounded-full">
              Perfect Day Awaits
            </span>
          </div>
          <h1 className="mb-6">Plan Your Perfect Picnic</h1>
          <p className="mb-8 text-xl text-gray-100">
            Everything you need to create unforgettable outdoor moments. 
            From delicious food ideas to the perfect location.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button size="lg" className="bg-green-600 hover:bg-green-700">
              <MapPin className="size-5 mr-2" />
              Find Locations
            </Button>
            <Button size="lg" variant="outline" className="bg-white/90 hover:bg-white text-green-800 border-0">
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
