'use client';
import { Button } from "./ui/button";
import Link from "next/link";
const Cta = () => {
  return (
    <section className='py-12 xl:py-24 mx-auto text-center'>
      <div className="w-[80%] py-8 mx-auto bg-white/30 shadow rounded-xl backdrop-blur-sm xl:px-12 dark:bg-slate-800/30">
        <div className="container xl:py-20 xl:px-24">
          <h2 className="text-4xl font-bold mb-4">Let&apos;s Turn Your Ideas into Reality</h2>
          <p className="text-lg mb-8 ">From concept to launch, Im here to guide you every step of the way. Let&apos;s create a web experience that your users will love.</p>
          <Link href='/contact'>
          <Button href="#contact" className="">
            Get Started Today
          </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}


export default Cta