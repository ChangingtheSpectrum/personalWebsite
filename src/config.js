module.exports = {
  email: 'chharri@akamai.com',

  socialMedia: [
    {
      name: 'GitHub',
      url: 'https://github.com/ChangingtheSpectrum',
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/bigironmoose',
    },
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/christopher-harris-69a442113/',
    },
  ],

  navLinks: [
    {
      name: 'About',
      url: '/#about',
    },
    {
      name: 'Experience',
      url: '/#jobs',
    },
    {
      name: 'Contact',
      url: '/#contact',
    },
  ],

  colors: {
    green: '#A9A691',
    brown: '#373132',
    darkNavy: '#373132',
  },

  srConfig: (delay = 200, viewFactor = 0.25) => ({
    origin: 'bottom',
    distance: '20px',
    duration: 500,
    delay,
    rotate: { x: 0, y: 0, z: 0 },
    opacity: 0,
    scale: 1,
    easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    mobile: true,
    reset: false,
    useDelay: 'always',
    viewFactor,
    viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
  }),
};
