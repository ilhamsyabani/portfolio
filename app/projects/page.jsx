'use client';
import Portfolio from '@/components/Portfolio';
import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const projectData = [
  {
    image: '/work/dosenku.png',
    category: 'Web Development',
    role: 'Programmer',
    name: 'Dosenku-App',
    description: 'Aplikasi manajemen data dosen yang memudahkan pengelolaan data pribadi, pelacakan publikasi ilmiah, dan pelaporan. Dibangun dengan Laravel untuk backend yang andal dan aman, serta Bootstrap 5 dan jQuery untuk antarmuka yang responsif.',
    link: '/',
    tech: ['Laravel', 'Bootstrap', 'jQuery', 'HTML', 'CSS', 'MySQL'],
    description_en: 'A comprehensive application for lecturer data management and academic tracking.',
  },
  {
    image: '/work/mymental.png',
    category: 'Web Development',
    role: ['Programmer', 'Designer'],
    name: 'MyMental-App',
    description: 'Aplikasi pemesanan konsultasi kesehatan mental dengan fitur pembayaran online menggunakan mitra payment gateway. Aplikasi ini dirancang untuk memudahkan pengguna dalam memesan layanan kesehatan mental secara cepat dan aman.',
    link: '/',
    tech: ['Laravel', 'Tailwind', 'jQuery', 'HTML', 'CSS', 'SQLite', 'Figma', 'Midtrans'],
    description_en: 'A mental health consultation booking app with integrated online payment features.',
  },
  {
    image: '/work/gemari.png',
    category: 'Web Development',
    role: ['Programmer', 'Designer'],
    name: 'Gemari',
    description: 'Aplikasi pengelolaan game edukasi yang memungkinkan pengguna memainkan berbagai permainan pembelajaran untuk mendukung proses belajar dan evaluasi siswa. Dibangun untuk memberikan pengalaman belajar yang menyenangkan.',
    link: '/',
    tech: ['Laravel', 'Filament', 'Tailwind', 'jQuery', 'HTML', 'CSS', 'MySQL', 'Figma'],
    description_en: 'An educational game management application for interactive learning and evaluation.',
  },
  {
    image: '/work/project-1.png',
    category: 'Graphic Design',
    role: ['Designer'],
    name: 'Kelas Banni Studio',
    description: 'Landing page promosi untuk kelas desain grafis di Banni Studio. Dirancang untuk menarik calon peserta dengan tampilan yang profesional dan menarik.',
    link: '/',
    tech: ['Figma', 'WordPress', 'Elementor'],
    description_en: 'A promotional landing page for graphic design classes at Banni Studio.',
  },
  {
    image: '/work/project-1.png',
    category: 'Graphic Design',
    role: ['Designer'],
    name: 'LPPM Esa Unggul',
    description: 'Redesain halaman web LPPM Esa Unggul untuk memberikan tampilan yang lebih segar dan memudahkan pengunjung dalam mengakses informasi penting.',
    link: '/',
    tech: ['Figma', 'WordPress', 'Avada'],
    description_en: 'A website redesign for LPPM Esa Unggul, enhancing user experience and accessibility.',
  },
  {
    image: '/work/project-1.png',
    category: 'Graphic Design',
    role: ['Designer'],
    name: 'Banni IG Content',
    description: 'Desain konten sosial media untuk Banni Studio, dirancang untuk meningkatkan penjualan jasa desain logo dan branding.',
    link: '/',
    tech: ['Figma', 'Adobe Illustrator', 'Adobe Photoshop'],
    description_en: 'Social media content design for Banni Studio, focusing on logo design and branding services.',
  },
  {
    image: '/work/project-1.png',
    category: 'Graphic Design',
    role: ['Designer'],
    name: 'Studio X',
    description: 'Landing page untuk Studio X, dirancang untuk menampilkan layanan studio dengan desain yang elegan dan fungsional.',
    link: '/',
    tech: ['Figma'],
    description_en: 'A landing page design for Studio X, showcasing studio services with a sleek and functional layout.',
  },
  {
    image: '/work/project-1.png',
    category: 'Graphic Design',
    role: ['Designer'],
    name: 'Konten Sosial Media SPF',
    description: 'Desain konten sosial media untuk memperkenalkan layanan keamanan data SPF, dirancang untuk menarik perhatian dan informatif.',
    link: '/',
    tech: ['Figma'],
    description_en: 'Social media content design for SPF, focusing on data security services.',
  },
  {
    image: '/work/project-1.png',
    category: 'Graphic Design',
    role: ['Designer'],
    name: 'Promo Brosur Mie Ceria',
    description: 'Desain brosur promosi untuk Mie Ceria, menonjolkan keunikan produk dan penawaran khusus.',
    link: '/',
    tech: ['Adobe Illustrator'],
    description_en: 'Promotional brochure design for Mie Ceria, highlighting unique products and special offers.',
  },
  {
    image: '/work/project-1.png',
    category: 'Graphic Design',
    role: ['Designer'],
    name: 'Logo Design',
    description: 'Desain logo dan branding untuk Mie Ceria dan Raja Kakap, mencerminkan identitas merek yang kuat dan menarik.',
    link: '/',
    tech: ['Adobe Illustrator'],
    description_en: 'Logo and branding design for Mie Ceria and Raja Kakap, creating a strong and appealing brand identity.',
  },
  {
    image: '/work/project-1.png',
    category: 'Educational Media',
    role: ['Developer'],
    name: 'Media Interaktif Tata Surya',
    description: 'Media pembelajaran interaktif untuk siswa kelas 5 SD, mengenalkan materi tentang tata surya melalui visualisasi yang menarik dan interaktif.',
    link: '/',
    tech: ['Adobe Illustrator', 'Adobe Flash'],
    description_en: 'Interactive learning media about the solar system for 5th-grade students.',
  },
  {
    image: '/work/project-1.png',
    category: 'Educational Media',
    role: ['Developer'],
    name: 'Media Asam Basa',
    description: 'Media pembelajaran tentang zat asam dan basa, dirancang untuk memperjelas konsep melalui simulasi dan interaksi langsung.',
    link: '/',
    tech: ['Adobe Illustrator', 'Adobe Flash'],
    description_en: 'Learning media on acids and bases, enhancing understanding through simulations and interactions.',
  },
  {
    image: '/work/project-1.png',
    category: 'Educational Media',
    role: ['Developer'],
    name: 'Media Bahasa Inggris',
    description: 'Game edukasi untuk melatih kemampuan bahasa Inggris siswa melalui permainan interaktif seperti drag and drop, menjodohkan kata, dan menyusun kalimat.',
    link: '/',
    tech: ['Adobe Illustrator', 'Unity'],
    description_en: 'Educational game for English language skills development through interactive games.',
  },
  {
    image: '/work/project-1.png',
    category: 'Educational Media',
    role: ['Developer'],
    name: 'Game Edukasi Gaya Hidup Sehat',
    description: 'Game edukasi yang mengajarkan gaya hidup sehat melalui petualangan mengumpulkan sampah dan menjaga kebersihan.',
    link: '/',
    tech: ['Adobe Illustrator', 'Unity'],
    description_en: 'Educational game promoting a healthy lifestyle through an adventure of collecting trash and maintaining cleanliness.',
  },
  {
    image: '/work/project-1.png',
    category: 'Educational Media',
    role: ['Developer'],
    name: 'Game Edukasi Indonesia',
    description: 'Game edukasi petualangan yang mengenalkan siswa pada kebudayaan dan geografi Indonesia.',
    link: '/',
    tech: ['Figma', 'Unity'],
    description_en: 'Educational adventure game introducing students to Indonesian culture and geography.',
  },
  {
    image: '/work/project-3.png',
    category: 'Web Development',
    role: ['Programmer'],
    name: 'E-Sertifikat',
    description: 'Platform untuk menghasilkan sertifikat digital secara online, dengan fitur unggulan seperti pengolahan data dari file Excel dan kemampuan ekspor ke format Excel. Memudahkan pengguna untuk mengakses sertifikat kapan saja dan di mana saja.',
    link: '/',
    tech: ['Laravel', 'Filament', 'Tailwind', 'jQuery', 'HTML', 'CSS', 'MySQL', 'Figma'],
    description_en: 'A platform for generating and managing digital certificates with Excel data integration.',
  },
  {
    image: '/work/project-3.png',
    category: 'Web Development',
    role: ['Programmer'],
    name: 'Pinjam di Lab',
    description: 'Platform manajemen peminjaman barang dengan fitur inventaris, stok, dan pengenalan wajah untuk verifikasi peminjam. Aplikasi ini dirancang untuk memudahkan pengelolaan barang di laboratorium.',
    link: '/',
    tech: ['Laravel', 'Filament', 'Tailwind', 'jQuery', 'HTML', 'CSS', 'MySQL', 'Figma'],
    description_en: 'A loan management platform with inventory, stock tracking, and facial recognition features for lab equipment.',
  },
  {
    image: '/work/project-3.png',
    category: 'Web Development',
    role: ['Programmer'],
    name: 'Komdiguru',
    description: 'Platform untuk melakukan survei atau evaluasi secara online. Dirancang untuk memudahkan pengguna dalam mengumpulkan data dan menghasilkan laporan evaluasi yang komprehensif.',
    link: '/',
    tech: ['Laravel', 'livewire', 'Tailwind', 'jQuery', 'HTML', 'CSS', 'MySQL', 'Figma'],
    description_en: 'A platform for conducting online surveys or evaluations, designed for easy data collection and comprehensive reporting.',
  },
  {
    image: '/work/project-3.png',
    category: 'Web Development',
    role: ['Programmer'],
    name: 'EvaluatorAMI CLC',
    description: 'Platform untuk melakukan survei atau evaluasi pelaksanaan pembelajaran di instansi mitra AMI CLC, dengan fitur unggulan seperti upload bukti pembelajaran, akses evaluator untuk penilaian, dan akses penilai untuk pengisian laporan.',
    link: '/',
    tech: ['Laravel', 'Bootstrap', 'jQuery', 'HTML', 'CSS', 'MySQL', 'Figma'],
    description_en: 'A platform for evaluating learning activities at AMI CLC partner institutions, featuring file uploads, evaluator access for assessments, and reporter access for filling out reports.',
  },
];

const uniqueCategories = [
  'all projects',
  ...new Set(projectData.flatMap(item => item.category)),
];


const Project = () => {
  const [category, setCategory] = useState('all projects');

  const filteredProjects = projectData.filter((project) => {
    return category === 'all projects' || project.category === category;
  });
 
  return (
    <section className='container mt-12 max-w-[1200px] lg:px-20 text-center flex justify-center items-center'>
      <div className="container mx-auto xl:min-h-[100vh]">
        <h2 className="section-title mb-8 h2 xl:mb-16 text-center mx-auto">Portfolio</h2>
        <Tabs defaultValue={category} className='flex  flex-col justify-center items-center mx-auto mb-24 xl:mb-48'>
          <TabsList className='w-full grid h-full md:grid-cols-4 lg:max-w-[648px] mx-auto'>
            {uniqueCategories.map((category, index) => (
              <TabsTrigger
                onClick={() => setCategory(category)}
                value={category}
                key={index}
                className='capitalize w-[162px] md:w-auto'>
                {category}
              </TabsTrigger>
            ))}
          </TabsList>
          {/* TabsContent */}
          <div className='text-sm xl:mt-24 grid grid-cols-1 lg:grid-cols-3 gap-4'>
            {filteredProjects.map((project, index) => (
              <TabsContent value={category} key={index}>
                <Portfolio project={project} />              
              </TabsContent>
            ))}
          </div>
        </Tabs>
      </div>
    </section>
  );
};

export default Project;