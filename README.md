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
  plugins: [require("tailwind-gradient-presets")],
};
```

Now use the classes anywhere in your HTML/JSX:

```html
<!-- Linear Gradients -->
<div class="h-64 w-full bg-gradient-aurora"></div>
<div class="h-64 w-full bg-gradient-sunset"></div>
<div class="h-64 w-full bg-gradient-ocean"></div>
<div
  class="h-64 w-full bg-gradient-galaxy hover:bg-gradient-midnight transition-all"
></div>

<!-- Premium Mesh Gradients -->
<div class="min-h-screen bg-slate-900 bg-gradient-mesh-dark"></div>
<div class="min-h-screen bg-white bg-gradient-mesh-soft"></div>
```

## Practical Examples

Here are some real-world examples to help you quickly use gradient presets in your UI.

### 1. Hero Section

```html
<section class="bg-gradient-aurora text-white">
  <div class="mx-auto max-w-5xl px-6 py-20 text-center">
    <h1 class="text-4xl font-bold">Build stunning UIs instantly</h1>
    <p class="mt-4 text-white/80">
      Use ready-made gradient presets with Tailwind CSS.
    </p>
  </div>
</section>
```

### 2. Gradient Cards

```html
<div class="grid gap-6 md:grid-cols-3">
  <div class="p-6 rounded-xl bg-gradient-sunset text-white shadow-lg">
    <h3 class="text-lg font-semibold">Fast Setup</h3>
    <p class="text-white/80 mt-2">Zero configuration needed.</p>
  </div>

  <div class="p-6 rounded-xl bg-gradient-ocean text-white shadow-lg">
    <h3 class="text-lg font-semibold">Responsive</h3>
    <p class="text-white/80 mt-2">Works with all Tailwind breakpoints.</p>
  </div>

  <div class="p-6 rounded-xl bg-gradient-galaxy text-white shadow-lg">
    <h3 class="text-lg font-semibold">Modern UI</h3>
    <p class="text-white/80 mt-2">Beautiful gradients out of the box.</p>
  </div>
</div>
```

### 3. Hover Gradient Button

```html
<button
  class="px-6 py-3 rounded-lg bg-gradient-galaxy text-white transition-all hover:bg-gradient-midnight"
>
  Hover Me
</button>
```

### 4. Full Page Mesh Background

```html
<div class="min-h-screen bg-gradient-mesh-dark text-white p-10">
  <h1 class="text-3xl font-bold">Dashboard</h1>
  <p class="text-gray-300 mt-2">Using mesh gradient background.</p>
</div>
```

### 5. Light Mesh Section

```html
<section class="bg-gradient-mesh-soft p-16">
  <h2 class="text-3xl font-bold text-gray-800">Soft UI Section</h2>
  <p class="mt-4 text-gray-600">
    Perfect for landing pages and marketing sections.
  </p>
</section>
```

### 6. Responsive Gradient

```html
<div
  class="h-40 bg-gradient-sunset md:bg-gradient-ocean lg:bg-gradient-aurora rounded-xl"
></div>
```

### 7. React Example

```html
export default function Card() { return (
<div className="p-6 rounded-xl bg-gradient-galaxy text-white shadow-lg">
  <h2 className="text-xl font-bold">Tailwind Gradients</h2>
  <p className="mt-2 text-white/80">
    Easily add stunning gradients to your React apps.
  </p>
</div>
); }
```

## Why Gradients Matter for SEO & UX

First impressions matter. By utilizing advanced, modern gradient structures like meshes and multi-stop linear flows, you dramatically reduce bounce rates by immediately engaging the user. Better engagement metrics signal value to search engines, inherently boosting your long-term organic ranking capabilities.

---

## 🚀 Discover More from Stackaura

If you found this tool useful, check out our other high-performance web utilities and follow **Ahmar Hussain** for more open-source excellence.

### 🌟 Featured Projects

- **[Stackaura Hub](https://github.com/RanaAhmar/stackaura-hub)** - The central index for all 100 repositories.
- **[Free LLM APIs](https://github.com/RanaAhmar/free-llm-apis)** - A curated list of zero-cost AI endpoints.
- **[Awesome MCP Servers](https://github.com/RanaAhmar/awesome-mcp-servers)** - The ultimate collection of Model Context Protocol implementations.
- **[System Design Cheatsheet](https://github.com/RanaAhmar/system-design-cheatsheet)** - Master complex architectures in minutes.
- **[Next.js SaaS Starter](https://github.com/RanaAhmar/nextjs-saas-starter)** - The fastest way to launch your next product.

### 🔗 Stay Connected

- **Website:** [stackaura.com](https://www.stackaura.com/)
- **LinkedIn:** [Ahmar Hussain](https://www.linkedin.com/in/ahmar204/)
- **Facebook:** [Ahmar Hussain](https://www.facebook.com/Ahmar204)
- **GitHub:** [@RanaAhmar](https://github.com/RanaAhmar)

---
