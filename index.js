const plugin = require('tailwindcss/plugin');

module.exports = plugin(function({ addUtilities }) {
  const gradients = {
    '.bg-gradient-aurora': {
      backgroundImage: 'linear-gradient(to right, #86efac, #3b82f6, #9333ea)',
    },
    '.bg-gradient-sunset': {
      backgroundImage: 'linear-gradient(to right, #f87171, #facc15)',
    },
    '.bg-gradient-ocean': {
      backgroundImage: 'linear-gradient(to right, #2dd4bf, #0284c7)',
    },
    '.bg-gradient-galaxy': {
      backgroundImage: 'linear-gradient(to right, #c084fc, #ec4899, #ef4444)',
    },
    '.bg-gradient-midnight': {
      backgroundImage: 'linear-gradient(to right, #0f172a, #1e1b4b)',
    },
    '.bg-gradient-mesh-soft': {
      backgroundImage: `
        radial-gradient(at 40% 20%, hsla(28,100%,74%,1) 0px, transparent 50%),
        radial-gradient(at 80% 0%, hsla(189,100%,56%,1) 0px, transparent 50%),
        radial-gradient(at 0% 50%, hsla(355,100%,93%,1) 0px, transparent 50%),
        radial-gradient(at 80% 50%, hsla(340,100%,76%,1) 0px, transparent 50%),
        radial-gradient(at 0% 100%, hsla(22,100%,77%,1) 0px, transparent 50%),
        radial-gradient(at 80% 100%, hsla(242,100%,70%,1) 0px, transparent 50%),
        radial-gradient(at 0% 0%, hsla(343,100%,76%,1) 0px, transparent 50%)
      `,
    },
    '.bg-gradient-mesh-dark': {
      backgroundImage: `
        radial-gradient(at 4% 36%, hsla(263,94%,20%,1) 0px, transparent 50%),
        radial-gradient(at 77% 76%, hsla(320,68%,19%,1) 0px, transparent 50%),
        radial-gradient(at 93% 6%, hsla(172,39%,10%,1) 0px, transparent 50%),
        radial-gradient(at 19% 82%, hsla(356,86%,19%,1) 0px, transparent 50%),
        radial-gradient(at 49% 97%, hsla(190,83%,18%,1) 0px, transparent 50%),
        radial-gradient(at 73% 31%, hsla(26,63%,15%,1) 0px, transparent 50%),
        radial-gradient(at 38% 0%, hsla(168,91%,14%,1) 0px, transparent 50%)
      `,
    }
  };

  addUtilities(gradients, ['responsive', 'hover']);
});
