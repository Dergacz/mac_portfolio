import type { TFunction } from 'i18next';

export const getTranslatedNavLinks = (t: TFunction) => [
  {
    id: 1,
    name: t('nav.projects'),
    type: 'finder',
  },
  {
    id: 3,
    name: t('nav.contact'),
    type: 'contact',
  },
  {
    id: 4,
    name: t('nav.resume'),
    type: 'resume',
  },
];

export const getTranslatedDockApps = (t: TFunction) => [
  {
    id: 'finder',
    name: t('dock.portfolio'),
    icon: 'finder.png',
    canOpen: true,
  },
  {
    id: 'safari',
    name: t('dock.articles'),
    icon: 'safari.png',
    canOpen: true,
  },
  {
    id: 'photos',
    name: t('dock.gallery'),
    icon: 'photos.png',
    canOpen: true,
  },
  {
    id: 'contact',
    name: t('dock.contact'),
    icon: 'contact.png',
    canOpen: true,
  },
  {
    id: 'terminal',
    name: t('dock.skills'),
    icon: 'terminal.png',
    canOpen: true,
  },
  {
    id: 'trash',
    name: t('dock.archive'),
    icon: 'trash.png',
    canOpen: false,
  },
];

export const getTranslatedPhotosLinks = (t: TFunction) => [
  {
    id: 1,
    icon: '/icons/gicon1.svg',
    title: t('gallery.library'),
  },
  {
    id: 2,
    icon: '/icons/gicon2.svg',
    title: t('gallery.memories'),
  },
  {
    id: 3,
    icon: '/icons/file.svg',
    title: t('gallery.places'),
  },
  {
    id: 4,
    icon: '/icons/gicon4.svg',
    title: t('gallery.people'),
  },
  {
    id: 5,
    icon: '/icons/gicon5.svg',
    title: t('gallery.favorites'),
  },
];

export const getTranslatedWorkLocation = (t: TFunction) => ({
  id: 1,
  type: 'work',
  name: t('work.title'),
  icon: '/icons/work.svg',
  kind: 'folder',
  children: [
    {
      id: 5,
      name: t('work.nike.name'),
      icon: '/images/folder.png',
      kind: 'folder',
      position: 'top-10 left-5',
      windowPosition: 'top-[5vh] left-5',
      children: [
        {
          id: 1,
          name: 'Nike Project.txt',
          icon: '/images/txt.png',
          kind: 'file',
          fileType: 'txt',
          position: 'top-5 left-10',
          description: t('work.nike.description', {
            returnObjects: true,
          }) as string[],
        },
        {
          id: 2,
          name: 'nike.com',
          icon: '/images/safari.png',
          kind: 'file',
          fileType: 'url',
          href: 'https://youtu.be/fZdTYswuZjU?si=Awjl-pIst9e09_UU',
          position: 'top-10 right-20',
        },
        {
          id: 4,
          name: 'nike.png',
          icon: '/images/image.png',
          kind: 'file',
          fileType: 'img',
          position: 'top-52 right-80',
          imageUrl: '/images/project-1.png',
        },
        {
          id: 5,
          name: 'Design.fig',
          icon: '/images/plain.png',
          kind: 'file',
          fileType: 'fig',
          href: 'https://google.com',
          position: 'top-60 right-20',
        },
      ],
    },
    {
      id: 6,
      name: t('work.aiResume.name'),
      icon: '/images/folder.png',
      kind: 'folder',
      position: 'top-52 right-80',
      windowPosition: 'top-[20vh] left-7',
      children: [
        {
          id: 1,
          name: 'AI Resume Analyzer Project.txt',
          icon: '/images/txt.png',
          kind: 'file',
          fileType: 'txt',
          position: 'top-5 right-10',
          description: t('work.aiResume.description', {
            returnObjects: true,
          }) as string[],
        },
        {
          id: 2,
          name: 'ai-resume-analyzer.com',
          icon: '/images/safari.png',
          kind: 'file',
          fileType: 'url',
          href: 'https://youtu.be/iYOz165wGkQ?si=R1hs8Legl200m0Cl',
          position: 'top-20 left-20',
        },
        {
          id: 4,
          name: 'ai-resume-analyzer.png',
          icon: '/images/image.png',
          kind: 'file',
          fileType: 'img',
          position: 'top-52 left-80',
          imageUrl: '/images/project-2.png',
        },
        {
          id: 5,
          name: 'Design.fig',
          icon: '/images/plain.png',
          kind: 'file',
          fileType: 'fig',
          href: 'https://google.com',
          position: 'top-60 left-5',
        },
      ],
    },
    {
      id: 7,
      name: t('work.foodDelivery.name'),
      icon: '/images/folder.png',
      kind: 'folder',
      position: 'top-10 left-80',
      windowPosition: 'top-[33vh] left-7',
      children: [
        {
          id: 1,
          name: 'Food Delivery App Project.txt',
          icon: '/images/txt.png',
          kind: 'file',
          fileType: 'txt',
          position: 'top-5 left-10',
          description: t('work.foodDelivery.description', {
            returnObjects: true,
          }) as string[],
        },
        {
          id: 2,
          name: 'food-delivery-app.com',
          icon: '/images/safari.png',
          kind: 'file',
          fileType: 'url',
          href: 'https://youtu.be/LKrX390fJMw?si=cExkuVhf2DTV9G2-',
          position: 'top-10 right-20',
        },
        {
          id: 4,
          name: 'food-delivery-app.png',
          icon: '/images/image.png',
          kind: 'file',
          fileType: 'img',
          position: 'top-52 right-80',
          imageUrl: '/images/project-3.png',
        },
        {
          id: 5,
          name: 'Design.fig',
          icon: '/images/plain.png',
          kind: 'file',
          fileType: 'fig',
          href: 'https://google.com',
          position: 'top-60 right-20',
        },
      ],
    },
  ],
});

export const getTranslatedAboutLocation = (t: TFunction) => ({
  id: 2,
  type: 'about',
  name: t('about.title'),
  icon: '/icons/info.svg',
  kind: 'folder',
  children: [
    {
      id: 1,
      name: 'me.png',
      icon: '/images/image.png',
      kind: 'file',
      fileType: 'img',
      position: 'top-10 left-5',
      imageUrl: '/images/adrian.jpg',
    },
    {
      id: 2,
      name: 'casual-me.png',
      icon: '/images/image.png',
      kind: 'file',
      fileType: 'img',
      position: 'top-28 right-72',
      imageUrl: '/images/adrian-2.jpg',
    },
    {
      id: 3,
      name: 'conference-me.png',
      icon: '/images/image.png',
      kind: 'file',
      fileType: 'img',
      position: 'top-52 left-80',
      imageUrl: '/images/adrian-3.jpeg',
    },
    {
      id: 4,
      name: 'about-me.txt',
      icon: '/images/txt.png',
      kind: 'file',
      fileType: 'txt',
      position: 'top-60 left-5',
      subtitle: t('about.subtitle'),
      image: '/images/adrian.jpg',
      description: t('about.description', { returnObjects: true }) as string[],
    },
  ],
});

export const getTranslatedResumeLocation = (t: TFunction) => ({
  id: 3,
  type: 'resume',
  name: t('resume.title'),
  icon: '/icons/file.svg',
  kind: 'folder',
  children: [
    {
      id: 1,
      name: 'Resume.pdf',
      icon: '/images/pdf.png',
      kind: 'file',
      fileType: 'pdf',
    },
  ],
});

export const getTranslatedTrashLocation = (t: TFunction) => ({
  id: 4,
  type: 'trash',
  name: t('trash.title'),
  icon: '/icons/trash.svg',
  kind: 'folder',
  children: [
    {
      id: 1,
      name: 'trash1.png',
      icon: '/images/image.png',
      kind: 'file',
      fileType: 'img',
      position: 'top-10 left-10',
      imageUrl: '/images/trash-1.png',
    },
    {
      id: 2,
      name: 'trash2.png',
      icon: '/images/image.png',
      kind: 'file',
      fileType: 'img',
      position: 'top-40 left-80',
      imageUrl: '/images/trash-2.png',
    },
  ],
});

export const getTranslatedLocations = (t: TFunction) => ({
  work: getTranslatedWorkLocation(t),
  about: getTranslatedAboutLocation(t),
  resume: getTranslatedResumeLocation(t),
  trash: getTranslatedTrashLocation(t),
});
