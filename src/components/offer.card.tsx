import React from "react";
import Image from "next/image";
interface ServiceProps {
  icons: string;
  name: string;
  details: string;
}
const OfferCard = (props: ServiceProps) => {
  return (
    <div className="w-[307px] h-[161px]">
      <div>
        <Image src={props.icons} width={51} height={51} alt="" />
        <h1 className="text-[20px] mt-7 font-bold">{props.name}</h1>
        <p className="mt-[10px] text-[16px]">{props.details}</p>
      </div>
    </div>
  );
};

export default OfferCard;
