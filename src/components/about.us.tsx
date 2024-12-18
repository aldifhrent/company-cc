import Image from "next/image";
export default function AboutUs() {
  return (
    <section className="mt-20 container">
      <div className="relative flex flex-col lg:flex-row gap-[62px] ">
        <div>
          <Image
            src="./about.svg"
            width={545}
            height={723}
            className="min-w-[300px]"
            alt="About Us"
          />
        </div>
        <div className="flex flex-col gap-[27px]">
          <p className="text-[24px] rounded-full font-bold">
            We are expert team
          </p>
          <h1 className="text-[48px] font-bold">Who are we?</h1>
          <h2>
            We build custom software that drives innovation and social impact
          </h2>
          <p className="w-fit text-[20px]">
            OBS Tech is one of the fastest-growing IT companies providing
            various solutions and services across industries. We provide
            complete solutions that include the development of mobile apps, web
            apps, and fin-tech solutions. Our Clientage has grown exponentially
            within years as we have had the privilege of working with clients
            from America, Australia, the United Kingdom, Saudi Arabia, Germany,
            India, Russia, and the Central Republic of Africa. Our current
            target is to provide cost-effective & user-friendly solutions using
            the latest technological trends.{" "}
          </p>
        </div>
      </div>
    </section>
  );
}
