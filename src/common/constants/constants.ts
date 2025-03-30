import facebookLogo from '@/assets/png/facebook.png';
import instagramLogo from '@/assets/png/instagram.png';
import tigranProfile from '@/assets/png/tigran-avatar.jpeg';
import youtubeLogo from '@/assets/png/youtube.png';
import mibioLogo from '@/assets/svg/mibio.svg';

import { LangMappingEnum } from '../enums';

export const DEFAULT_LANG = LangMappingEnum.nl;

export const META_TITLE = 'Hay Network';
export const META_DESCRIPTION = 'Hay Network foundation';

export const MEMBERS = {
  chairman: {
    name: 'Tigran Pogosian',
    phone: '+37477060591',
    avatar: tigranProfile.src,
    whatsapp: true,
  },
  secretary: {
    name: 'Murat Yildiz',
    phone: '+31651852165',
    avatar: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png',
    whatsapp: false,
  },
  treasurer: {
    name: 'George Akopian',
    phone: '+31629731670',
    avatar: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png',
    whatsapp: false,
  },
};

export const SOCIAL_DATA = [
  {
    name: 'Facebook',
    url: 'https://www.facebook.com/haynetwork2024',
    logo: facebookLogo.src,
  },
  {
    name: 'Instagram',
    url: 'https://www.instagram.com/hayetwork2024/',
    logo: instagramLogo.src,
  },
  {
    name: 'Youtube',
    url: 'https://www.youtube.com/@HayNetwork',
    logo: youtubeLogo.src,
  },
  {
    name: 'Mibio',
    url: 'https://mibio.bio/hy/hayetwork',
    logo: mibioLogo.src,
  }
]
