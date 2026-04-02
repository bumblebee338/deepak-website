# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a personal portfolio website for an advocate (lawyer) specializing in criminal law. It's built as a React + Vite single-page application with a professional design focused on showcasing legal expertise, experience, and credentials.

## Development Commands

**Setup & Installation**
- `npm install` - Install dependencies

**Development**
- `npm run dev` - Start Vite dev server with HMR (runs on http://localhost:5173)
- `npm run build` - Build for production (output to `dist/`)
- `npm run preview` - Preview the production build locally

**Code Quality**
- `npm run lint` - Run ESLint on all JS/JSX files
- `npm run lint -- --fix` - Auto-fix linting issues

## Architecture & Key Patterns

### File Structure

```
src/
├── components/        # Page section components (each represents a major section)
│   ├── Navbar.jsx           # Fixed nav with dark mode toggle and scroll progress bar
│   ├── Hero.jsx             # Main hero/intro section
│   ├── About.jsx            # About section with bio
│   ├── PracticeAreas.jsx    # Services/areas of practice
│   ├── Experience.jsx       # Professional experience & education
│   ├── Achievements.jsx     # Stats/key achievements
│   ├── Awards.jsx           # Awards section
│   ├── Testimonials.jsx     # Client testimonials
│   ├── Projects.jsx         # Notable projects & courses
│   ├── Contact.jsx          # Contact form section
│   └── Footer.jsx           # Footer
├── context/
│   └── ThemeContext.jsx     # Dark/light theme provider with localStorage persistence
├── data/
│   └── profile.js           # All content data (single source of truth for site content)
├── App.jsx                  # Main app component (composes all sections)
├── main.jsx                 # React entry point (wraps App with ThemeProvider)
├── App.css                  # Component-specific styles
├── index.css                # Global styles & Tailwind directives
public/                      # Static assets
```

### Theme System

The site uses a **context-based dark mode system**:
- `ThemeContext.jsx` provides `useTheme()` hook returning `{ isDark, toggleTheme }`
- Theme preference is **persisted to localStorage** (`'deepak-theme'`) and respects system preference on first visit
- Components conditionally apply Tailwind classes based on `isDark` flag
- Common color pairs: light mode uses `text-slate-900` + `bg-white`; dark mode uses `text-white` + `bg-slate-900`

### Content Data

All site content is centralized in `src/data/profile.js`. This single object contains:
- Profile metadata (name, title, contact info)
- Education array
- Experience array (internships, positions, roles)
- Practice areas (services)
- Skills, achievements, testimonials, projects

**Pattern**: Components import `{ profile }` and destructure sections. Changing content doesn't require code changes.

### Component Patterns

- Components use **functional components with hooks** (useState, useEffect, useContext)
- **Framer Motion** is used for animations (scroll progress bar, mobile menu animations, hover effects)
- **Tailwind CSS** is primary styling method with dark mode variants (`isDark` conditional classes)
- Components receive no props; they import data from `profile.js`
- Each component has a corresponding section ID (e.g., `<section id="about">`) for navbar scroll-to navigation

### Custom Theme Colors

Tailwind is extended with custom colors in `tailwind.config.js`:
- `navy` (default: `#1E3A8A`, light: `#1E40AF`) - primary brand color
- `gold` (default: `#B45309`, light: `#D97706`) - accent color
- Custom fonts: `display: "EB Garamond"` (serif), `body: "Lato"` (sans-serif)

## Key Dependencies

- **React 19** - UI framework
- **Vite** - Build tool and dev server
- **Tailwind CSS 4.2** - Utility-first styling with PostCSS
- **Framer Motion** - Animation library for scroll effects, transitions
- **ESLint** - Linting with React Hooks and React Refresh plugins

## Important Files for Future Work

- `src/data/profile.js` - **Edit here** to update any site content (experience, education, skills, testimonials, projects, contact info)
- `tailwind.config.js` - Customize colors, fonts, and Tailwind theme
- `src/context/ThemeContext.jsx` - Theme persistence and toggle logic
- `src/components/Navbar.jsx` - Navigation, scroll detection, mobile menu (most complex component)
- `.eslintrc.config.js` - Linting rules (unused vars pattern ignores capitalized names, common for constants/components)

## Dark Mode Implementation Notes

The dark mode uses HTML `dark` class on `document.documentElement`. Components check `isDark` from context to conditionally apply different Tailwind classes. See `Navbar.jsx` for comprehensive examples of dark mode conditional styling.

Recent work (see `DESIGN_IMPROVEMENTS.md` and `DARK_MODE_CONTRAST_FIXES.md`) has focused on improving contrast ratios and dark mode consistency. When updating styles, ensure sufficient contrast for accessibility (WCAG AA minimum).

## ESLint Configuration

- Uses modern flat config format
- Rules ignore capitalized identifiers (for components and constants)
- React Hooks and React Refresh plugins enabled
- No TypeScript currently; JSDoc comments can be used for type hints if needed
