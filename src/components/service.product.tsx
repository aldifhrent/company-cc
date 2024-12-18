import getServices from '@/action/services';
import Image from 'next/image';
import { AnimatedServices } from './ui/animated-service';
import { Services } from '@/types/service';
export default async function ServiceProduct() {
  const services =  await getServices();

  return (
    <section className="p-8 mt-20 container w-sc">
      <div className="relative flex flex-col lg:flex-row justify-between items-center gap-[20px]">
        <div className="absolute top-0 -left-20">
          <Image src="./acc.svg" width={73} height={78} alt="Acce" />
        </div>

        <div className="max-w-[400px] lg:w-[700px]">
          <h1 className="text-[48px] font-semibold">Our Services</h1>
          <h2 className="font-bold mt-6">
            laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore
            veritatis et quasi architecto beatae vitae
          </h2>

          <p className="mt-6">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo.
          </p>
        </div>
        
          <AnimatedServices services={services as unknown as Services[]} />
        
      </div>
    </section>
  );
}
