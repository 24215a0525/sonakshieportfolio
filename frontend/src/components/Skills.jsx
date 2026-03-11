import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const skills = [
  { name: 'Java', icon: '☕', color: '#f59e0b', bg: 'rgba(245,158,11,0.08)', level: 'Advanced' },
  { name: 'JavaScript', icon: '🟨', color: '#facc15', bg: 'rgba(250,204,21,0.08)', level: 'Expert' },
  { name: 'React', icon: '⚛️', color: '#61dafb', bg: 'rgba(97,218,251,0.08)', level: 'Expert' },
  { name: 'Node.js', icon: '🟩', color: '#68a063', bg: 'rgba(104,160,99,0.08)', level: 'Advanced' },
  { name: 'MongoDB', icon: '🍃', color: '#4db33d', bg: 'rgba(77,179,61,0.08)', level: 'Advanced' },
  { name: 'SQL', icon: '🗄️', color: '#4fc3f7', bg: 'rgba(79,195,247,0.08)', level: 'Intermediate' },
  { name: 'HTML', icon: '🧡', color: '#e34c26', bg: 'rgba(227,76,38,0.08)', level: 'Expert' },
  { name: 'CSS', icon: '🎨', color: '#2965f1', bg: 'rgba(41,101,241,0.08)', level: 'Expert' },
  { name: 'Git', icon: '🔀', color: '#f05032', bg: 'rgba(240,80,50,0.08)', level: 'Advanced' },
]

const levelColors = {
  Expert: '#a78bfa',
  Advanced: '#34d399',
  Intermediate: '#60a5fa',
}

function SkillCard({ skill, index }) {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <motion.div
      ref={ref}
      className="group relative rounded-2xl p-6 cursor-default transition-all duration-300"
      style={{
        background: skill.bg,
        border: '1px solid rgba(255,255,255,0.06)',
      }}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.08, duration: 0.6, ease: 'easeOut' }}
      whileHover={{
        scale: 1.05,
        boxShadow: `0 0 30px ${skill.color}40, 0 0 60px ${skill.color}15`,
        borderColor: `${skill.color}50`,
      }}
    >
      {/* Icon */}
      <div className="text-4xl mb-4">{skill.icon}</div>

      {/* Name */}
      <h3 className="font-display font-semibold text-white text-lg mb-2">{skill.name}</h3>

      {/* Level badge */}
      <span
        className="inline-block font-mono text-xs px-3 py-1 rounded-full"
        style={{
          color: levelColors[skill.level],
          background: `${levelColors[skill.level]}15`,
          border: `1px solid ${levelColors[skill.level]}30`,
        }}
      >
        {skill.level}
      </span>

      {/* Glow on hover */}
      <div
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        style={{
          background: `radial-gradient(circle at center, ${skill.color}08 0%, transparent 70%)`,
        }}
      />
    </motion.div>
  )
}

export default function Skills() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section id="skills" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <motion.div
          ref={ref}
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <span className="font-mono text-sm text-violet-400 tracking-widest uppercase">What I know</span>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-white mt-3 mb-4">
            Tech <span className="gradient-text">Stack</span>
          </h2>
          <p className="text-gray-400 font-body text-lg max-w-xl mx-auto">
            Technologies I use to bring ideas to life — from concept to deployment.
          </p>
          {/* Decorative line */}
          <div className="flex items-center justify-center gap-3 mt-6">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-violet-500" />
            <div className="w-2 h-2 rounded-full bg-violet-500" />
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-violet-500" />
          </div>
        </motion.div>

        {/* Skills grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {skills.map((skill, i) => (
            <SkillCard key={skill.name} skill={skill} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
