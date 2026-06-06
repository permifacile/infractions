import { ShieldAlert, TrendingDown, Coins, Siren } from 'lucide-react';
import { motion } from 'motion/react';

const matrixData = [
  {
    id: 'green',
    icon: ShieldAlert,
    title: 'فخ الـ (0 نقطة)',
    colorClass: 'text-neon-green',
    borderHover: 'hover:border-neon-green',
    shadowHover: 'hover:shadow-[0_5px_25px_rgba(0,255,102,0.12)]',
    items: [
      'قطع خط متصل بمفرده: مالي فقط (0 نقطة) وليس كالتجاوز المعيب.',
      'أعطال ومعدات العربة: عجلات ممسوحة، غياب السير الكابح أو الأضواء (0 نقطة).',
      'المخالفات الإدارية والركاب: ركاب بدون سمطة، وقوف غير قانوني (0 نقطة).'
    ]
  },
  {
    id: 'orange',
    icon: TrendingDown,
    title: 'سلم النقط',
    colorClass: 'text-neon-orange',
    borderHover: 'hover:border-neon-orange',
    shadowHover: 'hover:shadow-[0_5px_25px_rgba(255,153,0,0.12)]',
    items: [
      '1 نقطة: تهاون داخلي (سمطة السائق، هاتف ممسوك باليد، طفل بالقدام).',
      '2 نقط: الأسبقية والأدوية ورفض الامتثال لأعوان السير.',
      '3 نقط: الفحص التقني (الزيارة) والسير العكسي الخفيف.',
      '4 نقط: الرباعي القاتل (ضوء أحمر، قف، اتجاه ممنوع، التجاوز المعيب).'
    ]
  },
  {
    id: 'blue',
    icon: Coins,
    title: 'هندسة الغرامات',
    colorClass: 'text-neon-blue',
    borderHover: 'hover:border-neon-blue',
    shadowHover: 'hover:shadow-[0_5px_25px_rgba(0,204,255,0.12)]',
    items: [
      'الدرجة 3 (300 درهم): مضايقة السير، عيوب الأجهزة، تجاوز السرعة <20 كم/س.',
      'الدرجة 2 (500 درهم): إهمال السلوك، حزام السلامة، الهاتف، عدم احترام الراجلين.',
      'الدرجة 1 (700 درهم): التجاوز المعيب، خط متصل، ضوء أحمر، قف، السرعة 30-50 كم/س.'
    ]
  },
  {
    id: 'red',
    icon: Siren,
    title: 'التوقيف VS الحجز',
    colorClass: 'text-neon-red',
    borderHover: 'hover:border-neon-red',
    shadowHover: 'hover:shadow-[0_5px_25px_rgba(255,51,51,0.12)]',
    items: [
      'توقيف العربة (Immobilization): إصلاح الخلل فوري (عطب تقني، غياب وثيقة).',
      'المحجز (الفوريير): خلل قانوني جسيم أو جنائي (بدون تأمين، صفائح مزورة، فرار).'
    ]
  }
];

export function MatrixSection() {
  return (
    <div className="mb-14">
      <div className="flex items-center mb-6">
        <div className="w-1.5 h-8 bg-neon-orange rounded-full ml-3 shadow-[0_0_10px_rgba(255,153,0,0.5)]"></div>
        <h2 className="text-2xl font-extrabold text-brand-text">المنهجية</h2>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5">
        {matrixData.map((card, idx) => (
          <motion.div
            key={card.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1, duration: 0.4 }}
            className={`bg-brand-card border border-border-subtle rounded-xl p-6 transition-all duration-300 ${card.borderHover} ${card.shadowHover}`}
          >
            <card.icon strokeWidth={2.5} className={`w-8 h-8 mb-4 ${card.colorClass}`} />
            <h3 className={`text-lg font-bold mb-3 ${card.colorClass}`}>{card.title}</h3>
            <ul className="text-sm text-brand-muted space-y-2">
              {card.items.map((item, i) => (
                <li key={i} className="flex relative pl-2 before:content-['•'] before:absolute before:-right-3 before:text-brand-text pr-3">
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
