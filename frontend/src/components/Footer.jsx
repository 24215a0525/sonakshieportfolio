import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <footer className="py-10 relative border-t" style={{ background: '#080812', borderColor: 'rgba(168,85,247,0.15)' }}>
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg flex items-center justify-center"
            style={{ background: 'linear-gradient(135deg, #a855f7, #ec4899)' }}>
            <span className="text-white text-sm font-bold" style={{ fontFamily: 'Syne' }}>S</span>
          </div>
          <span className="text-slate-500 text-sm" style={{ fontFamily: 'DM Sans' }}>
            Sonakshi · Full Stack Developer
          </span>
        </div>

        <p className="text-slate-600 text-xs" style={{ fontFamily: 'JetBrains Mono' }}>
          &copy; {new Date().getFullYear()} · Built with React & Node.js
        </p>

        <div className="flex gap-4">
          {['🐙', '💼', '📧'].map((icon, i) => (
            <motion.a
              key={i}
              href="#"
              whileHover={{ scale: 1.2, y: -2 }}
              className="w-9 h-9 rounded-lg flex items-center justify-center text-lg transition-all"
              style={{ background: 'rgba(168,85,247,0.1)', border: '1px solid rgba(168,85,247,0.2)' }}
            >
              {icon}
            </motion.a>
          ))}
        </div>
      </div>
    </footer>
  );
}
