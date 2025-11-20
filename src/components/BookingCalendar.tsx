import { useState } from "react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { Calendar, MapPin, Users, Clock, ChevronLeft, ChevronRight } from "lucide-react";
import { toast } from "sonner";

const locations = [
  "Central Park, NY",
  "Golden Gate Park, SF",
  "Griffith Park, LA",
  "Millennium Park, Chicago",
  "Piedmont Park, Atlanta"
];

const timeSlots = [
  "10:00 AM", "11:00 AM", "12:00 PM", "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM"
];

export function BookingCalendar() {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedLocation, setSelectedLocation] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [guestCount, setGuestCount] = useState(4);
  const [currentMonth, setCurrentMonth] = useState(new Date());

  const getDaysInMonth = (date: Date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startingDayOfWeek = firstDay.getDay();
    
    return { daysInMonth, startingDayOfWeek };
  };

  const { daysInMonth, startingDayOfWeek } = getDaysInMonth(currentMonth);
  const days = Array.from({ length: daysInMonth }, (_, i) => i + 1);
  const blanks = Array.from({ length: startingDayOfWeek }, (_, i) => i);

  const handleDateClick = (day: number) => {
    const selected = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), day);
    setSelectedDate(selected);
  };

  const handlePrevMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1));
  };

  const handleNextMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1));
  };

  const handleBooking = () => {
    if (!selectedDate || !selectedLocation || !selectedTime) {
      toast.error("Please select date, location, and time");
      return;
    }
    toast.success("Booking confirmed! We'll send you a confirmation email.");
  };

  return (
    <section id="booking" className="py-16">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-light tracking-wide text-slate-800 mb-4">
          Reserve Your <span className="font-serif italic">Day</span>
        </h2>
        <p className="text-slate-500 text-lg max-w-2xl mx-auto">
          Choose the perfect date for your outdoor escape
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-10">
        <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100">
          <div className="flex items-center gap-3 mb-8">
            <Calendar className="size-6 text-rose-500" strokeWidth={1.5} />
            <h3 className="text-xl font-light text-slate-800">Select Date</h3>
          </div>

          <div className="mb-8">
            <div className="flex items-center justify-between mb-8 px-2">
              <button onClick={handlePrevMonth} className="p-2 hover:bg-slate-50 rounded-full transition-colors">
                <ChevronLeft className="size-5 text-slate-600" />
              </button>
              <span className="font-light text-lg text-slate-700">
                {currentMonth.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
              </span>
              <button onClick={handleNextMonth} className="p-2 hover:bg-slate-50 rounded-full transition-colors">
                <ChevronRight className="size-5 text-slate-600" />
              </button>
            </div>

            <div className="grid grid-cols-7 gap-2">
              {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
                <div key={day} className="text-center text-xs tracking-wide text-slate-500 py-2">
                  {day}
                </div>
              ))}
              {blanks.map((_, index) => (
                <div key={`blank-${index}`} />
              ))}
              {days.map((day) => {
                const isSelected = selectedDate?.getDate() === day && 
                                 selectedDate?.getMonth() === currentMonth.getMonth();
                return (
                  <button
                    key={day}
                    onClick={() => handleDateClick(day)}
                    className={`aspect-square rounded-2xl flex items-center justify-center transition-all ${
                      isSelected
                        ? 'bg-gradient-to-br from-rose-400 to-pink-500 text-white shadow-md'
                        : 'hover:bg-rose-50 text-slate-700'
                    }`}
                  >
                    {day}
                  </button>
                );
              })}
            </div>
          </div>

          {selectedDate && (
            <div className="p-5 bg-gradient-to-r from-rose-50 to-pink-50 rounded-2xl text-center">
              <span className="text-slate-700">{selectedDate.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' })}</span>
            </div>
          )}
        </div>

        <div className="space-y-6">
          <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100">
            <div className="flex items-center gap-3 mb-6">
              <MapPin className="size-6 text-rose-500" strokeWidth={1.5} />
              <h3 className="text-xl font-light text-slate-800">Location</h3>
            </div>
            <Select value={selectedLocation} onValueChange={setSelectedLocation}>
              <SelectTrigger className="rounded-2xl border-slate-200 h-12">
                <SelectValue placeholder="Choose a location" />
              </SelectTrigger>
              <SelectContent>
                {locations.map((location) => (
                  <SelectItem key={location} value={location}>
                    {location}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100">
            <div className="flex items-center gap-3 mb-6">
              <Clock className="size-6 text-rose-500" strokeWidth={1.5} />
              <h3 className="text-xl font-light text-slate-800">Time</h3>
            </div>
            <div className="grid grid-cols-3 gap-3">
              {timeSlots.map((time) => (
                <button
                  key={time}
                  onClick={() => setSelectedTime(time)}
                  className={`p-3 rounded-2xl border transition-all ${
                    selectedTime === time
                      ? 'border-rose-400 bg-rose-50 text-rose-600'
                      : 'border-slate-200 hover:border-rose-200 text-slate-600'
                  }`}
                >
                  {time}
                </button>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100">
            <div className="flex items-center gap-3 mb-6">
              <Users className="size-6 text-rose-500" strokeWidth={1.5} />
              <h3 className="text-xl font-light text-slate-800">Guests</h3>
            </div>
            <div className="flex items-center gap-6">
              <Button
                variant="outline"
                size="icon"
                onClick={() => setGuestCount(Math.max(1, guestCount - 1))}
                className="rounded-full w-12 h-12 border-slate-200"
              >
                -
              </Button>
              <span className="text-3xl font-light w-16 text-center text-slate-800">{guestCount}</span>
              <Button
                variant="outline"
                size="icon"
                onClick={() => setGuestCount(Math.min(20, guestCount + 1))}
                className="rounded-full w-12 h-12 border-slate-200"
              >
                +
              </Button>
            </div>
          </div>

          <Button 
            onClick={handleBooking}
            className="w-full bg-gradient-to-r from-rose-400 to-pink-500 hover:from-rose-500 hover:to-pink-600 rounded-full shadow-md h-14"
            size="lg"
          >
            Confirm Booking
          </Button>
        </div>
      </div>
    </section>
  );
}