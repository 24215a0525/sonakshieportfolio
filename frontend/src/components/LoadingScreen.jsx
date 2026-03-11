import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

const letters = "LOADING PORTFOLIO".split('')

export default function LoadingScreen({ onComplete }) {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(p => {
        if (p >= 100) { clearInterval(interval); return 100 }
        return p + Math.random() * 8 + 2
      })
    }, 80)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    if (progress < 100 || !onComplete) return

    // Let the 100% state render briefly before transitioning to main content.
    const doneTimer = setTimeout(() => {
      onComplete()
    }, 500)

    return () => clearTimeout(doneTimer)
  }, [progress, onComplete])

  return (
    <motion.div
      className="fixed inset-0 bg-dark-900 flex flex-col items-center justify-center z-50 overflow-hidden"
      exit={{ opacity: 0, scale: 1.05 }}
      transition={{ duration: 0.6, ease: 'easeInOut' }}
    >
      {/* Animated bg rings */}
      <div className="absolute inset-0 flex items-center justify-center">
        {[...Array(4)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full border border-violet-500/20"
            style={{ width: 200 + i * 120, height: 200 + i * 120 }}
            animate={{ rotate: i % 2 === 0 ? 360 : -360, scale: [1, 1.05, 1] }}
            transition={{ duration: 8 + i * 2, repeat: Infinity, ease: 'linear' }}
          />
        ))}
      </div>

      {/* Center logo */}
      <motion.div
        className="relative z-10 flex flex-col items-center"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* S monogram */}
        <motion.div
          className="w-24 h-24 rounded-2xl flex items-center justify-center mb-8 relative"
          style={{ background: 'linear-gradient(135deg, #8b5cf6, #d946ef)' }}
          animate={{ boxShadow: ['0 0 20px rgba(139,92,246,0.3)', '0 0 60px rgba(217,70,239,0.6)', '0 0 20px rgba(139,92,246,0.3)'] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <span className="text-5xl font-display font-bold text-white">S</span>
        </motion.div>

        {/* Animated letters */}
        <div className="flex gap-1 mb-8">
          {letters.map((l, i) => (
            <motion.span
              key={i}
              className={`font-mono text-sm tracking-widest ${l === ' ' ? 'w-3' : 'text-violet-400'}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.06, duration: 0.4 }}
            >
              {l}
            </motion.span>
          ))}
        </div>

        {/* Progress bar */}
        <div className="w-64 h-1 bg-dark-600 rounded-full overflow-hidden">
          <motion.div
            className="h-full rounded-full"
            style={{ background: 'linear-gradient(90deg, #8b5cf6, #d946ef)' }}
            animate={{ width: `${Math.min(progress, 100)}%` }}
            transition={{ duration: 0.2 }}
          />
        </div>
        <motion.p
          className="mt-3 font-mono text-xs text-violet-400/60"
          animate={{ opacity: [0.4, 1, 0.4] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          {Math.min(Math.round(progress), 100)}%
        </motion.p>
      </motion.div>
    </motion.div>
  )
}
