import Link from 'next/link';
import { Button } from './ui/button';
import { Download, Send } from 'lucide-react';
import { RiArrowDownSLine } from 'react-icons/ri';

// Components
import Socials from './Socials';

const Hero = () => {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/storage/cv-ilhamsyabani.pdf'; // Ganti dengan path file yang ingin diunduh
    link.download = 'cv-ilhamsyabani.pdf'; // Nama file yang akan diunduh
    link.click();
  };

  return (
    <section className="py-12 xl:pb-28 xl:pt-40 bg-[#f2f7f2] dark:bg-[#0C0A09] px-4 xl:px-[8rem]">
      <div className="container mx-auto">
        <div className="flex justify-center gap-x-8">
          {/* Text */}
          <div className="relative flex max-w-[600px] flex-col justify-center mx-auto xl:mx-0 text-center">
            <div className="hidden absolute top-0 left-[-50px] h-[28px] w-[160px] px-4 py-2 rotate-[-20deg] bg-primary justify-center items-center xl:inline-flex">
              <div className="text-white text-[14px] font-bold">WEB DEVELOPER</div>
            </div>
            <h1 className="h1 mb-4">PORTFOLIO</h1>
            <p className="subtitle max-w-[600px] mx-auto xl:mx-0">
              A full-stack freelancer specializing in PHP Laravel, JavaScript, and UI design. Ready to deliver top-notch solutions and exceed your expectations.
            </p>
            {/* Buttons */}
            <div className="flex flex-col gap-y-3 md:flex-row gap-x-3 mx-auto xl:mx-0 mb-8 justify-center items-center">
              <Link href="/contact">
                <Button className="gap-x-2">
                  Contact Me <Send size={18} />
                </Button>
              </Link>
              <Link href='/storage/cv-ilhamsyabani.pdf'>
                <Button variant="secondary" className="gap-x-2">
                  Download CV <Download size={18} />
                </Button>
              </Link>
            </div>
          </div>
          {/* Image */}
        </div>
        <Socials
          containerStyles="flex gap-x-4 mx-auto mt-8 xl:mt-24 justify-center xl:justify-end"
          iconsStyles="text-foreground text-[24px] hover:text-primary transition-all"
        />
        {/* Icon */}
        <div className="hidden md:flex absolute left-2/4 animate-bounce">
          <RiArrowDownSLine className="text-3xl text-primary" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
