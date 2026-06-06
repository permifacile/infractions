import React from 'react';
import { Infraction } from '../types';
import { Tooltip } from './Tooltip';
import { motion, AnimatePresence } from 'motion/react';
import { AlertCircle } from 'lucide-react';

interface DataTableProps {
  data: Infraction[];
}

const getBadgeStyles = (classType: number) => {
  switch (classType) {
    case 4: return 'bg-neon-red shadow-[0_0_10px_rgba(255,51,51,0.35)] text-white';
    case 1: return 'bg-neon-orange shadow-[0_0_10px_rgba(255,153,0,0.35)] text-black';
    case 2: return 'bg-neon-blue shadow-[0_0_10px_rgba(0,204,255,0.35)] text-black';
    case 3: return 'bg-neon-green shadow-[0_0_10px_rgba(0,255,102,0.35)] text-black';
    case 5: return 'bg-zinc-600 text-white';
    default: return 'bg-gray-500 text-white';
  }
};

export function DataTable({ data }: DataTableProps) {
  if (data.length === 0) {
    return (
      <div className="py-16 text-center text-brand-muted bg-brand-card rounded-xl border border-border-subtle bg-opacity-50">
        <p className="text-lg">لا توجد نتائج مطابقة لبحثك.</p>
        <p className="text-sm mt-2 opacity-75">جرب كتابة كلمات أخرى (مثال: سكر، فرار، حزام، هاتف)...</p>
      </div>
    );
  }

  return (
    <div className="w-full">
      {/* Desktop View (Table) */}
      <div className="hidden lg:block border border-border-subtle rounded-xl overflow-hidden bg-brand-card shadow-2xl">
        <table className="w-full text-right border-collapse">
          <thead>
            <tr className="bg-brand-bg border-b border-border-subtle">
              <th className="p-4 text-brand-muted font-bold w-5/12">المخالفة أو السلوك المروري</th>
              <th className="p-4 text-brand-muted font-bold w-2/12">التصنيف</th>
              <th className="p-4 text-brand-muted font-bold w-3/12">الغرامة والإجراء المصاحب</th>
              <th className="p-4 text-brand-muted font-bold w-2/12 text-left">النقط المخصومة</th>
            </tr>
          </thead>
          <tbody>
            <AnimatePresence>
              {data.map((item, idx) => (
                <motion.tr
                  key={idx}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="border-b border-border-subtle last:border-b-0 hover:bg-[rgba(255,255,255,0.02)] transition-colors"
                >
                  <td className="p-4 text-white font-medium pl-6">{item.desc}</td>
                  <td className="p-4">
                    <span className={`inline-block px-3 py-1 text-xs font-extrabold rounded-full whitespace-nowrap ${getBadgeStyles(item.classType)}`}>
                      {item.type}
                    </span>
                  </td>
                  <td className="p-4">
                    <div className="flex items-center gap-2">
                      <span className="font-bold">{item.fine}</span>
                      {item.measures && (
                        <Tooltip content={item.measures}>
                          <span className="flex items-center justify-center w-6 h-6 rounded-full border border-neon-red text-neon-red font-bold text-sm hover:bg-neon-red hover:text-white hover:shadow-[0_0_8px_rgba(255,51,51,1)] transition-all">
                            !
                          </span>
                        </Tooltip>
                      )}
                    </div>
                  </td>
                  <td className={`p-4 text-left font-extrabold text-lg ${item.points >= 4 ? 'text-neon-red drop-shadow-[0_0_8px_rgba(255,51,51,0.4)]' : 'text-neon-green'}`}>
                    <span className="font-sans" dir="ltr">{item.points === 0 ? '-' : `-${item.points}`}</span>
                  </td>
                </motion.tr>
              ))}
            </AnimatePresence>
          </tbody>
        </table>
      </div>

      {/* Mobile/Tablet View (Cards) - Superior UX for dense text */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:hidden">
        <AnimatePresence>
          {data.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-brand-card border border-border-subtle rounded-xl p-5 shadow-lg relative overflow-hidden"
            >
              {/* Point Indicator background highlight */}
              <div className={`absolute top-0 left-0 w-1.5 h-full ${item.points >= 4 ? 'bg-neon-red shadow-[0_0_10px_rgba(255,51,51,0.5)]' : item.points > 0 ? 'bg-neon-orange shadow-[0_0_10px_rgba(255,153,0,0.5)]' : 'bg-brand-muted'} opacity-50`}></div>
              
              <div className="flex justify-between items-start mb-3">
                <span className={`inline-block px-3 py-1 text-xs font-extrabold rounded-full ${getBadgeStyles(item.classType)}`}>
                  {item.type}
                </span>
                <span className={`font-extrabold text-xl font-sans ${item.points >= 4 ? 'text-neon-red drop-shadow-[0_0_8px_rgba(255,51,51,0.4)]' : 'text-neon-green'}`} dir="ltr">
                  {item.points === 0 ? '-' : `-${item.points}`}
                </span>
              </div>
              
              <p className="text-white font-medium mb-4 leading-relaxed">{item.desc}</p>
              
              <div className="bg-brand-bg rounded-lg p-3 border border-border-subtle">
                <p className="font-bold text-sm mb-2 text-brand-text">{item.fine}</p>
                {item.measures && (
                  <div className="flex items-start gap-2 text-xs text-neon-red mt-2 pt-2 border-t border-border-subtle">
                    <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
                    <span>{item.measures}</span>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
}
