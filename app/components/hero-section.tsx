import WaitlistForm from "./waitlist-form";
import Image from "next/image";


export default function HeroSection() {

  return (
    <section className="min-h-screen flex items-center bg-gradient-to-br from-[#FFE6F2] via-[#FCF9FF] to-[#F2F6FF] px-2 md:px-8">
      <div className="flex flex-col md:flex-row items-center w-full max-w-7xl mx-auto gap-x-20">
        {/* Left: Text */}
        <div className="flex-1 flex flex-col items-start md:pt-32 pt-16 md:pl-20 pl-2">
          <div className="flex items-center mb-8">
            <Image 
              src="/lovio-icon.png" 
              alt="Lovio logo" 
              width={40} 
              height={40} 
              className="w-10 h-10"
              priority
            />
            <span className="text-xl md:text-2xl font-extrabold text-[#7B61FF] ml-2 tracking-tight">Lovio</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-black text-black mb-6 leading-tight tracking-tight">
            Talk to Lovio,<br />Track with Love.
          </h1>
          <p className="text-lg md:text-xl text-[#555] font-normal mb-10 max-w-xl">
            Lovio captures feedings, diapers, and sleep the instant you say them—no taps, no fuss.
          </p>
          <WaitlistForm />
        </div>
        {/* Right: Illustration */}
        <div className="flex-1 flex justify-end items-end w-full mt-12 md:mt-0">
          <Image
            src="/man-holding-baby.png"
            alt="Parent holding baby and phone"
            width={800}
            height={600}
            className="w-full max-w-xl md:max-w-2xl h-auto"
            priority
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
      </div>
    </section>
  );
}
