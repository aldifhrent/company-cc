import Image from "next/image";

export default function Header() {
  return (
    <header className="p-8 container">
      <div className="flex justify-between items-center ">
        <div className="flex items-center gap-4">
          <div className="">
            <Image src="./logo.svg" alt="Xumbrelaa" width={40} height={40} />
          </div>

          <h1 className="font-extrabold text-xl">OBS Tech.</h1>
        </div>
        <nav className="flex gap-4">
          <p>Home</p>
          <p>About Us</p>
          <p>Services</p>
          <p>Teams</p>
          <button>Hire Us</button>
        </nav>
      </div>
    </header>
  );
}
