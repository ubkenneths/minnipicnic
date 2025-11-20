import { Card } from "./ui/card";
import { Calendar, Users, Cloud, ShoppingBag } from "lucide-react";

const planningSteps = [
  {
    icon: Calendar,
    title: "Pick Your Date",
    description: "Choose a sunny day and check the weather forecast",
    color: "bg-blue-100 text-blue-600"
  },
  {
    icon: Users,
    title: "Invite Your Crew",
    description: "Gather friends and family for a memorable time",
    color: "bg-purple-100 text-purple-600"
  },
  {
    icon: Cloud,
    title: "Check the Weather",
    description: "Ensure perfect conditions for outdoor fun",
    color: "bg-amber-100 text-amber-600"
  },
  {
    icon: ShoppingBag,
    title: "Pack Your Basket",
    description: "Prepare delicious food and essential supplies",
    color: "bg-green-100 text-green-600"
  }
];

export function PlanningSection() {
  return (
    <section>
      <div className="text-center mb-12">
        <h2 className="mb-4">Plan in 4 Easy Steps</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Follow these simple steps to organize the perfect picnic experience
        </p>
      </div>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {planningSteps.map((step, index) => (
          <Card key={index} className="p-6 hover:shadow-xl transition-shadow">
            <div className={`size-14 rounded-full ${step.color} flex items-center justify-center mb-4`}>
              <step.icon className="size-7" />
            </div>
            <h3 className="mb-2">{step.title}</h3>
            <p className="text-gray-600">{step.description}</p>
          </Card>
        ))}
      </div>
    </section>
  );
}
