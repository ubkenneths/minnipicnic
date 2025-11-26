import { Card } from "./ui/card";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { Mail, Send } from "lucide-react";
import { toast } from "sonner";

export function ContactForm() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData);
    
    if (!data.fullName || !data.email || !data.phone || !data.eventDate || !data.location || !data.guests) {
      toast.error("Please fill in all required fields");
      return;
    }
    
    toast.success("Request submitted successfully! We'll contact you soon.");
    e.currentTarget.reset();
  };

  return (
    <section className="py-16">
      <div className="text-center mb-16">
        <a className="book-now-link bg-rose-500 hover:bg-rose-600 rounded-full shadow-sm" href="https://forms.gle/WFXpeAnaAZ8X1cYQ7" 
        target="_blank">
          Book <span className="font-serif italic" >Now</span>
        </a>
      </div>
    </section>)}


    {/*<section className="py-16">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-light tracking-wide text-slate-800 mb-4">
          Book <span className="font-serif italic">Now</span>
        </h2>
        <p className="text-slate-500 text-lg max-w-2xl mx-auto">
          Please submit the form below with your contact and event information
        </p>
      </div>

      <div className="bg-white rounded-3xl p-10 max-w-4xl mx-auto shadow-sm border border-slate-100">
        <form onSubmit={handleSubmit} className="space-y-10">
          <div>
            <h3 className="text-xl font-light pb-4 border-b border-slate-100 mb-8 text-slate-800">Contact Information</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <Label htmlFor="fullName" className="text-slate-600 mb-2">Full Name</Label>
                <Input id="fullName" name="fullName" placeholder="John Doe" required className="rounded-2xl border-slate-200 h-12" />
              </div>
              <div>
                <Label htmlFor="email" className="text-slate-600 mb-2">Email</Label>
                <Input id="email" name="email" type="email" placeholder="john@example.com" required className="rounded-2xl border-slate-200 h-12" />
              </div>
              <div>
                <Label htmlFor="phone" className="text-slate-600 mb-2">Phone Number</Label>
                <Input id="phone" name="phone" type="tel" placeholder="(555) 123-4567" required className="rounded-2xl border-slate-200 h-12" />
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-light pb-4 border-b border-slate-100 mb-8 text-slate-800">Event Details</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <Label htmlFor="eventDate" className="text-slate-600 mb-2">Date</Label>
                <Input id="eventDate" name="eventDate" type="date" required className="rounded-2xl border-slate-200 h-12" />
              </div>
              <div>
                <Label htmlFor="eventTime" className="text-slate-600 mb-2">Time</Label>
                <Input id="eventTime" name="eventTime" type="time" required className="rounded-2xl border-slate-200 h-12" />
              </div>
              <div>
                <Label htmlFor="location" className="text-slate-600 mb-2">Location</Label>
                <Input id="location" name="location" placeholder="Street Address, City, State, Zip Code" required className="rounded-2xl border-slate-200 h-12" />
              </div>
              <div>
                <Label htmlFor="guests" className="text-slate-600 mb-2">Number of Guests</Label>
                <Input id="guests" name="guests" type="number" min="1" placeholder="0" required className="rounded-2xl border-slate-200 h-12" />
              </div>
              <div>
                <Label htmlFor="foodAllergies" className="text-slate-600 mb-2">Food allergies/restrictions</Label>
                <Input id="foodAllergies" name="foodAllergies" required className="rounded-2xl border-slate-200 h-12" />
              </div>
              <div className="md:col-span-2">
                <Label htmlFor="availableTheme" className="text-slate-600 mb-2">Available Themes</Label>
                <Select name="availableTheme">
                  <SelectTrigger id="availableTheme" className="rounded-2xl border-slate-200 h-12">
                    <SelectValue placeholder="Select the theme" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="decemberRed">December Red</SelectItem>
                    <SelectItem value="seasideBlue">Seaside Blue</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="md:col-span-2">
                <Label htmlFor="addOns" className="text-slate-600 mb-2">Add On(s)</Label>
                <Select name="addOns">
                  <SelectTrigger id="addOns" className="rounded-2xl border-slate-200 h-12">
                    <SelectValue placeholder="Select add on(s)" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="nameDesign">Name Design for the event</SelectItem>
                    <SelectItem value="freshFloral">Fresh Floral Arrangement for the picnic table: small, medium, large</SelectItem>
                    <SelectItem value="cake">Cake (comes with serving knife and spatula)</SelectItem>
                    <SelectItem value="charcuterie">Charcuterie Board (comes with cheeses, cheese knives, crackers, seasonal fruits + vegetables, and assortment of cookies)</SelectItem>
                    <SelectItem value="bluetoothSpeaker">Bluetooth Speaker</SelectItem>
                    <SelectItem value="polaroidCamera"> Polaroid Camera</SelectItem>
                    <SelectItem value="beanbagChairs">Bean Bag chairs for extra comfort</SelectItem>
                    <SelectItem value="smoresKit">Smores Kit (For outdoor events only)</SelectItem>
                    <SelectItem value="paintingKit">Painting Kit</SelectItem>
                    <SelectItem value="boardGames">Board Games</SelectItem>
                    <SelectItem value="balloons">Balloons</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="md:col-span-2">
                <Label htmlFor="occasion" className="text-slate-600 mb-2">Special Occasion</Label>
                <Select name="occasion">
                  <SelectTrigger id="occasion" className="rounded-2xl border-slate-200 h-12">
                    <SelectValue placeholder="Select an occasion" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="hangout">Friends' Hangout</SelectItem>
                    <SelectItem value="birthday">Birthday</SelectItem>
                    <SelectItem value="anniversary">Anniversary</SelectItem>
                    <SelectItem value="corporate">Corporate Event</SelectItem>
                    <SelectItem value="family">Family Gathering</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>

          <div>
            <Label htmlFor="message" className="text-slate-600 mb-2">Special Requests</Label>
            <Textarea
              id="message"
              name="message"
              placeholder="Tell us about any special requests/preferences...or if you have any other information regarding the occasion, please share here."
              rows={5}
              className="rounded-2xl border-slate-200"
            />
          </div>

          <Button 
            type="submit"
            className="w-full bg-gradient-to-r from-rose-400 to-pink-500 hover:from-rose-500 hover:to-pink-600 rounded-full shadow-md h-14"
            size="lg"
          >
            <Send className="size-5 mr-2" />
            Send Message
          </Button>

          <p className="text-sm text-slate-400 text-center">
            We'll get back to you within 24 hours
          </p>
        </form>
      </div>
    </section> */}
