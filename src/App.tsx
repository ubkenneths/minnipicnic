import { Header } from "./components/Header";
import { HeroSection } from "./components/HeroSection";
import { WeatherCard } from "./components/WeatherCard";
import { RecipeGallery } from "./components/RecipeGallery";
import { ActivityCards } from "./components/ActivityCards";
import { PackingList } from "./components/PackingList";
import { TipsSection } from "./components/TipsSection";
import { BookingCalendar } from "./components/BookingCalendar";
import { ContactForm } from "./components/ContactForm";
import { Toaster } from "./components/ui/sonner";

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-rose-50/30 to-white">
      <Header />
      <HeroSection />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* <WeatherCard /> */}
        <RecipeGallery />
        <ContactForm />
        {/*<BookingCalendar />*/}
        {/* <ActivityCards />
        <PackingList />
        <TipsSection /> */}
      </main>
      <footer className="bg-slate-800 text-white py-16 mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-slate-400 tracking-wide">© 2025 Picnic Paradise — Creating beautiful outdoor moments</p>
        </div>
      </footer>
      <Toaster />
    </div>
  );
}