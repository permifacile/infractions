import { Youtube, Facebook, Instagram, Github } from 'lucide-react';

function TiktokIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
    </svg>
  );
}

export function Footer() {
  const socialLinks = [
    { icon: Youtube, href: 'https://youtube.com/@PermiFacile', title: 'يوتيوب', hoverClass: 'hover:bg-[#ff0000] hover:border-[#ff0000] hover:shadow-[0_0_15px_rgba(255,0,0,0.5)]' },
    { icon: Facebook, href: 'https://facebook.com/PermiFacile', title: 'فيسبوك', hoverClass: 'hover:bg-[#1877f2] hover:border-[#1877f2] hover:shadow-[0_0_15px_rgba(24,119,242,0.5)]' },
    { icon: Instagram, href: 'https://instagram.com/permifacil', title: 'إنستغرام', hoverClass: 'hover:bg-gradient-to-tr hover:from-[#f09433] hover:via-[#dc2743] hover:to-[#bc1888] hover:border-transparent hover:shadow-[0_0_15px_rgba(220,39,67,0.5)]' },
    { icon: TiktokIcon, href: 'https://tiktok.com/@permifacil', title: 'تيك توك', hoverClass: 'hover:bg-[#000] hover:border-[#ff0050] hover:shadow-[0_0_15px_rgba(255,0,80,0.5)] hover:text-white' },
    { icon: Github, href: 'https://github.com/permifacile', title: 'Github', hoverClass: 'hover:bg-[#333] hover:border-white hover:shadow-[0_0_15px_rgba(255,255,255,0.3)]' },
  ];

  return (
    <div className="mt-16 pt-8 border-t border-border-subtle flex justify-center gap-4 flex-wrap pb-12">
      {socialLinks.map((link, idx) => (
        <a
          key={idx}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          title={link.title}
          className={`flex items-center justify-center w-12 h-12 rounded-full bg-brand-card text-brand-muted border border-border-subtle transition-all duration-300 hover:-translate-y-1 hover:text-white ${link.hoverClass}`}
        >
          <link.icon className="w-5 h-5" />
        </a>
      ))}
    </div>
  );
}
