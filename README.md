# Portfolio Website - Jasper Niño B. Cesa (Apix)

A modern, responsive portfolio website built with Vite + React, featuring an AI-powered chat assistant integrated with Flowise.

## 🌟 About This Website

This is the personal portfolio website of **Jasper Niño B. Cesa** (also known as Apix), a 4th year BSIT student at University of Cebu. The website showcases:

- Personal background and education
- Skills and technologies (Node.js, React+TypeScript, .NET/C#, Python Flask)
- Projects (RentEase capstone project, Hotel Reservation System)
- Interactive AI chat assistant powered by Flowise

## ✨ Features

- 🎨 Modern and beautiful UI design with dark theme
- 📱 Fully responsive layout (mobile, tablet, desktop)
- ⚡ Fast performance with Vite
- 🎯 Smooth scrolling navigation
- 💼 Project showcase with links
- 📚 Education timeline
- 📧 Contact form
- 🤖 AI Chat Assistant (Flowise integration) - Ask questions about the portfolio!

## 🛠️ Technologies Used

- **React 18** - UI framework
- **Vite** - Build tool and dev server
- **React Icons** - Icon library
- **CSS3** - Styling
- **Flowise** - AI chat integration

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Clone the repository:**
```bash
git clone https://github.com/YOUR_USERNAME/REPO_NAME.git
cd finalAI
```

2. **Install dependencies:**
```bash
npm install
```

3. **Start the development server:**
```bash
npm run dev
```

4. **Open your browser:**
   - The site will be available at `http://localhost:5173`
   - You'll see the portfolio with a floating chat button

### Build for Production

```bash
npm run build
```

The production build will be in the `dist` folder.

### Preview Production Build

```bash
npm run preview
```

## 📁 Project Structure

```
finalAI/
├── src/
│   ├── components/       # React components
│   │   ├── Header.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Skills.jsx
│   │   ├── Projects.jsx
│   │   ├── Education.jsx
│   │   ├── Contact.jsx
│   │   ├── FlowiseChat.jsx  # AI chat component
│   │   └── Footer.jsx
│   ├── App.jsx           # Main app component
│   ├── main.jsx          # Entry point
│   └── index.css         # Global styles
├── public/               # Static assets
│   └── my-pic.png        # Profile picture
├── package.json
├── vite.config.js
└── README.md
```

## 🤖 AI Chat Feature

The website includes an AI chat assistant powered by **Flowise** that can answer questions about:
- Jasper's background and education
- Projects (RentEase, Hotel Reservation System)
- Skills and technologies
- General portfolio information

The chat uses Flowise's API endpoint and is configured to respond as Jasper/Apix with information from the autobiography document.

## 🎨 Customization

To customize this portfolio for yourself:

1. **Update Personal Information:**
   - `src/components/Hero.jsx` - Name, title, description
   - `src/components/About.jsx` - About section content
   - `src/components/Education.jsx` - Education history

2. **Update Projects:**
   - `src/components/Projects.jsx` - Add/remove projects

3. **Update Skills:**
   - `src/components/Skills.jsx` - Modify skills list

4. **Update Contact:**
   - `src/components/Contact.jsx` - Contact links and email

5. **Update Profile Picture:**
   - Replace `public/my-pic.png` with your own image

6. **Update Flowise Chat:**
   - `src/components/FlowiseChat.jsx` - Update Flowise API endpoint if needed

## 📱 Responsive Design

The website is fully responsive and optimized for:
- 📱 Mobile phones (320px+)
- 📱 Tablets (768px+)
- 💻 Desktops (1024px+)
- 🖥️ Large screens (1440px+)

## 🚀 Deployment

### Recommended: Vercel

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Sign up with GitHub
4. Import your repository
5. Click "Deploy" (Vercel auto-detects Vite)
6. Your site is live! 🎉

### Alternative: Netlify

1. Push to GitHub
2. Go to [netlify.com](https://netlify.com)
3. Import from GitHub
4. Build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`
5. Deploy!

## 📝 License

MIT License - Feel free to use this template for your own portfolio!

## 👤 Author

**Jasper Niño B. Cesa (Apix)**
- GitHub: [@apixnull](https://github.com/apixnull)
- Portfolio: [Your deployed URL]

---

Built with ❤️ using React + Vite
