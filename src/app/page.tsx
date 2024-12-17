import AboutUs from "@/components/about.us";
import Header from "@/components/header";
import Hero from "@/components/hero";
import Offers from "@/components/offers";
import ServiceProduct from "@/components/service.product";

export default function Home() {
  return (
    <div>
      <main className="flex flex-col w-full mx-auto overflow-x-hidden">
        <Header />
        <Hero />
        <AboutUs />
        <Offers />
        <ServiceProduct />
        {/* Teams */}
        {/* Footer */}
      </main>
    </div>
  );
}
