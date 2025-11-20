import { useState } from "react";
import { Card } from "./ui/card";
import { Checkbox } from "./ui/checkbox";
import { Badge } from "./ui/badge";
import { ClipboardList } from "lucide-react";

const defaultItems = [
  { id: "blanket", label: "Picnic blanket or mat", category: "essentials" },
  { id: "basket", label: "Picnic basket or cooler", category: "essentials" },
  { id: "plates", label: "Plates and utensils", category: "essentials" },
  { id: "napkins", label: "Napkins and wet wipes", category: "essentials" },
  { id: "drinks", label: "Water and beverages", category: "food" },
  { id: "sandwiches", label: "Sandwiches or wraps", category: "food" },
  { id: "fruits", label: "Fresh fruits", category: "food" },
  { id: "snacks", label: "Chips and snacks", category: "food" },
  { id: "sunscreen", label: "Sunscreen", category: "extras" },
  { id: "bug-spray", label: "Bug spray", category: "extras" },
  { id: "games", label: "Outdoor games", category: "extras" },
  { id: "speaker", label: "Portable speaker", category: "extras" },
];

export function Checklist() {
  const [checkedItems, setCheckedItems] = useState<Set<string>>(new Set());

  const toggleItem = (id: string) => {
    const newChecked = new Set(checkedItems);
    if (newChecked.has(id)) {
      newChecked.delete(id);
    } else {
      newChecked.add(id);
    }
    setCheckedItems(newChecked);
  };

  const progress = Math.round((checkedItems.size / defaultItems.length) * 100);

  return (
    <section>
      <div className="text-center mb-12">
        <div className="flex items-center justify-center gap-3 mb-4">
          <ClipboardList className="size-8 text-green-600" />
          <h2>Picnic Checklist</h2>
        </div>
        <p className="text-gray-600 max-w-2xl mx-auto mb-4">
          Don't forget anything! Check off items as you pack
        </p>
        <div className="max-w-md mx-auto">
          <div className="flex items-center gap-4 mb-2">
            <div className="flex-1 h-3 bg-gray-200 rounded-full overflow-hidden">
              <div 
                className="h-full bg-green-600 transition-all duration-300"
                style={{ width: `${progress}%` }}
              />
            </div>
            <span className="text-green-600">{progress}%</span>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        <Card className="p-6">
          <div className="flex items-center gap-2 mb-4">
            <Badge variant="default" className="bg-red-100 text-red-700 hover:bg-red-100">
              Essentials
            </Badge>
          </div>
          <div className="space-y-3">
            {defaultItems.filter(item => item.category === "essentials").map(item => (
              <div key={item.id} className="flex items-center gap-3">
                <Checkbox
                  id={item.id}
                  checked={checkedItems.has(item.id)}
                  onCheckedChange={() => toggleItem(item.id)}
                />
                <label
                  htmlFor={item.id}
                  className={`cursor-pointer ${
                    checkedItems.has(item.id) ? 'line-through text-gray-400' : ''
                  }`}
                >
                  {item.label}
                </label>
              </div>
            ))}
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex items-center gap-2 mb-4">
            <Badge variant="default" className="bg-orange-100 text-orange-700 hover:bg-orange-100">
              Food & Drinks
            </Badge>
          </div>
          <div className="space-y-3">
            {defaultItems.filter(item => item.category === "food").map(item => (
              <div key={item.id} className="flex items-center gap-3">
                <Checkbox
                  id={item.id}
                  checked={checkedItems.has(item.id)}
                  onCheckedChange={() => toggleItem(item.id)}
                />
                <label
                  htmlFor={item.id}
                  className={`cursor-pointer ${
                    checkedItems.has(item.id) ? 'line-through text-gray-400' : ''
                  }`}
                >
                  {item.label}
                </label>
              </div>
            ))}
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex items-center gap-2 mb-4">
            <Badge variant="default" className="bg-blue-100 text-blue-700 hover:bg-blue-100">
              Extras
            </Badge>
          </div>
          <div className="space-y-3">
            {defaultItems.filter(item => item.category === "extras").map(item => (
              <div key={item.id} className="flex items-center gap-3">
                <Checkbox
                  id={item.id}
                  checked={checkedItems.has(item.id)}
                  onCheckedChange={() => toggleItem(item.id)}
                />
                <label
                  htmlFor={item.id}
                  className={`cursor-pointer ${
                    checkedItems.has(item.id) ? 'line-through text-gray-400' : ''
                  }`}
                >
                  {item.label}
                </label>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </section>
  );
}
