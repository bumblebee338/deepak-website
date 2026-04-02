import { profile } from '../data/profile';
import { useTheme } from '../context/ThemeContext';

export default function Footer() {
  const { isDark } = useTheme();
  const currentYear = new Date().getFullYear();

  return (
    <footer className={`text-center py-8 px-4 transition-theme ${
      isDark
        ? 'bg-slate-950 border-t border-slate-800'
        : 'bg-slate-900'
    }`}>
      <div className="max-w-6xl mx-auto">
        <p className="font-bold text-lg text-gold mb-2">{profile.name}</p>
        <p className={`mb-4 transition-theme ${isDark ? 'text-slate-200' : 'text-blue-100'}`}>{profile.subtitle}</p>
        <p className={`text-sm mb-4 transition-theme ${isDark ? 'text-slate-300' : 'text-blue-100'}`}>{profile.contact.location}</p>
        <div className={`transition-theme ${isDark ? 'border-slate-800' : 'border-slate-700'} border-t pt-6 mt-6`}>
          <p className={`text-xs transition-theme ${
            isDark ? 'text-slate-300' : 'text-slate-400'
          }`}>
            © {currentYear} {profile.name}. All rights reserved. | Professional Legal Services
          </p>
        </div>
      </div>
    </footer>
  );
}
