import React from 'react';
import { FilterOption } from '../types';
import { Search } from 'lucide-react';

interface ControlsProps {
  searchQuery: string;
  onSearchChange: (val: string) => void;
  activeFilter: string;
  onFilterChange: (val: string) => void;
  filters: FilterOption[];
}

export function Controls({
  searchQuery,
  onSearchChange,
  activeFilter,
  onFilterChange,
  filters
}: ControlsProps) {
  return (
    <div className="mb-8 space-y-6">
      {/* Accessible Search Input with Icon */}
      <div className="relative group">
        <div className="absolute inset-y-0 right-0 flex items-center pr-4 pointer-events-none">
          <Search className="w-5 h-5 text-brand-muted group-focus-within:text-neon-blue transition-colors" />
        </div>
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          placeholder="ابحث بالكلمة المفتاحية (مثال: هاتف، حزام، السكة، كحول، فرار)..."
          className="w-full pl-4 pr-12 py-4 bg-brand-main border border-border-subtle rounded-xl text-base text-brand-text outline-none transition-all duration-300 focus:border-neon-blue focus:shadow-[0_0_15px_rgba(0,204,255,0.15)] bg-opacity-50"
          aria-label="Search infractions"
        />
      </div>

      {/* Filter Pills */}
      <div className="flex flex-wrap gap-2">
        {filters.map((filter) => {
          const isActive = activeFilter === filter.value;
          return (
            <button
              key={filter.value}
              onClick={() => onFilterChange(filter.value)}
              className={`flex-1 sm:flex-none px-4 py-2.5 rounded-lg font-semibold text-sm transition-all duration-200 border ${
                isActive
                  ? 'bg-neon-orange text-black border-neon-orange shadow-[0_0_15px_rgba(255,153,0,0.3)]'
                  : 'bg-brand-bg text-brand-muted border-border-subtle hover:bg-brand-hover hover:text-brand-text'
              }`}
            >
              {filter.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}
