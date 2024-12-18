import Image from "next/image"

export default function Footer() {
    return (
        <footer className="mt-20">
            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between p-8 bg-black/50 text-white">
            <div className="flex gap-6 items-center">
            <Image src='/logo.svg' width={50} height={50} alt="Logo"/>
            <h1 className="text-2xl">OBS Tech.</h1>
            </div>
                

                <p>2024 OBS Tech. All rights reserved.</p>
            </div>
        </footer>
    )
}