import getServices from "@/action/services";
import Image from "next/image";
import { AnimatedServices } from "./ui/animated-service";
import { Services } from "@/types/service";

export default async function ServiceProduct() {
  const services = await getServices();
  console.log(services);
  if (!Array.isArray(services)) {
    console.error("Services is not an array:", services);
    return null;
  }
  return (
    <section className="p-8 mt-20 container">
      <div className="relative flex flex-col lg:flex-row justify-between items-center gap-[20px]">
        <div className="absolute top-0 -left-20">
          <Image src="./acc.svg" width={73} height={78} alt="Acce" />
        </div>

        <div className="max-w-[700px]">
          <h1 className="text-[48px] font-semibold">Our Services</h1>
          <h2 className=" font-bold mt-6">
            laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore
            veritatis et quasi architecto beatae vitae
          </h2>

          <p className="mt-6">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
            aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
            eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est,
            qui dolorem ipsum quia dolor sit amet, c
          </p>
        </div>
        <div className="w-screen">
          <AnimatedServices services={services as unknown as Services[]} />
        </div>
      </div>
    </section>
  );
}
