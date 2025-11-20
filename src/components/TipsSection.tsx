import { Card } from "./ui/card";
import { Sun, TreePine, Bug, Trash } from "lucide-react";

const tips = [
  {
    icon: Sun,
    title: "Timing is Everything",
    description: "Plan your picnic for early morning or late afternoon to avoid peak heat",
    color: "bg-yellow-100 text-yellow-600"
  },
  {
    icon: TreePine,
    title: "Find Shade",
    description: "Look for spots with natural shade from trees or bring an umbrella",
    color: "bg-blue-100 text-blue-600"
  },
  {
    icon: Bug,
    title: "Bug Protection",
    description: "Bring bug spray and consider citronella candles for a pest-free experience",
    color: "bg-green-100 text-green-600"
  },
  {
    icon: Trash,
    title: "Leave No Trace",
    description: "Pack trash bags and leave your picnic spot cleaner than you found it",
    color: "bg-pink-100 text-pink-600"
  }
];

export function TipsSection() {
  return (
    <section className="py-16">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-light tracking-wide text-slate-800 mb-4">
          Helpful <span className="font-serif italic">Tips</span>
        </h2>
        <p className="text-slate-500 text-lg max-w-2xl mx-auto">
          Expert advice for a seamless outdoor experience
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {tips.map((tip, index) => (
          <div key={index} className="bg-white rounded-3xl p-8 hover:shadow-lg transition-shadow border border-slate-100">
            <div className={`w-16 h-16 rounded-2xl ${tip.color} flex items-center justify-center mb-6 shadow-sm`}>
              <tip.icon className="size-7" strokeWidth={1.5} />
            </div>
            <h3 className="text-lg font-light mb-3 text-slate-800">{tip.title}</h3>
            <p className="text-slate-500 text-sm leading-relaxed">{tip.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}