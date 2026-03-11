import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const education = [
  {
    level: 'BTech in Computer Science',
    institution: 'B.V.Raju Institute of Technology',
    period: '2024 – Present',
    desc: 'Currently pursuing B.Tech in Computer Science. Engaged in full-stack development, AI research, and competitive programming.',
    status: 'current',
    icon: '🎓'
  },
  {
    level: 'Diploma in Computer Science',
    institution: 'Government Polytechnic College',
    period: '2021 – 2024',
    desc: 'Graduated with distinction. Built strong foundations in programming, database management, and software engineering principles.',
    status: 'completed',
    icon: '📜'
  },
  {
    level: 'Schooling (10th Standard)',
    institution: 'Nalanda High School',
    period: '2007 – 2021',
    desc: 'Completed schooling with excellence in Mathematics and Science. Developed a passion for computers and problem-solving.',
    status: 'completed',
    icon: '🏫'
  }
];

const TimelineItem = ({ item, index, isLast }) => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className={`flex gap-8 relative ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
    >
      {/* Content Card */}
      <div className="flex-1">
        <motion.div
          whileHover={{ scale: 1.02 }}
          className="rounded-2xl p-6 relative group"
          style={{
            background: '#13131f',
            border: item.status === 'current'
              ? '1px solid rgba(168,85,247,0.5)'
              : '1px solid rgba(168,85,247,0.15)'
          }}
        >
          {item.status === 'current' && (
            <div className="absolute -top-3 right-4">
              <span className="text-xs px-3 py-1 rounded-full font-semibold"
                style={{ background: 'linear-gradient(135deg, #a855f7, #ec4899)', color: 'white', fontFamily: 'JetBrains Mono' }}>
                ● Current
              </span>
            </div>
          )}

          <div className="flex items-start gap-4">
            <div className="text-3xl">{item.icon}</div>
            <div>
              <h3 className="text-lg font-bold text-white mb-1" style={{ fontFamily: 'Syne' }}>{item.level}</h3>
              <p className="text-purple-400 text-sm mb-1" style={{ fontFamily: 'DM Sans' }}>{item.institution}</p>
              <span className="text-xs text-slate-500 mb-3 inline-block" style={{ fontFamily: 'JetBrains Mono' }}>
                📅 {item.period}
              </span>
              <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
            </div>
          </div>

          {/* Hover glow */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl pointer-events-none"
            style={{ background: 'radial-gradient(circle at center, rgba(168,85,247,0.05), transparent)' }} />
        </motion.div>
      </div>

      {/* Timeline center dot */}
      <div className="flex flex-col items-center w-12 shrink-0">
        <motion.div
          initial={{ scale: 0 }}
          animate={inView ? { scale: 1 } : {}}
          transition={{ delay: index * 0.15 + 0.2, type: 'spring' }}
          className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 z-10"
          style={{
            background: item.status === 'current'
              ? 'linear-gradient(135deg, #a855f7, #ec4899)'
              : 'rgba(168,85,247,0.2)',
            border: '2px solid rgba(168,85,247,0.5)',
            boxShadow: item.status === 'current' ? '0 0 20px rgba(168,85,247,0.5)' : 'none'
          }}
        >
          <span className="text-sm">{item.status === 'current' ? '⚡' : '✓'}</span>
        </motion.div>
        {!isLast && (
          <motion.div
            initial={{ scaleY: 0 }}
            animate={inView ? { scaleY: 1 } : {}}
            transition={{ duration: 0.6, delay: index * 0.15 + 0.3 }}
            className="w-0.5 flex-1 mt-2 origin-top"
            style={{ background: 'linear-gradient(180deg, rgba(168,85,247,0.4), rgba(236,72,153,0.2))' }}
          />
        )}
      </div>

      {/* Empty space for alternating layout */}
      <div className="flex-1 hidden md:block" />
    </motion.div>
  );
};

export default function Education() {
  const [ref, inView] = useInView({ triggerOnce: true });

  return (
    <section id="education" className="py-24 relative" style={{ background: '#0a0a16' }}>
      <div className="absolute inset-0 opacity-5"
        style={{ background: 'radial-gradient(ellipse at 70% 50%, #7c3aed, transparent 60%)' }} />

      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <span className="text-xs px-4 py-2 rounded-full mb-4 inline-block"
            style={{ background: 'rgba(168,85,247,0.1)', border: '1px solid rgba(168,85,247,0.3)', color: '#c084fc', fontFamily: 'JetBrains Mono' }}>
            // education
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mt-4" style={{ fontFamily: 'Syne' }}>
            Learning{' '}
            <span style={{ background: 'linear-gradient(135deg, #a855f7, #ec4899)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
              Journey
            </span>
          </h2>
        </motion.div>

        <div className="flex flex-col gap-8">
          {education.map((item, i) => (
            <TimelineItem key={i} item={item} index={i} isLast={i === education.length - 1} />
          ))}
        </div>
      </div>
    </section>
  );
}
