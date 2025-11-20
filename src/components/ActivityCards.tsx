import { Card } from "./ui/card";
import { Dumbbell, Gamepad2, Leaf, Music, Palette, Coffee } from "lucide-react";

const activities = [
  {
    icon: Dumbbell,
    title: "Sports & Exercise",
    description: "Frisbee, volleyball, and outdoor fitness activities",
    gradient: "from-red-400 to-orange-500"
  },
  {
    icon: Gamepad2,
    title: "Games",
    description: "Board games, card games, and group activities",
    gradient: "from-blue-400 to-cyan-500"
  },
  {
    icon: Leaf,
    title: "Nature Walks",
    description: "Explore trails and enjoy the scenery",
    gradient: "from-green-400 to-emerald-500"
  },
  {
    icon: Music,
    title: "Music & Dance",
    description: "Bring portable speakers and enjoy the rhythm",
    gradient: "from-purple-400 to-pink-500"
  },
  {
    icon: Palette,
    title: "Arts & Crafts",
    description: "Outdoor painting, sketching, and creative fun",
    gradient: "from-yellow-400 to-orange-500"
  },
  {
    icon: Coffee,
    title: "Relaxation",
    description: "Read, meditate, or simply unwind in nature",
    gradient: "from-indigo-400 to-purple-500"
  }
];

export function ActivityCards() {
  return (
    <section id="activities" className="py-16">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-light tracking-wide text-slate-800 mb-4">
          Moments of <span className="font-serif italic">Joy</span>
        </h2>
        <p className="text-slate-500 text-lg max-w-2xl mx-auto">
          Activities to fill your day with laughter and connection
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {activities.map((activity, index) => (
          <div key={index} className="bg-white rounded-3xl p-8 hover:shadow-lg transition-all duration-500 hover:-translate-y-2 cursor-pointer group border border-slate-100">
            <div className={`w-20 h-20 rounded-full bg-gradient-to-br ${activity.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 shadow-sm`}>
              <activity.icon className="size-9 text-white" strokeWidth={1.5} />
            </div>
            <h3 className="text-xl font-light mb-3 text-slate-800">{activity.title}</h3>
            <p className="text-slate-500 leading-relaxed">{activity.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}