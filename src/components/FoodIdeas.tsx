import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { UtensilsCrossed } from "lucide-react";

const foodIdeas = [
  {
    name: "Classic Sandwiches",
    description: "Easy to prepare and always a crowd-pleaser",
    tags: ["Easy", "Popular"],
    image: "https://images.unsplash.com/photo-1596241913242-b20788b3dfeb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaWNuaWMlMjBiYXNrZXQlMjBmb29kfGVufDF8fHx8MTc2MzUyNjY3OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  {
    name: "Fresh Fruit Platter",
    description: "Refreshing watermelon, berries, and grapes",
    tags: ["Healthy", "Refreshing"],
    image: "https://images.unsplash.com/photo-1647733476466-d4ccc0efc0be?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdW1tZXIlMjBwaWNuaWMlMjBzdW5zaGluZXxlbnwxfHx8fDE3NjM1MjY2Nzh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  {
    name: "Cheese & Crackers",
    description: "Variety of cheeses with artisan crackers",
    tags: ["Gourmet", "No Cook"],
    image: "https://images.unsplash.com/photo-1679673988595-4df8d5394f38?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvdXRkb29yJTIwcGFyayUyMG5hdHVyZXxlbnwxfHx8fDE3NjM1MjY2Nzh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  }
];

export function FoodIdeas() {
  return (
    <section>
      <div className="text-center mb-12">
        <div className="flex items-center justify-center gap-3 mb-4">
          <UtensilsCrossed className="size-8 text-orange-600" />
          <h2>Delicious Food Ideas</h2>
        </div>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Get inspired with these picnic-perfect food suggestions
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {foodIdeas.map((food, index) => (
          <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow group">
            <div className="relative h-64 overflow-hidden">
              <ImageWithFallback
                src={food.image}
                alt={food.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="p-6">
              <h3 className="mb-2">{food.name}</h3>
              <p className="text-gray-600 mb-4">{food.description}</p>
              <div className="flex gap-2">
                {food.tags.map((tag, tagIndex) => (
                  <Badge key={tagIndex} variant="secondary">
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}
