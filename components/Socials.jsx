'use client';
import { RiLinkedinFill, RiGithubFill, RiInstagramFill, RiDribbbleFill } from 'react-icons/ri';
import Link from 'next/link';

const icons = [
  {
    path: 'https://www.linkedin.com/in/yourprofile', // replace with your LinkedIn URL
    name: <RiLinkedinFill />,
  },
  {
    path: 'https://github.com/yourprofile', // replace with your GitHub URL
    name: <RiGithubFill />,
  },
  {
    path: 'https://www.instagram.com/yourprofile', // replace with your Instagram URL
    name: <RiInstagramFill />,
  },
  {
    path: 'https://dribbble.com/yourprofile', // replace with your Dribbble URL
    name: <RiDribbbleFill />,
  },
];

const Socials = ({ containerStyles, iconsStyles }) => {
  return (
    <div className={`${containerStyles}`}>
      {icons.map((icon, index) => (
        <Link href={icon.path} key={index} target="_blank" rel="noopener noreferrer">
          <div className={`${iconsStyles}`}>{icon.name}</div>
        </Link>
      ))}
    </div>
  );
};

export default Socials;
