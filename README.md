# Alfred Nyongesa - Portfolio Website

A modern 3D portfolio website showcasing full-stack development skills with glassmorphism effects and smooth animations.

## 🎨 Features

- **Modern Design**: Dark theme with glassmorphism effects
- **3D Animations**: Smooth 3D transitions using Anime.js
- **Responsive**: Mobile-first design that works on all devices
- **Interactive**: Custom cursor, particle effects, and hover animations
- **Fast**: Optimized performance with Vite and code splitting
- **SEO Friendly**: Proper meta tags and semantic HTML

## 🚀 Tech Stack

- **Framework**: React 18 with Vite
- **Styling**: Tailwind CSS
- **Animations**: Anime.js & Framer Motion
- **3D Graphics**: Three.js
- **Icons**: Lucide React
- **Deployment**: Vercel

## 🛠️ Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd alfred-portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start development server:
```bash
npm run dev
```

4. Build for production:
```bash
npm run build
```

## 📁 Project Structure

```
src/
├── components/          # React components
│   ├── Navbar.jsx      # Navigation bar
│   ├── Hero.jsx        # Hero section with 3D elements
│   ├── About.jsx       # About section
│   ├── Skills.jsx      # Skills showcase
│   ├── Projects.jsx    # Projects portfolio
│   ├── Contact.jsx     # Contact form
│   └── Footer.jsx      # Footer
├── utils/
│   └── animations.js   # Animation utilities
├── App.jsx             # Main app component
├── main.jsx           # App entry point
└── index.css          # Global styles
```

## 🎭 Animations

The website features several types of animations:

- **Hero Animations**: 3D floating shapes, typing effects
- **Section Transitions**: Fade-in, slide-up on scroll
- **Interactive**: Card tilt, hover effects
- **Micro-interactions**: Button ripples, cursor trails

## 📱 Responsive Design

The website is fully responsive with breakpoints:
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## 🎯 Performance

- Optimized bundle splitting
- Lazy loading for images
- 60fps animations
- Minimal render blocking
- Fast loading with Vite

## 📞 Contact Integration

The contact form integrates with WhatsApp for instant communication:
- Form submissions open WhatsApp with pre-filled message
- Direct contact options for multiple platforms
- Real-time form validation

## 🚀 Deployment

### Vercel (Recommended)

1. Push code to GitHub
2. Connect repository to Vercel
3. Deploy automatically

### Manual Build

```bash
npm run build
```

Upload the `dist` folder to any static hosting service.

## 🔧 Customization

### Colors
Modify colors in `tailwind.config.js`:
```javascript
colors: {
  primary: '#0F172A',      // Dark blue
  accent: '#06B6D4',       // Cyan
  secondary: {
    start: '#8B5CF6',      // Purple
    end: '#EC4899'         // Pink
  }
}
```

### Animations
Customize animations in `src/utils/animations.js`

### Content
Update personal information in component files

## 📄 License

MIT License - feel free to use this template for your own portfolio!

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📧 Contact

- Email: alfred.dev8@gmail.com
- WhatsApp: +254 762 667 048
- GitHub: [@alfrednyongesa](https://github.com/alfrednyongesa)

---

Built with ❤️ by Alfred Nyongesa