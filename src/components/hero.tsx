import Image from "next/image";

export default function Hero() {
  return (
    <section className="p-8 mt-4 container">
      <div className="relative flex flex-col lg:flex-row justify-between items-center gap-10 ">
        <div className="absolute top-40 -left-20">
          <Image src="./acc.svg" width={73} height={78} alt="Acce" />
        </div>

        <div className="max-w-[1048px]">
          <h1 className="text-[16px] md:text-[36px] font-semibold">
            Empowering Innovation, Transforming the Future
          </h1>
          <h2 className="text-[55px] md:text-[76px] font-bold">
            Lorem ipsum dolor sit amet, adipiscing elit
          </h2>
          <p className="text-lg">
            magni dolores eos qui ratione voluptatem sequi nesciunt
          </p>
        </div>
        <div>
          <Image
            src="./hero.svg"
            alt="Hero"
            width={472}
            height={807}
            className="min-w-[400px] max-w-[472px]"
          />
        </div>
      </div>
    </section>
  );
}
