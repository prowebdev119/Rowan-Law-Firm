import { Icon } from '@iconify/react';
import homeFill from '@iconify/icons-eva/home-fill';
import fileFill from '@iconify/icons-eva/file-fill';
import contactFill from '@iconify/icons-eva/cloud-download-outline';
import flashFill from '@iconify/icons-eva/flash-fill';
// routes

// ----------------------------------------------------------------------

const ICON_SIZE = {
  width: 22,
  height: 22
};

const menuConfig = [
  {
    title: 'Home',
    path: '/',
    icon: <Icon icon={homeFill} {...ICON_SIZE} />
  },
  {
    title: 'About Us',
    path: '/about-us',
    icon: <Icon icon={flashFill} {...ICON_SIZE} />
  },
  {
    title: 'Practice Areas',
    path: '/practice-areas',
    icon: <Icon icon={fileFill} {...ICON_SIZE} />
  },
  {
    title: 'Contact Us',
    path: '/contact-us',
    icon: <Icon icon={contactFill} {...ICON_SIZE} />
  }
];

export default menuConfig;
