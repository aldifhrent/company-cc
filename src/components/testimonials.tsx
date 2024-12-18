import Image from "next/image";
import React from "react";
import Marquee from "./ui/marquee";

interface Testimonial {
  name: string;
  position: string;
  company: string;
  image: string;
  testimonial: string;
}

const testimonials: Testimonial[] = [
  {
    name: "John Doe",
    position: "CEO",
    company: "TechCorp",
    image: "https://randomuser.me/api/portraits/men/1.jpg",
    testimonial:
      "OBS Tech has been a game-changer for our business. Their innovative solutions helped us scale efficiently and improve our operations.",
  },
  {
    name: "Jane Smith",
    position: "Product Manager",
    company: "InnovateX",
    image: "https://randomuser.me/api/portraits/women/2.jpg",
    testimonial:
      "The team's professionalism and attention to detail made our project a huge success. We couldn't have asked for a better partner.",
  },
  {
    name: "Michael Lee",
    position: "Marketing Director",
    company: "MarketMaster",
    image: "https://randomuser.me/api/portraits/men/3.jpg",
    testimonial:
      "Working with OBS Tech has been an incredible experience. Their dedication to quality and innovation is unmatched in the industry.",
  },
];

const Testimonials: React.FC = () => {
  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-6 lg:px-16">
        <h2 className="text-3xl font-semibold text-gray-800 text-center mb-8">
          What Our Clients Say
        </h2>
        <Marquee>
        <div className="flex h-[400px] w-full flex-row items-center justify-center overflow-hidden rounded-lg gap-10">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg p-6 text-center w-[400px]"
            >
              <Image
                src={testimonial.image}
                alt={testimonial.name}
                width={96}
                height={96}
                className="w-24 h-24 mx-auto rounded-full mb-4 object-cover"
              />
              <h3 className="text-xl font-semibold text-gray-800">{testimonial.name}</h3>
              <p className="text-gray-600">{testimonial.position}, {testimonial.company}</p>
              <p className="text-gray-600 mt-4 italic">{testimonial.testimonial}</p>
            </div>
          ))}
        </div>
        </Marquee>
      </div>
    </section>
  );
};

export default Testimonials;
