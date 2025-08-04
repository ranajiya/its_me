export const navLinks = [
    {
      id: 1,
      name: 'Home',
      href: '#home',
    },
    {
      id: 2,
      name: 'About',
      href: '#about',
    },
    {
      id: 3,
      name: 'Journey',
      href: '#journey',
    },
    {
      id: 4,
      name: 'Contact',
      href: '#contact',
    },
  ];
  
  export const clientReviews = [
    {
      id: 1,
      name: 'Emily Johnson',
      position: 'Marketing Director at GreenLeaf',
      img: 'assets/review1.png',
      review:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ',
    },
    {
      id: 2,
      name: 'Mark Rogers',
      position: 'Founder of TechGear Shop',
      img: 'assets/review2.png',
      review:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce leo magna, ultrices non tellus sed, ultricies rutrum orci. Sed nec turpis mi. Aliquam fringilla vel ligula at viverra. Phasellus a sagittis elit. ',
    },
    {
      id: 3,
      name: 'John Dohsas',
      position: 'Project Manager at UrbanTech ',
      img: 'assets/review3.png',
      review:
        'Proin suscipit nibh et lectus rutrum efficitur. Curabitur quis fermentum felis. Vestibulum aliquet lectus in lacus varius, id porttitor velit facilisis. Sed posuere urna ut facilisis luctus.',
    },
    {
      id: 4,
      name: 'Ether Smith',
      position: 'CEO of BrightStar Enterprises',
      img: 'assets/review4.png',
      review:
        'Mauris bibendum, felis at mollis tristique, leo elit euismod nisl, ac ornare turpis lorem eu lectus. Vivamus vel nunc consectetur, tempus orci varius, sodales nisi.',
    },
  ];
  
  export const myProjects = [
    {
      title: 'Abidance Complience Solutions',
      desc: 'Empowering sustainable development through compliance and innovative environmental solutions for a better future. Providing innovative services for sustainable development and compliance.',
      subdesc:
        'We assist with EPR registration, compliance, and credits across sectors like electronics, plastics, and metals. Offering expert environmental consultation services, ensuring adherence to standards like BIS, FSSAI, and IEC.',
      href: 'https://abidancecompliancesolutions.in/',
      texture: '/textures/project/project3.mp4',
      logo: '/assets/project-logo3.png',
      logoStyle: {
        backgroundColor: '#60f5a1',
        background:
          'linear-gradient(0deg, #60F5A150, #60F5A150), linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0%, rgba(208, 213, 221, 0.8) 100%)',
        border: '0.2px solid rgba(208, 213, 221, 1)',
        boxShadow: '0px 0px 60px 0px rgba(35, 131, 96, 0.3)',
      },
      spotlight: '/assets/spotlight3.png',
      tags: [
        {
          id: 1,
          name: 'React.js',
          path: '/assets/react.svg',
        },
        {
          id: 2,
          name: 'TailwindCSS',
          path: 'assets/tailwindcss.png',
        },
        {
          id: 3,
          name: 'TypeScript',
          path: '/assets/typescript.png',
        },
        {
          id: 4,
          name: 'Framer Motion',
          path: '/assets/framer.png',
        },
      ],
    },
    {
      title: 'YC Directory - Pitch , Vote and Grow.',
      desc: 'A Next.js 15 platform where entrepreneurs can submit their startup ideas for virtual pitch competitions, browse other pitches, and gain exposure through a clean minimalistic design for a smooth user experience.',
      subdesc:
        'Live Content API displays startup ideas GitHub Authentication enables easy logins Pitch Submission supports multimedia submissions View Pitches allows browsing Pitch Details Page shows information Profile Page lists submissions Editor Picks highlights top ideas Views Counter tracks views Search facilitates easy access Minimalistic Design features the latest tech.',
      href: 'https://yc-directory-ranajiyas-projects.vercel.app/',
      texture: '/textures/project/project2.mp4',
      logo: '/assets/project-logo2.png',
      logoStyle: {
        backgroundColor: '#13202F',
        border: '0.2px solid #17293E',
        boxShadow: '0px 0px 60px 0px #2F6DB54D',
      },
      spotlight: '/assets/spotlight2.png',
      tags: [
        {
          id: 1,
          name: 'React.js',
          path: '/assets/react.svg',
        },
        {
          id: 2,
          name: 'TailwindCSS',
          path: 'assets/tailwindcss.png',
        },
        {
          id: 3,
          name: 'TypeScript',
          path: '/assets/typescript.png',
        },
        {
          id: 4,
          name: 'NextJS',
          path: '/assets/abc.png',
        },
      ],
    },
    {
      title: 'Apple iPhone Dummy',
      desc: 'The Apple iPhone 15 Pro website recreation is an immersive web experience designed to captivate users with cutting-edge visual effects.',
      subdesc:
        'This project seamlessly combines the power of GSAP animations for smooth, engaging transitions with the dynamic capabilities of Three.js to bring 3D models to life.',
      href: 'https://ranajiya.github.io/apple-clone/',
      texture: '/textures/project/project1.mp4',
      logo: '/assets/project-logo1.png',
      logoStyle: {
        backgroundColor: '#2A1816',
        border: '0.2px solid #36201D',
        boxShadow: '0px 0px 60px 0px #AA3C304D',
      },
      spotlight: '/assets/spotlight1.png',
      tags: [
        {
          id: 1,
          name: 'React.js',
          path: '/assets/react.svg',
        },
        {
          id: 2,
          name: 'TailwindCSS',
          path: 'assets/tailwindcss.png',
        },
        {
          id: 3,
          name: 'Three.js',
          path: '/assets/threejs.png',
        },
        {
          id: 4,
          name: 'Gsap-Greesock',
          path: '/assets/gsap.png',
        },
      ],
    },
  ];
  
  export const calculateSizes = (isSmall, isMobile, isTablet) => {
    return {
      deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
      deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
      cubePosition: isSmall ? [4, -5, 0] : isMobile ? [5, -5, 0] : isTablet ? [5, -5, 0] : [9, -5.5, 0],
      reactLogoPosition: isSmall ? [3, 4, 0] : isMobile ? [5, 4, 0] : isTablet ? [5, 4, 0] : [12, 3, 0],
      ringPosition: isSmall ? [-5, 7, 0] : isMobile ? [-10, 10, 0] : isTablet ? [-12, 10, 0] : [-24, 10, 0],
      targetPosition: isSmall ? [-5, -10, -10] : isMobile ? [-9, -10, -10] : isTablet ? [-11, -7, -10] : [-13, -13, -10],
    };
  };
  
  export const workExperiences = [
    {
      id: 1,
      name: 'Freelacer',
      pos: 'Self-Employed',
      duration: '2024 - Present',
      title: "With a strong focus on delivering user-friendly designs, I specialize in transforming ideas into seamless digital experiences tailored to client needs.",
      icon: '/assets/frelancer.svg',
      animation: 'victory',
    },
    {
      id: 2,
      name: 'Masters in Computer Application',
      pos: 'A.P.J. Abdul Kalam Technological University',
      duration: '2022 - 2024',
      title: "I have gained skills in modern technologies, problem-solving, and teamwork, with a strong background in programming, software development, and computer science.",
      icon: '/assets/aktu.svg',
      animation: 'clapping',
    },
    {
      id: 3,
      name: 'Bachelor of Commerce',
      pos: 'University of Delhi',
      duration: '2019 - 2022',
      title: "As a Commerce student, I have a solid foundation in business, finance, economics, and accounting, along with leadership and teamwork skills gained through participation in societies and sports.",
      icon: '/assets/duLogo.svg',
      animation: 'salute',
    },
  ];