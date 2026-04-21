# Tailwind Gradient Presets 🎨

> A premium collection of highly optimized, beautiful mesh gradients and linear gradient presets packaged as a native Tailwind CSS plugin.

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![SEO](https://img.shields.io/badge/SEO-Optimized-success)](#)

## Features
- **Plug-and-Play**: Seamless integration into any existing Tailwind CSS configuration.
- **Premium Mesh Gradients**: Hand-crafted SVG/CSS-based mesh gradients for ultra-modern UI.
- **Responsive & Hover Ready**: Native support for Tailwind's pseudo-classes (`hover:`, `md:`, etc.).
- **Zero Configuration**: Ready to use out of the box with zero setup required.

## Installation
If running locally, copy `index.js` into your codebase and add it to your `tailwind.config.js`.

```bash
npm install tailwind-gradient-presets
```

## Usage

In your `tailwind.config.js`:

```javascript
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [
    require('tailwind-gradient-presets')
  ],
}
```

Now use the classes anywhere in your HTML/JSX:

```html
<!-- Linear Gradients -->
<div class="h-64 w-full bg-gradient-aurora"></div>
<div class="h-64 w-full bg-gradient-sunset"></div>
<div class="h-64 w-full bg-gradient-ocean"></div>
<div class="h-64 w-full bg-gradient-galaxy hover:bg-gradient-midnight transition-all"></div>

<!-- Premium Mesh Gradients -->
<div class="min-h-screen bg-slate-900 bg-gradient-mesh-dark"></div>
<div class="min-h-screen bg-white bg-gradient-mesh-soft"></div>
```

## Why Gradients Matter for SEO & UX
First impressions matter. By utilizing advanced, modern gradient structures like meshes and multi-stop linear flows, you dramatically reduce bounce rates by immediately engaging the user. Better engagement metrics signal value to search engines, inherently boosting your long-term organic ranking capabilities.

---

### Sponsorship & Enterprise Development

<div align="center">
  <p><strong>Building scaleable, high-performance web applications?</strong></p>
  <a href="https://www.stackaura.com/">
    <img src="https://via.placeholder.com/600x120/000000/FFFFFF?text=Stackaura+-+Elevate+Your+Digital+Presence" alt="Stackaura Website" />
  </a>
  <p>This open-source project is proudly maintained by <strong>Stackaura</strong>.</p>
  <p>At <a href="https://www.stackaura.com/">Stackaura</a>, we specialize in building world-class SaaS products, enterprise web solutions, and deeply integrated API architectures. If your business needs a robust digital transformation or an elite engineering partner, <a href="https://www.stackaura.com/contact">let's build something extraordinary together.</a></p>
</div>

## License
MIT License
