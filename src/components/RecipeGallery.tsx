import { useState } from "react";
import { Card } from "./ui/card";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Clock, Users, ChefHat } from "lucide-react";

const recipes = {
  appetizers: [
    {
      name: "Caprese Skewers",
      time: "15 min",
      servings: 6,
      difficulty: "Easy",
      image: "caprese skewers"
    },
    {
      name: "Veggie Spring Rolls",
      time: "20 min",
      servings: 4,
      difficulty: "Medium",
      image: "spring rolls"
    }
  ],
  mains: [
    {
      name: "Club Sandwiches",
      time: "10 min",
      servings: 4,
      difficulty: "Easy",
      image: "club sandwich"
    },
    {
      name: "Pasta Salad",
      time: "25 min",
      servings: 8,
      difficulty: "Easy",
      image: "pasta salad"
    }
  ],
  desserts: [
    {
      name: "Fruit Tart",
      time: "30 min",
      servings: 8,
      difficulty: "Medium",
      image: "fruit tart"
    },
    {
      name: "Chocolate Brownies",
      time: "45 min",
      servings: 12,
      difficulty: "Easy",
      image: "brownies"
    }
  ]
};

export function RecipeGallery() {
  const [activeTab, setActiveTab] = useState<keyof typeof recipes>("appetizers");

  return (
    <section id="recipes" className="py-16">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-light tracking-wide text-slate-800 mb-4">
          Delicious <span className="font-serif italic">Creations</span>
        </h2>
        <p className="text-slate-500 text-lg max-w-2xl mx-auto">
          Recipes crafted with love for outdoor dining
        </p>
      </div>

      <div className="flex justify-center mb-12">
        <div className="inline-flex bg-slate-50 rounded-full p-1.5 border border-slate-200">
          <button
            onClick={() => setActiveTab("appetizers")}
            className={`px-8 py-3 rounded-full transition-all text-sm tracking-wide ${
              activeTab === "appetizers"
                ? "bg-white shadow-sm text-slate-800"
                : "text-slate-500 hover:text-slate-700"
            }`}
          >
            Appetizers
          </button>
          <button
            onClick={() => setActiveTab("mains")}
            className={`px-8 py-3 rounded-full transition-all text-sm tracking-wide ${
              activeTab === "mains"
                ? "bg-white shadow-sm text-slate-800"
                : "text-slate-500 hover:text-slate-700"
            }`}
          >
            Mains
          </button>
          <button
            onClick={() => setActiveTab("desserts")}
            className={`px-8 py-3 rounded-full transition-all text-sm tracking-wide ${
              activeTab === "desserts"
                ? "bg-white shadow-sm text-slate-800"
                : "text-slate-500 hover:text-slate-700"
            }`}
          >
            Desserts
          </button>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-10">
        {recipes[activeTab].map((recipe, index) => (
          <div key={index} className="bg-white rounded-3xl overflow-hidden hover:shadow-lg transition-all duration-500 hover:-translate-y-2 border border-slate-100">
            <div className="relative h-72 overflow-hidden">
              <ImageWithFallback
                src={`https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800&h=600&fit=crop`}
                alt={recipe.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-6 right-6 px-4 py-2 bg-white/95 backdrop-blur-sm rounded-full text-sm flex items-center gap-2 shadow-sm">
                <ChefHat className="size-4 text-slate-600" strokeWidth={1.5} />
                <span className="text-slate-700">{recipe.difficulty}</span>
              </div>
            </div>
            <div className="p-8">
              <h3 className="text-2xl font-light mb-6 text-slate-800">{recipe.name}</h3>
              <div className="flex gap-8 text-slate-500 text-sm">
                <div className="flex items-center gap-2">
                  <Clock className="size-4" strokeWidth={1.5} />
                  <span>{recipe.time}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="size-4" strokeWidth={1.5} />
                  <span>{recipe.servings} servings</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}