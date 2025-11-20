import { Card } from "./ui/card";
import { MapPin, Trees, Mountain, Waves } from "lucide-react";

const locations = [
  {
    icon: Trees,
    name: "Local Parks",
    description: "Find nearby parks with picnic areas, shade trees, and playground facilities",
    features: ["Picnic tables", "Restrooms", "Parking"]
  },
  {
    icon: Mountain,
    name: "Scenic Viewpoints",
    description: "Elevated spots with breathtaking views perfect for sunset picnics",
    features: ["Great views", "Photo spots", "Hiking trails"]
  },
  {
    icon: Waves,
    name: "Lakeside & Beaches",
    description: "Waterfront locations for swimming, relaxing, and beach games",
    features: ["Water access", "Beach activities", "Scenic beauty"]
  }
];

export function LocationSuggestions() {
  return (
    <section>
      <div className="text-center mb-12">
        <div className="flex items-center justify-center gap-3 mb-4">
          <MapPin className="size-8 text-blue-600" />
          <h2>Perfect Picnic Spots</h2>
        </div>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Discover ideal locations for your outdoor gathering
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {locations.map((location, index) => (
          <Card key={index} className="p-6 hover:shadow-xl transition-shadow">
            <div className="size-14 rounded-full bg-gradient-to-br from-green-400 to-emerald-600 flex items-center justify-center mb-4">
              <location.icon className="size-7 text-white" />
            </div>
            <h3 className="mb-3">{location.name}</h3>
            <p className="text-gray-600 mb-4">{location.description}</p>
            <div className="space-y-2">
              {location.features.map((feature, featureIndex) => (
                <div key={featureIndex} className="flex items-center gap-2 text-gray-700">
                  <div className="size-1.5 rounded-full bg-green-600" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}
