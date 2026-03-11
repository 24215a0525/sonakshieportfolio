import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const achievements = [
  {
    id: 1,
    icon: '📄',
    title: 'Research Paper Published',
    subtitle: 'IEEE / National Journal',
    description: 'Published a research paper on AI-powered systems exploring machine learning applications in real-world scenarios. Recognized by peers in the academic community.',
    gradient: 'linear-gradient(135deg, #7c3aed, #4f46e5)',
    tags: ['Research', 'AI/ML', 'Published']
  },
  {
    id: 2,
    icon: '⚡',
    title: 'Hackathon Participant',
    subtitle: '4 hr hackathon',
    description: 'Participated in 4hr Hackathon, developing innovative tech solutions under 4-hour time constraints. Collaborated in a cross-functional team.',
    gradient: 'linear-gradient(135deg, #ec4899, #8b5cf6)',
    tags: ['Hackathon', 'Teamwork', 'Innovation']
  },
  {
    id: 3,
    icon: '🏆',
    title: 'Hackathon Participant',
    subtitle: 'GDG Hackathon',
    description: 'Competed in GDG Hackathon, building a prototype that addressed real-world problems in a fast-paced, competitive environment with industry mentors.',
    gradient: 'linear-gradient(135deg, #0891b2, #7c3aed)',
    tags: ['Hackathon', 'Problem Solving', 'Fintech']
  }
];

const AchievementCard = ({ item, index }) => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      whileHover={{ y: -8, scale: 1.02 }}
      className="group relative rounded-2xl overflow-hidden cursor-pointer"
      style={{ background: '#13131f', border: '1px solid rgba(168,85,247,0.15)' }}
    >
      {/* Top gradient bar */}
      <div className="h-1.5" style={{ background: item.gradient }} />

      <div className="p-6">
        {/* Icon */}
        <div className="w-14 h-14 rounded-2xl flex items-center justify-center text-3xl mb-5 relative"
          style={{ background: `${item.gradient.replace('linear-gradient(135deg, ', '').split(',')[0]}20` }}>
          <span>{item.icon}</span>
          <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"
            style={{ background: item.gradient, opacity: 0.15 }} />
        </div>

        <h3 className="text-xl font-bold text-white mb-1" style={{ fontFamily: 'Syne' }}>
          {item.title}
        </h3>
        <p className="text-sm mb-3" style={{
          background: item.gradient,
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
          fontFamily: 'DM Sans',
          fontWeight: '600'
        }}>
          {item.subtitle}
        </p>
        <p className="text-slate-400 text-sm leading-relaxed mb-5">{item.description}</p>

        <div className="flex flex-wrap gap-2">
          {item.tags.map(tag => (
            <span key={tag} className="text-xs px-3 py-1 rounded-full"
              style={{ background: 'rgba(168,85,247,0.1)', color: '#c084fc', border: '1px solid rgba(168,85,247,0.2)', fontFamily: 'JetBrains Mono' }}>
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Hover glow overlay */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none rounded-2xl"
        style={{ background: 'radial-gradient(circle at 50% 0%, rgba(168,85,247,0.08), transparent 60%)' }} />
    </motion.div>
  );
};

export default function Achievements() {
  const [ref, inView] = useInView({ triggerOnce: true });

  return (
    <section id="achievements" className="py-24 relative" style={{ background: '#080812' }}>
      <div className="absolute top-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(236,72,153,0.5), transparent)' }} />

      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <span className="text-xs px-4 py-2 rounded-full mb-4 inline-block"
            style={{ background: 'rgba(236,72,153,0.1)', border: '1px solid rgba(236,72,153,0.3)', color: '#f9a8d4', fontFamily: 'JetBrains Mono' }}>
            // milestones
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mt-4" style={{ fontFamily: 'Syne' }}>
            Achievements &{' '}
            <span style={{ background: 'linear-gradient(135deg, #a855f7, #ec4899)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
              Awards
            </span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {achievements.map((item, i) => (
            <AchievementCard key={item.id} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
