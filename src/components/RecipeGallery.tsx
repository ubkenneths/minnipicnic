import { useState } from "react";
import { Card } from "./ui/card";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Clock, Users, ChefHat } from "lucide-react";

import redTheme from '/src/assets/red-theme.png';
import seasideBlueTheme from '/src/assets/seaside-blue-theme.png';


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
    <section id="recipes" className="">
      <div className="pb-16 py-md-16 pt-sm-only-8">
        <div className="text-center mb-8 mb-md-16">
          {/* <h2 className="packages-title font-light tracking-wide text-slate-800 mb-4">
            <span className="font-serif italic">What's included in your base Luxury Picnic?</span>
          </h2> */}
          <h2 class="text-4xl font-light tracking-wide text-slate-800 mb-4">
            What's included in your <span class="font-serif italic">Base Luxury Picnic?</span>
          </h2>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto italic">
            Additional Add-Ons can be found when booking
          </p>

          
            {/* <div className="package-drink-options">
                <span className="text-slate-500 drinks-title">Drinks (Choose One):</span>
                <div>
                  <span className="package-items">Drinking Water</span>
                  <span className="package-items">Sparkling Water</span>
                  <span className="package-items">Carbonated Drinks</span>
                  <span className="package-items">Non-alcoholic Sparkling Tea</span>
                  <span className="package-items">Lemonade</span>
                  <span className="package-items">Soda</span>
                </div>
              </div> */}
        </div>

        <div className="package-content text-center">
            <span className="package-items">Picnic Blanket and Mat</span>
            <span className="package-items">Multiple Pillows</span>
            <span className="package-items">Extensive Decor</span>
            <span className="package-items">Small Plates</span>
            <span className="package-items">Cutlery</span>
            <span className="package-items">Wine Glasses</span>
            <span className="package-items">Napkins</span>
            <span className="package-items">Dried Floral Arrangement</span>
            <span className="package-items">Umbrella & Umbrella Stand</span>
            <span className="package-items">Drinking Water</span>
            <span className="package-items">Bakery - small assortments</span>
          </div>
      </div>

      

      

      {/* <div className="flex justify-center mb-12">
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
      </div> */}

      {/* <h2 className="packages-select-theme font-light tracking-wide text-slate-800 mb-4">
        <span className="font-serif italic">Available Themes</span>
        

      </h2> */}
      <div className="pb-16 py-md-16">
        <div className="text-center mb-8 mb-md-16">
          <h2 className="text-4xl font-light tracking-wide text-slate-800 mb-4">
            Available <span className="font-serif italic">Themes</span>
          </h2>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto">
            Starting at $300 for 2 hours for up to 2 people
          </p>
        </div>
      
        <div className="grid md:grid-cols-2 gap-10">
          <div className="cursor-pointer bg-white rounded-3xl overflow-hidden hover:shadow-lg transition-all duration-500 hover:-translate-y-2 border border-slate-100">
            <div className="relative overflow-hidden">
              <img className='object-cover img-height' src={redTheme} />
              {/* <div className="absolute top-6 right-6 px-4 py-2 bg-white/95 backdrop-blur-sm rounded-full text-sm flex items-center gap-2 shadow-sm">
                <ChefHat className="size-4 text-slate-600" strokeWidth={1.5} />
                <span className="text-slate-700">$300</span>
              </div> */}
              <div className="p-8">
                  <h3 className="package-name-style font-light mb-6 text-slate-800">December Red</h3>
                  
                  {/*<div className="flex gap-8 text-slate-500 text-sm">
                    <div className="flex items-center gap-2">
                      <Clock className="size-4" strokeWidth={1.5} />
                      <span>2 hours</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="size-4" strokeWidth={1.5} />
                      <span>2-3 people</span>
                    </div>
                  </div> */}
                </div>
            </div>
          </div>
              
          <div className="relative overflow-hidden">
            <div className="cursor-pointer bg-white rounded-3xl overflow-hidden hover:shadow-lg transition-all duration-500 hover:-translate-y-2 border border-slate-100">
              <img className='object-cover img-height' src={seasideBlueTheme} />
              {/* <div className="absolute top-6 right-6 px-4 py-2 bg-white/95 backdrop-blur-sm rounded-full text-sm flex items-center gap-2 shadow-sm">
                <ChefHat className="size-4 text-slate-600" strokeWidth={1.5} />
                <span className="text-slate-700">$300</span>
              </div> */}

              <div className="p-8">
                  <h3 className="package-name-style font-light mb-6 text-slate-800">Seaside Blue</h3>
                  
                  <div className="flex gap-8 text-slate-500 text-sm">
                    {/*<div className="flex items-center gap-2">
                      <Clock className="size-4" strokeWidth={1.5} />
                      <span>2 hours</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="size-4" strokeWidth={1.5} />
                      <span>2-3 people</span>
                    </div>
                    
                  */}</div> 
                </div>
            </div>
          </div>
        </div>

                 

         {/* {recipes[activeTab].map((recipe, index) => (
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
        ))}  */}
      </div>
    </section>
  );
}