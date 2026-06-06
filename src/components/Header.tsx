import { Github } from 'lucide-react';

export function Header() {
  return (
    <div className="relative text-center mb-12 pt-8 sm:pt-4">
      {/* GitHub Badge in Top-Left (RTL friendly secondary location) */}
      <div className="absolute top-0 left-0">
        <a
          href="https://github.com/permifacile/infractions"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-card hover:bg-brand-hover text-brand-muted hover:text-brand-text border border-border-subtle transition-all duration-300 hover:shadow-[0_0_15px_rgba(255,255,255,0.1)] text-xs md:text-sm font-medium"
        >
          <Github className="w-4 h-4" />
          <span>تعديل</span>
        </a>
      </div>

      {/* Visual Identity Application */}
      <div className="flex flex-col items-center gap-4 mb-4 pt-4">
        <div className="relative">
          <div className="absolute inset-0 bg-neon-green/20 blur-xl rounded-full"></div>
          <img 
            src="./logo.png" 
            alt="PermiFacile Logo" 
            className="relative w-28 h-28 md:w-36 md:h-36 object-contain drop-shadow-[0_0_15px_rgba(255,153,0,0.4)]"
            onError={(e) => {
              e.currentTarget.style.display = 'none';
            }}
          />
        </div>
        <h1 className="text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-neon-orange to-neon-red drop-shadow-[0_0_10px_rgba(255,153,0,0.3)]">
          PermiFacile
        </h1>
      </div>
      <p className="text-brand-muted text-lg md:text-xl font-bold tracking-wide drop-shadow-[0_0_10px_rgba(255,255,255,0.1)]">
        المخالفات و العقوبات
      </p>
    </div>
  );
}
