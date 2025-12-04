import { Button } from "./ui/button";
import { Calendar, Map, Sparkles } from "lucide-react";
import heroImage from 'figma:asset/3eeead790f435e152a5c8496aac24cdb4fb35a4f.png';

import video from '/src/assets/video.mp4';

export function HeroSection() {
  return (
    <section className="relative overflow-hidden h-[85vh] min-h-[600px]">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        {/* <img 
          src={heroImage} 
          alt="Beautiful picnic setup by the ocean"
          className="w-full h-full object-cover"
        /> */}

        <video className="main-video" autoPlay loop muted>
          <source src={video} type="video/mp4"/>
          Your browser does not support the video tag.
        </video>
        
        


        <div className="absolute inset-0 bg-gradient-to-b from-white/10 via-transparent to-white/40"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-center">
        <div className="text-center space-y-6 max-w-4xl">
          <div className="inline-block px-6 py-2 bg-white/90 backdrop-blur-md rounded-full shadow-lg">
            <span className="text-sm tracking-wide text-slate-700">A Luxury Picnic Experience</span>
          </div>
          
          <h1 className="main-title-style text-6xl sm:text-8xl font-light tracking-tight text-white drop-shadow-lg">
            Minni Picnic
          </h1>
          
          <p className="text-lg sm:text-xl text-white/95 max-w-2xl mx-auto leading-relaxed drop-shadow">
            Create unforgettable moments under the open sky with curated themes, beautiful locations, and thoughtful planning
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            {/* <Button size="lg" className="bg-white/95 text-slate-800 hover:bg-white shadow-xl rounded-full px-8">
              Start Planning
            </Button>
            <Button size="lg" variant="ghost" className="text-white hover:bg-white/20 rounded-full px-8 backdrop-blur-sm">
              Explore Ideas
            </Button> */}
          </div>
        </div>
      </div>
    </section>
  );
}