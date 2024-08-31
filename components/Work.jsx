'use client';

import Link from 'next/link';
import { Button } from './ui/button';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

import ProjectCard from '@/components/ProjectCard';

const projectData = [
    {
      image: '/work/dosenku.png',
      category: 'Web Developer',
      name: 'Dosenku-App',
      description: 'Aplikasi pengelolaan data dosen dan tracking produk karya ilmiah dosen.',
      link: '#',
      github: 'https://github.com/ilhamsyabani/dosen-app',
      tech: 'Laravel, Bootstrap, jQuery, HTML, CSS, SQLite',
      description_en: 'A comprehensive application for lecturer data management and academic tracking.',
    },
    {
      image: '/work/mymental.png',
      category: 'UI/UX Design dan Developer',
      name: 'MyMental.id',
      description: 'Aplikasi pemesanan layanan konsultasi kesehatan dan perawatan mental.',
      link: 'https://mymental.id',
      github: 'https://github.com/ilhamsyabani/mymental',
      tech: 'Laravel, Tailwind, HTML, JavaScript, MySQL',
      description_en: 'A mental health consultation and care booking service application.',
    },
    {
      image: '/work/gemari.png',
      category: 'UI/UX Design dan Developer',
      name: 'Gemmari',
      description: 'Aplikasi pengelola game edukasi dengan beberapa game yang dapat dimainkan melalui sistem berlangganan.',
      link: 'https://gemmari.id',
      github: 'https://github.com/ilhamsyabani/gemari-x',
      tech: 'Unity, C#, Laravel, HTML, CSS, JavaScript, API',
      description_en: 'An educational game management app with various games that can be played via a subscription system.',
    },
  ];
  

const Work = () => {
  return (
    <section className="relative mt-8 xl:mt-40 mb-12 xl:mb-48 xl:px-[8%]">
      <div className="container mx-auto">
        <div className="max-w-[420px] mx-auto xl:mx-0 text-center xl:text-left mb-12 
        xl:h-[400px] flex flex-col justify-center items-center xl:items-start">
          <h2 className="section-title mb-4">Latest Project</h2>
          <p className="subtitle mb-8">
            {/* Tambahkan deskripsi proyek di sini */}
            Over the past few years, I&apos;ve worked on a range of impactful projects that blend innovation with design. From building responsive websites to creating educational media, these projects reflect my dedication to quality and creativity. Take a look at some of the standout work I&apos;ve delivered, crafted to meet the unique needs of each client.
          </p>
          <Link href="/projects">
            <Button>All Projects</Button>
          </Link>
        </div>
        <div className="xl:max-w-[820px] xl:absolute right-0 top-0">
          <Swiper
            className="h-[500px]"
            slidesPerView={1}
            breakpoints={{ 
                640:{
                    slidesPerView: 2,
                },
            }}
            spaceBetween={30}
            pagination={{ clickable: true }}
            modules={[Pagination]}
          >
            {/* Show 4 projects */}
            {projectData.slice(0, 4).map((project, index) => {
              return (
                <SwiperSlide key={index}>
                  <ProjectCard project={project} />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Work;
