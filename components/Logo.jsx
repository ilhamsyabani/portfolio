import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const  Logo =()=> {
  return (
    <Link href={'#'}>
      <Image src='/logo.svg' width={52} height={52} priority alt='' />
    </Link>
  )
}

export default Logo