import { useState } from "react";
import { Card } from "./ui/card";
import { Checkbox } from "./ui/checkbox";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Package, Trash2, Plus } from "lucide-react";

const defaultItems = [
  "Picnic blanket",
  "Cooler or basket",
  "Plates and utensils",
  "Napkins",
  "Cups and beverages",
  "Sunscreen",
  "Bug spray",
  "Trash bags"
];

export function PackingList() {
  const [items, setItems] = useState(defaultItems);
  const [checkedItems, setCheckedItems] = useState<Set<string>>(new Set());
  const [newItem, setNewItem] = useState("");

  const toggleItem = (item: string) => {
    const newChecked = new Set(checkedItems);
    if (newChecked.has(item)) {
      newChecked.delete(item);
    } else {
      newChecked.add(item);
    }
    setCheckedItems(newChecked);
  };

  const addItem = () => {
    if (newItem.trim()) {
      setItems([...items, newItem.trim()]);
      setNewItem("");
    }
  };

  const deleteItem = (item: string) => {
    setItems(items.filter(i => i !== item));
    const newChecked = new Set(checkedItems);
    newChecked.delete(item);
    setCheckedItems(newChecked);
  };

  const progress = Math.round((checkedItems.size / items.length) * 100);

  return (
    <section className="py-16">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-light tracking-wide text-slate-800 mb-4">
          Packing <span className="font-serif italic">Essentials</span>
        </h2>
        <p className="text-slate-500 text-lg max-w-2xl mx-auto">
          Everything you need for the perfect day outdoors
        </p>
      </div>

      <div className="bg-white rounded-3xl p-10 max-w-3xl mx-auto shadow-sm border border-slate-100">
        <div className="mb-10 pb-8 border-b border-slate-100">
          <div className="flex items-center justify-between mb-3 text-sm">
            <span className="text-slate-500 tracking-wide">Progress</span>
            <span className="text-rose-500">{progress}% Complete</span>
          </div>
          <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-rose-400 to-pink-500 transition-all duration-500"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-4 mb-8">
          {items.map((item) => (
            <div 
              key={item}
              className="flex items-center gap-4 p-4 rounded-2xl hover:bg-slate-50 group transition-colors"
            >
              <Checkbox
                id={item}
                checked={checkedItems.has(item)}
                onCheckedChange={() => toggleItem(item)}
                className="rounded-md"
              />
              <label
                htmlFor={item}
                className={`flex-1 cursor-pointer transition-all ${
                  checkedItems.has(item) ? 'line-through text-slate-400' : 'text-slate-700'
                }`}
              >
                {item}
              </label>
              <button
                onClick={() => deleteItem(item)}
                className="opacity-0 group-hover:opacity-100 transition-opacity text-rose-400 hover:text-rose-600"
              >
                <Trash2 className="size-4" strokeWidth={1.5} />
              </button>
            </div>
          ))}
        </div>

        <div className="flex gap-3 pt-8 border-t border-slate-100">
          <Input
            value={newItem}
            onChange={(e) => setNewItem(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && addItem()}
            placeholder="Add custom item..."
            className="rounded-2xl border-slate-200 h-12"
          />
          <Button onClick={addItem} className="bg-gradient-to-r from-rose-400 to-pink-500 hover:from-rose-500 hover:to-pink-600 rounded-full px-8">
            <Plus className="size-4 mr-2" strokeWidth={1.5} />
            Add
          </Button>
        </div>
      </div>
    </section>
  );
}