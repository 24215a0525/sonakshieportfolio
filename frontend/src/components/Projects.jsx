import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const project2Image = '/assets/project%202.png';
const project1Image = '/assets/project%201.png';
const defaultProjects = [
  {
    _id: '1', title: 'Hostel Finding & Booking System',
    description: 'A full-stack web platform enabling students to discover, compare, and book hostel accommodations with real-time availability and secure payments.',
    techStack: ['React', 'Node.js', 'MongoDB', 'Express'],
    githubLink: 'https://github.com/24215a0525/RentSmart-Hostelfinder-and-Housing',
    image: project1Image
  },
  {
    _id: '2', title: 'Smart Sound – AI Music',
    description: 'AI-powered music recommendation engine analyzing mood and listening history to curate personalized playlists using collaborative filtering.',
    techStack: ['Python', 'React', 'Flask', 'TensorFlow'],
    githubLink: 'https://github.com/24215a0525/face-recognization-web/tree/main',
    image: project2Image
  },
 
];

const projectColors = [
  { from: '#7c3aed', to: '#db2777', emoji: '🏠' },
  { from: '#0891b2', to: '#7c3aed', emoji: '🎵' },
  { from: '#059669', to: '#0891b2', emoji: '🔒' },
];

const ProjectModal = ({ project, onClose, color }) => (
  <AnimatePresence>
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ background: 'rgba(0,0,0,0.85)', backdropFilter: 'blur(8px)' }}
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.8, y: 40 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.8, y: 40 }}
        transition={{ type: 'spring', duration: 0.4 }}
        className="relative max-w-lg w-full rounded-3xl overflow-hidden"
        style={{ background: '#13131f', border: '1px solid rgba(168,85,247,0.3)' }}
        onClick={e => e.stopPropagation()}
      >
        {/* Header gradient */}
        <div className="h-48 flex items-center justify-center relative"
          style={{ background: `linear-gradient(135deg, ${color.from}30, ${color.to}30)` }}>
          {project.image ? (
            <img
              src={project.image}
              alt={project.title}
              className="h-full w-full object-cover"
            />
          ) : (
            <div className="text-7xl">{color.emoji}</div>
          )}
          <div className="absolute inset-0 opacity-20"
            style={{ background: `linear-gradient(135deg, ${color.from}, ${color.to})` }} />
        </div>

        <div className="p-8">
          <h3 className="text-2xl font-bold text-white mb-3" style={{ fontFamily: 'Syne' }}>{project.title}</h3>
          <p className="text-slate-400 mb-5 leading-relaxed">{project.description}</p>

          <div className="flex flex-wrap gap-2 mb-6">
            {project.techStack?.map(t => (
              <span key={t} className="text-xs px-3 py-1.5 rounded-full"
                style={{ background: 'rgba(168,85,247,0.15)', color: '#c084fc', border: '1px solid rgba(168,85,247,0.3)', fontFamily: 'JetBrains Mono' }}>
                {t}
              </span>
            ))}
          </div>

          <div className="flex gap-4">
            {project.githubLink && (
              <a href={project.githubLink} target="_blank" rel="noreferrer"
                className="glow-btn px-6 py-3 rounded-xl text-white text-sm font-semibold flex items-center gap-2">
                🐙 GitHub
              </a>
            )}
            {project.liveLink && (
              <a href={project.liveLink} target="_blank" rel="noreferrer"
                className="glow-btn-outline px-6 py-3 rounded-xl text-slate-300 text-sm font-semibold flex items-center gap-2">
                🔗 Live Demo
              </a>
            )}
            <button onClick={onClose}
              className="ml-auto px-4 py-3 rounded-xl text-slate-500 hover:text-slate-300 transition-colors text-sm">
              ✕ Close
            </button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  </AnimatePresence>
);

export default function Projects() {
  const [projects, setProjects] = useState(defaultProjects);
  const [selected, setSelected] = useState(null);
  const [ref, inView] = useInView({ triggerOnce: true });

  useEffect(() => {
    fetch('/api/projects')
      .then(r => r.json())
      .then(data => { if (data.length > 0) setProjects(data); })
      .catch(() => {});
  }, []);

  return (
    <section id="projects" className="py-24 relative" style={{ background: '#080812' }}>
      <div className="absolute top-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(90deg, transparent, rgba(168,85,247,0.5), transparent)' }} />

      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <span className="text-xs px-4 py-2 rounded-full mb-4 inline-block"
            style={{ background: 'rgba(236,72,153,0.1)', border: '1px solid rgba(236,72,153,0.3)', color: '#f9a8d4', fontFamily: 'JetBrains Mono' }}>
            // featured work
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mt-4" style={{ fontFamily: 'Syne' }}>
            <span style={{ background: 'linear-gradient(135deg, #a855f7, #ec4899)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
              Projects
            </span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => {
            const color = projectColors[i % projectColors.length];
            return (
              <motion.div
                key={project._id || i}
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -8 }}
                className="group rounded-2xl overflow-hidden cursor-pointer relative"
                style={{ background: '#13131f', border: '1px solid rgba(168,85,247,0.15)' }}
                onClick={() => setSelected({ project, color })}
              >
                {/* Image area */}
                <div className="h-48 flex items-center justify-center relative overflow-hidden"
                  style={{ background: `linear-gradient(135deg, ${color.from}20, ${color.to}20)` }}>
                  {project.image ? (
                    <motion.img
                      src={project.image}
                      alt={project.title}
                      whileHover={{ scale: 1.08 }}
                      transition={{ duration: 0.3 }}
                      className="h-full w-full object-cover z-10"
                    />
                  ) : (
                    <motion.div
                      whileHover={{ scale: 1.2 }}
                      transition={{ duration: 0.3 }}
                      className="text-6xl z-10"
                    >
                      {color.emoji}
                    </motion.div>
                  )}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity duration-300"
                    style={{ background: `linear-gradient(135deg, ${color.from}, ${color.to})` }} />
                  {/* Glow */}
                  <div className="absolute bottom-0 left-0 right-0 h-px opacity-0 group-hover:opacity-100 transition-opacity"
                    style={{ background: `linear-gradient(90deg, transparent, ${color.from}, ${color.to}, transparent)` }} />
                </div>

                <div className="p-6">
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-purple-300 transition-colors" style={{ fontFamily: 'Syne' }}>
                    {project.title}
                  </h3>
                  <p className="text-slate-400 text-sm mb-4 line-clamp-2 leading-relaxed">{project.description}</p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.techStack?.slice(0,3).map(t => (
                      <span key={t} className="text-xs px-2 py-1 rounded-md"
                        style={{ background: 'rgba(168,85,247,0.1)', color: '#c084fc', fontFamily: 'JetBrains Mono' }}>
                        {t}
                      </span>
                    ))}
                    {project.techStack?.length > 3 && (
                      <span className="text-xs px-2 py-1 rounded-md text-slate-500">+{project.techStack.length - 3}</span>
                    )}
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-xs text-slate-500 group-hover:text-purple-400 transition-colors" style={{ fontFamily: 'JetBrains Mono' }}>
                      Click for details →
                    </span>
                    {project.githubLink && (
                      <a href={project.githubLink} target="_blank" rel="noreferrer"
                        className="text-slate-500 hover:text-white transition-colors text-lg"
                        onClick={e => e.stopPropagation()}>🐙</a>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {selected && (
        <ProjectModal
          project={selected.project}
          color={selected.color}
          onClose={() => setSelected(null)}
        />
      )}
    </section>
  );
}
