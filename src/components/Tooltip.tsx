import React from 'react';
import { AlertCircle } from 'lucide-react';

export function Tooltip({ children, content }: { children: React.ReactNode; content: React.ReactNode }) {
  return (
    <div className="relative inline-flex items-center group cursor-pointer">
      {children}
      {/* Mobile-friendly positioning and touch handling */}
      <div className="absolute bottom-[calc(100%+10px)] left-1/2 -translate-x-1/2 w-[240px] sm:w-[280px] p-4 bg-brand-bg border border-neon-red text-brand-text text-sm rounded-xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible group-active:opacity-100 group-active:visible transition-all duration-200 z-50 text-right">
        <div>
          <strong className="text-neon-red font-bold flex items-center gap-2 mb-2">
            <AlertCircle className="w-4 h-4" />
            إجراء إداري / قضائي إضافي:
          </strong>
          <p className="leading-relaxed text-brand-muted">{content}</p>
        </div>
        {/* Triangle pointer */}
        <div className="absolute top-[100%] left-1/2 -translate-x-1/2 border-[7px] border-transparent border-t-neon-red"></div>
        <div className="absolute top-[100%] left-1/2 -translate-x-1/2 border-[6px] border-transparent border-t-brand-bg -mt-[2px]"></div>
      </div>
    </div>
  );
}
