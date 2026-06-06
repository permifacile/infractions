import { useState, useMemo } from 'react';
import { Header } from './components/Header';
import { MatrixSection } from './components/MatrixSection';
import { Controls } from './components/Controls';
import { DataTable } from './components/DataTable';
import { Footer } from './components/Footer';
import { infractions } from './data/infractions';
import { useDebounce } from './hooks/useDebounce';
import { FilterOption } from './types';

const FILTERS: FilterOption[] = [
  { label: 'الكل', value: 'all' },
  { label: 'الجنح والمحاكم', value: 'جنحة' },
  { label: 'الدرجة الأولى (700 درهم)', value: 'الدرجة الأولى' },
  { label: 'الدرجة الثانية (500 درهم)', value: 'الدرجة الثانية' },
  { label: 'الدرجة الثالثة (300 درهم)', value: 'الدرجة الثالثة' }
];

export default function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeFilter, setActiveFilter] = useState('all');
  
  // Performance Enhancement: Debounce search input to avoid thrashing filtering logic on every keystroke
  const debouncedSearchQuery = useDebounce(searchQuery, 300);

  // Performance Analysis: useMemo ensures we only recalculate the filtered dataset when the debounced query or active filter changes
  const filteredData = useMemo(() => {
    return infractions.filter(item => {
      // Data Sanitization / Normalization: Lowercase/normalize for basic robustness, 
      // although Arabic doesn't have strict case sensitivity, standardizing string matching is good practice.
      const searchStr = debouncedSearchQuery.trim();
      const matchesSearch = item.desc.includes(searchStr);
      const matchesFilter = activeFilter === 'all' || item.type === activeFilter;
      return matchesSearch && matchesFilter;
    });
  }, [debouncedSearchQuery, activeFilter]);

  return (
    <div className="min-h-screen px-4 py-8 md:py-12 max-w-7xl mx-auto selection:bg-neon-orange selection:text-black">
      <Header />
      <MatrixSection />
      
      <div className="relative mt-12 pt-8">
        {/* Decorative divider */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-16 h-1 bg-neon-green rounded-full shadow-[0_0_10px_rgba(0,255,102,0.8)]"></div>
        <h2 className="text-3xl font-extrabold text-center mb-8">جدول المخالفات</h2>
        
        <div className="bg-brand-card border border-border-subtle rounded-2xl p-6 md:p-8 shadow-[0_15px_35px_rgba(0,0,0,0.6)]">
          <Controls
            searchQuery={searchQuery}
            onSearchChange={setSearchQuery}
            activeFilter={activeFilter}
            onFilterChange={setActiveFilter}
            filters={FILTERS}
          />
          <DataTable data={filteredData} />
        </div>
      </div>
      
      <Footer />
    </div>
  );
}
