# DAM.DEV — Professional Portfolio

[![Deployment](https://img.shields.io/badge/Deployment-Vercel-black?style=for-the-badge&logo=vercel)](https://dam-portofolio.vercel.app/)
[![Tech Stack](https://img.shields.io/badge/Stack-Next.js%2016%20|%20React%2019-blue?style=for-the-badge&logo=next.js)](https://github.com/adamandp/dam-portofolio)
[![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)](LICENSE)

A high-performance, aesthetically "unfair" developer portfolio built with a focus on modern architectural patterns, fluid animations, and confident design. This project showcases my capability in engineering scalable web applications and sophisticated UI/UX.

## 🚀 Features

- **Neo-Brutalist & Glassmorphism UI**: High-contrast, bold aesthetics with a sophisticated dark-mode grid layout.
- **Fluid Animations**: Powered by **Motion** (Framer Motion) for seamless transitions and interactive elements.
- **Next.js 16 + React 19**: Utilizing the latest experimental and stable features for maximum performance.
- **Responsive Architecture**: Fully optimized for mobile, tablet, and desktop viewing.
- **Dynamic Skills & Projects**: Showcasing a specialized arsenal in Frontend (React, Vue, Next.js) and Backend (Node.js, NestJS, Prisma).
- **Interactive Analytics Dashboard**: Demonstration of complex data visualization (as seen in the "Shop Control" project).

## 🛠 Technical Arsenal

- **Framework**: [Next.js 16](https://nextjs.org/) (App Router)
- **Library**: [React 19](https://react.dev/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) & [Shadcn UI](https://ui.shadcn.com/)
- **Animations**: [Motion](https://motion.dev/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Type Safety**: TypeScript

## 📁 Project Structure

```text
└── 📁 dam-portofolio
    ├── 📁 app           # Next.js App Router (Pages, Layouts, APIs)
    ├── 📁 assets        # Static assets like images and branding
    ├── 📁 components    # Atomic UI components (Shadcn, Custom)
    ├── 📁 lib           # Shared libraries and third-party configs
    ├── 📁 public        # Publicly accessible files
    └── 📁 utils         # Helper functions and business logic
```

## ⚙️ Installation

### Prerequisites

- Node.js (Latest)
- **pnpm** (Recommended)
- Docker (Optional)

### Local Development

1. Clone the repository:

   ```bash
   git clone https://github.com/adamandp/dam-portofolio.git
   cd dam-portofolio
   ```

2. Install dependencies:

   ```bash
   pnpm install
   ```

3. Run the development server:
   ```bash
   pnpm dev
   ```

### Docker Support

To run the portfolio in a containerized environment:

```bash
docker build -t dam-portofolio .
docker run -p 3000:3000 dam-portofolio
```

## 🤝 Standards

I welcome follow these standards to make this "unfair experience" even better:

### 1. Commit Conventions

We follow [Conventional Commits](https://www.conventionalcommits.org/):

- `feat:` for new features.
- `fix:` for bug fixes.
- `docs:` for documentation changes.
- `style:` for formatting/styling updates.

### 2. Coding Best Practices

- **Strict Typing**: No `any`. Use interfaces and types for all props and data structures.
- **Component Atomicism**: Keep components small, reusable, and focused on a single responsibility.
- **Linting**: Ensure code passes `pnpm lint` before pushing.
- **Performance**: Optimize images using `next/image` and keep client-side motion effects efficient.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

_Engineered with ☕ and passion by **Adam Developer**._
