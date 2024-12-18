import Image from "next/image";

export default function Hero() {
  return (
    <section className="p-4 mt-4 container">
      <div className="relative flex flex-col lg:flex-row justify-between items-center gap-10">
        <div className="absolute top-40 -left-20">
          <Image src="./acc.svg" width={73} height={78} alt="Acce" />
        </div>

        <div className="max-w-[1048px]">
          <h1 className="text-[16px] md:text-[24px] font-semibold">
            Empowering Innovation, Transforming the Future
          </h1>
          <h2 className="text-[28px] md:text-[50px] font-bold">
            Delivering cutting-edge technology solutions tailored to your needs.
          </h2>
         <button className="p-2 mt-8 bg-black text-white rounded-lg">Learn More</button>
        </div>
        <div>
          <Image
            src="./hero.svg"
            alt="Hero"
            width={472}
            height={807}
            className="w-[300px] md:w-[800px]"
          />
        </div>
      </div>
    </section>
  );
}
