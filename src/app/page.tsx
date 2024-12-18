import AboutUs from "@/components/about.us";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Hero from "@/components/hero";
import Offers from "@/components/offers";
import ServiceProduct from "@/components/service.product";
import Testimonials from "@/components/testimonials";

export default function Home() {
  return (
    <div>
      <main className="flex flex-col w-full mx-auto overflow-x-hidden">
        <Header />
        <Hero />
        <AboutUs />
        <Offers />
        <ServiceProduct />
        <Testimonials/>
        <Footer/>
      </main>
    </div>
  );
}
