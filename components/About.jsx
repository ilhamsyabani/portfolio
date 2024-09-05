/* eslint-disable */
import React from 'react';
import DevImg from './DevImg';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { User2, MailIcon, HomeIcon, PhoneCall, GraduationCap, Calendar, Briefcase, University } from 'lucide-react';

const infoData = [
  {
    icon: <User2 size={18} />,
    text: 'Ilham Syabani',
  },
  {
    icon: <PhoneCall size={18} />,
    text: '+6282223820071',
  },
  {
    icon: <MailIcon size={18} />,
    text: 'syabani.ilhamsi@gmail.com',
  },
  {
    icon: <GraduationCap size={18} />,
    text: 'Bachelor Of Educational Technology',
  },
  {
    icon: <HomeIcon size={18} />,
    text: 'Surabaya dan yogyakarta',
  },
];

const qualificationData = [
  {
    title: 'education',
    data: [
      {
        university: 'Binar Academy',
        qualification: 'UI/UX Design',
        years: '2018',
      },
      {
        university: 'Universitas Negeri Yogyakarta',
        qualification: 'Bachelor of Education',
        years: '2015-2021',
      },
    ],
  },
  {
    title: 'experience',
    data: [
      {
        company: 'IMKOM Academy',
        role: 'Designer Mentor',
        years: '2020-2021',
      },
      {
        company: 'Banni Studio',
        role: 'Graphic Designer',
        years: '2022-2023',
      },
      {
        company: 'Faswork',
        role: 'Freelancer',
        years: '2020-present',
      },
    ],
  },
];

const skillData = [
  {
    title: 'skills',
    data: [
      { name: 'HTML, CSS' },
      { name: 'Javascript, PHP Laravel' },
      { name: 'SQL, SQLite' },
      { name: 'UI/UX Design' },
      { name: 'Learning Design' },
      { name: 'Video Editing' },
    ],
  },
  {
    title: 'tools',
    data: [
      { imgPath: '/assets/about/vs_icon.svg' },
      { imgPath: '/assets/about/wp_icon.svg' },
      { imgPath: '/assets/about/fig_icon.svg' },
      { imgPath: '/assets/about/ai_icon.svg' },
      { imgPath: '/assets/about/ps_icon.svg' },
    ],
  },
];

const About = () => {
  const getData = (arr, title) => {
    return arr.find((item) => item.title === title);
  };

  return (
    <section className="pb-8 pt-12 xl:py-24 px-4 xl:px-[8rem]">
      <div className="container mx-auto pt-4">
        <h2 className="section-title mb-8 text-center mx-auto">About Me</h2>
        <div className="flex flex-col xl:flex-row">
          {/* images */}
          <div className="hidden xl:flex flex-1 relative">
            <DevImg containerStyles="bg-shape_light dark:bg-shape_dark w-[400px] h-[400px] bg-no-repeat relative" imgSrc="/about/photo.png" />
          </div>
          {/* tabs */}
          <div className="flex-1 text-center ">
            <Tabs defaultValue="personal">
              <TabsList className="w-full mb-[24px] grid xl:grid-cols-3 xl:max-w-[520px] xl:border-1 border-gray-200 dark:border-none">
                <TabsTrigger className="w-[172px] xl:w-auto" value="personal">
                  Personal Info
                </TabsTrigger>
                <TabsTrigger className="w-[172px] xl:w-auto" value="qualification">
                  Qualification
                </TabsTrigger>
                <TabsTrigger className="w-[172px] xl:w-auto" value="skills">
                  Skills
                </TabsTrigger>
              </TabsList>
              {/* tabs content */}
              <div className="text-sm xl:text-left">
                <TabsContent value="personal">
                  <h3 className="h3 mb-4">Creating Digital Products to Solve Your Problems</h3>
                  <p className="subtitle text-[16px] max-auto xl:mx-0">
                  A full-stack freelancer specializing in PHP Laravel, JavaScript, and UI design. Ready to deliver top-notch solutions and exceed your expectations.
                  </p>
                  {/* icons */}
                  <div className="grid xl:grid-cols-2 gap-4 mb-8">
                    {infoData.map((item, index) => (
                      <div className="flex items-center gap-x-4 mx-auto xl:mx-0" key={index}>
                        <div className="text-primary text-[12px]">{item.icon}</div>
                        <div className='text-[14px] text-muted-foreground'>{item.text}</div>
                      </div>
                    ))}
                  </div>
                  {/* line */}
                  <div className="mt-12"></div>
                  <div className="border-b border-border opacity-5"></div>
                </TabsContent>
                <TabsContent value="qualification">
                  <h3 className="h3 mb-8 text-center xl:text-left">My Journey</h3>
                  <div className="grid md:grid-cols-2 gap-y-8">
                    {/* experience */}
                    <div className="text-left">
                      <div className="flex gap-x-4 items-center text-[20px] text-primary mb-4">
                        <Briefcase />
                        <h4 className="capitalize font-medium">{getData(qualificationData, 'experience').title}</h4>
                      </div>
                      <div className="flex flex-col gap-y-8">
                        {getData(qualificationData, 'experience').data.map((item, index) => {
                          const { company, role, years } = item;
                          return (
                            <div className="flex gap-x-8 group" key={index}>
                              <div className="h-[64px] w-[1px] bg-lime-100 relative ml-2">
                                <div className="w-[11px] h-[11px] rounded-full bg-primary absolute -left-[5px] group-hover:translate-y-[64px] transition-all duration-500"></div>
                              </div>
                              <div>
                                <div className="font-semibold text-[16px] leading-none mb-2">{company}</div>
                                <div className="text-[14px] leading-none text-muted-foreground mb-1">{role}</div>
                                <div className="text-[12px] font-medium text-primary">{years}</div>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                    {/* education */}
                    <div className="text-left">
                      <div className="flex gap-x-4 items-center text-[20px] text-primary mb-4">
                        <GraduationCap />
                        <h4 className="capitalize font-medium">{getData(qualificationData, 'education').title}</h4>
                      </div>
                      <div className="flex flex-col gap-y-8">
                        {getData(qualificationData, 'education').data.map((item, index) => {
                          const { university, qualification, years } = item;
                          return (
                            <div className="flex gap-x-8 group" key={index}>
                              <div className="h-[64px] w-[1px] bg-lime-100 relative ml-2">
                                <div className="w-[11px] h-[11px] rounded-full bg-primary absolute -left-[5px] group-hover:translate-y-[64px] transition-all duration-500"></div>
                              </div>
                              <div>
                                <div className="font-semibold text-[16px] leading-none mb-2">{university}</div>
                                <div className="text-[14px] leading-none text-muted-foreground mb-2">{qualification}</div>
                                <div className="text-[12px] font-medium text-primary">{years}</div>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </TabsContent>
                <TabsContent value="skills">
                  <div className="text-center xl:text-left">
                    <h3 className="h3 mb-8">Tools I Use Everyday</h3>
                    <div className="mb-12">
                      <h4 className="text-md font-semibold mb-2 xl:text-left text-primary">Skills</h4>
                      <div className="border-b border-gray-200 dark:border-gray-900 mb-4"></div>
                      <div>
                        {getData(skillData, 'skills').data.map((item, index) => (
                          <div className="w-2/4 text-center xl:text-left mx-auto xl:mx-0" key={index}>
                            <div className="text-muted-foreground ">{item.name}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                    {/* tools */}
                    <div>
                      <h4 className="text-md font-semibold mb-2 xl:text-left text-primary">Tools</h4>
                      <div className="border-b border-gray-100 dark:border-gray-900 mb-4"></div>
                      <div className="flex flex-wrap justify-center xl:justify-start gap-4">
                        {getData(skillData, 'tools').data.map((item, index) => (
                          <div className="w-[52px] h-[52px] flex items-center justify-center border-gray-100 dark:border-none shadow-md rounded-md dark:bg-shape_dark" key={index}>
                            <img src={item.imgPath} alt={`Tool ${index}`} />
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </TabsContent>
              </div>
            </Tabs>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
