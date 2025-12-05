import { Calendar, MapPin, Utensils } from "lucide-react";
import { Button } from "./ui/button";
import miniPicnicLogo from '/src/assets/mini-picnic-logo.png';

export function Header() {
  return (
    <header className="border-b border-slate-100 bg-white/80 backdrop-blur-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center gap-3">
            {/*<div className="w-12 h-12 rounded-full bg-gradient-to-br from-rose-300 to-pink-200 flex items-center justify-center shadow-sm">
              <Utensils className="size-5 text-rose-700" />
            </div>*/}
            {/*<span className="text-2xl font-light tracking-wide text-slate-800">  </span>*/}
            <img className='object-cover img-height' src={miniPicnicLogo} />
          </div>
          
          <nav className="md:flex items-center gap-10">
            {/*}<a href="#weather" className="text-slate-600 hover:text-rose-500 transition-colors text-sm tracking-wide">
              About Us
            </a>
            */}
            <a className="book-now-link-header bg-rose-500 hover:bg-rose-600 rounded-full shadow-sm" href="https://forms.gle/WFXpeAnaAZ8X1cYQ7" target="_blank">
              Book Now
            </a>
            {/* <a href="#booking" className="text-slate-600 hover:text-rose-500 transition-colors text-sm tracking-wide">
              Book
            </a>
            <a href="#recipes" className="text-slate-600 hover:text-rose-500 transition-colors text-sm tracking-wide">
              Recipes
            </a>
            <a href="#activities" className="text-slate-600 hover:text-rose-500 transition-colors text-sm tracking-wide">
              Activities
            </a> */}
          </nav>

          
        </div>
      </div>
    </header>
  );
}