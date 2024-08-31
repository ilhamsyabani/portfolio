import React from 'react';
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';

const servicesData = [
  {
    icon: '/service/grafis.svg',
    title: 'UI/UX Design',
    description: 'Designing visually appealing interfaces and intuitive user experiences with a focus on aesthetics, consistency, and usability.',
  },
  {
    icon: '/service/web.svg',
    title: 'Web Development',
    description: 'Building interactive and responsive websites using modern technologies such as HTML, CSS, JavaScript, and frameworks like Laravel and React.',
  },
  {
    icon: '/service/media.svg',
    title: 'Educational Media Development',
    description: 'Developing interactive digital learning media that supports teaching and learning with engaging and easy-to-understand content.',
  },
];

const Service = () => {
  return (
    <section>
      <div className="container mx-auto xl:w-[1200px]">
        <h2 className="section-title mb-12 xl:mb-[120px] text-center mx-auto">My Services</h2>
        <div className="grid xl:grid-cols-3 gap-8 justify-center">
          {servicesData.map((item, index) => (
            <Card
              className="w-full max-w-[360px] h-[300px] flex flex-col pt-16 pb-10 justify-center items-center relative  rounded-lg bg-white dark:bg-slate-800/30"
              key={index}
            >
              <CardHeader className="absolute -top-[60px]">
                <div className="w-[100px] h-[100px] flex justify-center items-center bg-white dark:bg-secondary/40 rounded-full shadow-lg">
                  <Image src={item.icon} alt={item.title} width={50} height={50} />
                </div>
              </CardHeader>
              <CardContent className="text-center mt-12">
                <CardTitle className="text-xl font-bold mb-4 text-gray-800 dark:text-gray-100">
                  {item.title}
                </CardTitle>
                <CardDescription className="text-sm text-gray-600 dark:text-gray-300">
                  {item.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Service;
