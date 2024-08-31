'use client';
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Card } from './ui/card';
import { CardHeader, CardDescription, CardTitle,  CardFooter } from './ui/card';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import Image from 'next/image';


const reviwsData = [
  {
    avatar: '/reviews/avatar-2.png',
    name: 'Mupey',
    job: 'Teacher',
    review: 'recommended sekali, masnya juga baik, hasilnya sangat memuaskan. Terimakasih yaa'
  },
  {
    avatar: '/reviews/avatar-1.png',
    name: 'aryotejo',
    job: 'Project Manager',
    review: 'Pengerjaan Bagus dan sabar dalam revisi Projek, rekomended'
  },
  {
    avatar: '/reviews/avatar-7.png',
    name: 'diznop',
    job: 'Student',
    review: 'Bagus sekali, masnya selalu paham dengan arahan saya. Dan cepat selesai. Terima kasih banyak sudah membantu saya 🙏🙏'
  },
  {
    avatar: '/reviews/avatar-4.png',
    name: 'Anonim',
    job: 'Student',
    review: 'pengerjaan nya cepat dan cukup sesuai harapan'
  },
  {
    avatar: '/reviews/avatar-5.png',
    name: 'Danang Pradana',
    job: 'Bisnis Owner',
    review: 'We don’t need to spend as much time in meetings now that we use ilham syabani.'
  },
]

const Testimoni = () => {
  return (
    <section className='mb-12  xl:px-[100px]'>
      <div className='container mx-auto'>
        <h2 className='section-title mb-12 text-center mx-auto'>Reviews</h2>
        <Swiper slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 2 },
            1400: { slidesPerView: 3 },
          }}
          spaceBetween={40}
          modules={[Pagination]}
          pagination={{
            clickable: true,
          }}
          className='h-[360px]'
        >
          {reviwsData.map((person, index) => {
            return (
              <SwiperSlide key={index}>
                <Card className='bg-primary/08 dark:bg-secondary/40 p-8 min-h-[300px]'>
                  <CardHeader>
                    <div className='flex gap-x-4'> 
                      <Image src={person.avatar}
                        width={70} height={70} alt='' priority />
                      <div>
                        <CardTitle>{person.name}</CardTitle>
                        <p>{person.job}</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardDescription className='text-light'>{person.review}</CardDescription>
                  <CardFooter></CardFooter>
                </Card>
              </SwiperSlide>
            )
          })}

        </Swiper>
      </div>
    </section>
  )
}

export default Testimoni