import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="p-8 container">
      <div className="flex justify-between items-center ">
        <div className="flex items-center gap-4">
          <Link href='/' className="flex gap-2 items-center">
            <Image src="./logo.svg" alt="Xumbrelaa" width={40} height={40} />
            <h1 className="font-extrabold text-xl">OBS Tech.</h1>
          </Link>

          
        </div>
        <nav className="hidden lg:flex gap-12 items-center">
          <Link href='/'>Home</Link>
          <Link href='/about'>About Us</Link>
        
          <Link href='/teams'>Teams</Link>
          <button className="p-2 bg-black text-white rounded-lg">Contact Us</button>
        </nav>
      </div>
    </header>
  );
}
