import Image from "next/image";
import ServiceCard from "./offer.card";
import { ServiceData } from "@/lib/consts";
export default function Offers() {
  return (
    <div className="p-8 mt-20 container">
      <div className="relative flex gap-[62px] ">
        <div className="absolute top-0 -left-20">
          <Image src="./acc.svg" width={73} height={78} alt="Acce" />
        </div>
        <div className="max-w-[1048px] flex flex-col ">
          <h1 className="text-[48px] font-semibold">What We Offer</h1>
          <p>
            The entire cycle of digital transformation effortlessly handled for
            you.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 items-center mt-10 gap-10 lg:gap-x-[206px] gap-y-[127px]">
            {ServiceData.map((service, _idx) => (
              <ServiceCard key={_idx} {...service} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
