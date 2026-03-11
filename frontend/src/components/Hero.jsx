import { motion } from 'framer-motion'
import { TypeAnimation } from 'react-type-animation'
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react'

const techIcons = [
  { icon: '⚛️', label: 'React', x: -220, y: -80, delay: 0 },
  { icon: '🟩', label: 'Node.js', x: 200, y: -60, delay: 0.3 },
  { icon: '🍃', label: 'MongoDB', x: -180, y: 120, delay: 0.6 },
  { icon: '🟨', label: 'JavaScript', x: 170, y: 110, delay: 0.9 },
  { icon: '☕', label: 'Java', x: 0, y: -170, delay: 1.2 },
  { icon: '🎨', label: 'CSS', x: -100, y: 200, delay: 1.5 },
]

// SVG Female Developer Avatar
function DeveloperAvatar() {
  return (
    <svg viewBox="0 0 320 380" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      {/* Glow effect */}
      <defs>
        <radialGradient id="glowGrad" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.3"/>
          <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0"/>
        </radialGradient>
        <linearGradient id="skinGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#f4a261"/>
          <stop offset="100%" stopColor="#e07b39"/>
        </linearGradient>
        <linearGradient id="hairGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#1a0533"/>
          <stop offset="100%" stopColor="#3b1e6e"/>
        </linearGradient>
        <linearGradient id="shirtGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#7c3aed"/>
          <stop offset="100%" stopColor="#a855f7"/>
        </linearGradient>
        <linearGradient id="laptopGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#1e1b2e"/>
          <stop offset="100%" stopColor="#2d2450"/>
        </linearGradient>
        <filter id="soft">
          <feGaussianBlur in="SourceAlpha" stdDeviation="3"/>
          <feOffset dy="4"/>
          <feComposite in2="SourceGraphic"/>
        </filter>
      </defs>

      {/* Glow circle behind */}
      <ellipse cx="160" cy="200" rx="130" ry="140" fill="url(#glowGrad)"/>

      {/* Body / shirt */}
      <path d="M80 280 Q80 240 100 225 L120 215 Q160 230 200 215 L220 225 Q240 240 240 280 L240 360 L80 360 Z"
        fill="url(#shirtGrad)"/>

      {/* Shirt collar detail */}
      <path d="M130 220 L160 245 L190 220" stroke="#9f67fa" strokeWidth="2" fill="none"/>

      {/* Neck */}
      <rect x="147" y="190" width="26" height="30" rx="8" fill="url(#skinGrad)"/>

      {/* Head */}
      <ellipse cx="160" cy="155" rx="52" ry="58" fill="url(#skinGrad)"/>

      {/* Hair - long wavy */}
      <path d="M108 130 Q100 90 115 70 Q130 50 160 48 Q190 50 205 70 Q220 90 212 130"
        fill="url(#hairGrad)"/>
      <path d="M108 130 Q95 170 98 210 Q100 220 112 215 Q115 195 118 170 Z"
        fill="url(#hairGrad)"/>
      <path d="M212 130 Q225 170 222 210 Q220 220 208 215 Q205 195 202 170 Z"
        fill="url(#hairGrad)"/>
      {/* Hair top detail */}
      <path d="M115 100 Q130 85 160 82 Q190 85 205 100" stroke="#4c2a7a" strokeWidth="3" fill="none"/>

      {/* Eyes */}
      <ellipse cx="141" cy="152" rx="9" ry="10" fill="#1a0533"/>
      <ellipse cx="179" cy="152" rx="9" ry="10" fill="#1a0533"/>
      <ellipse cx="143" cy="150" rx="3" ry="3" fill="white"/>
      <ellipse cx="181" cy="150" rx="3" ry="3" fill="white"/>
      {/* Eye shine */}
      <circle cx="144" cy="149" r="1.5" fill="white"/>
      <circle cx="182" cy="149" r="1.5" fill="white"/>

      {/* Eyebrows */}
      <path d="M132 138 Q141 133 150 138" stroke="#1a0533" strokeWidth="2.5" strokeLinecap="round" fill="none"/>
      <path d="M170 138 Q179 133 188 138" stroke="#1a0533" strokeWidth="2.5" strokeLinecap="round" fill="none"/>

      {/* Nose */}
      <path d="M157 160 Q155 172 152 176 Q160 180 168 176 Q165 172 163 160"
        stroke="#d4834a" strokeWidth="1.5" fill="none" strokeLinecap="round"/>

      {/* Smile */}
      <path d="M148 188 Q160 198 172 188" stroke="#c0622a" strokeWidth="2.5" fill="none" strokeLinecap="round"/>

      {/* Ear rings */}
      <circle cx="108" cy="162" r="4" fill="#f59e0b"/>
      <circle cx="212" cy="162" r="4" fill="#f59e0b"/>

      {/* Arms */}
      <path d="M100 230 Q75 240 65 265 Q60 278 70 285 Q80 265 95 260 Z" fill="url(#skinGrad)"/>
      <path d="M220 230 Q245 240 255 265 Q260 278 250 285 Q240 265 225 260 Z" fill="url(#skinGrad)"/>

      {/* Laptop base */}
      <rect x="55" y="290" width="210" height="12" rx="4" fill="url(#laptopGrad)" stroke="#7c3aed" strokeWidth="1"/>

      {/* Laptop screen */}
      <rect x="75" y="230" width="170" height="105" rx="8" fill="url(#laptopGrad)" stroke="#7c3aed" strokeWidth="1.5"/>
      {/* Screen glow */}
      <rect x="83" y="237" width="154" height="90" rx="5" fill="#0d0a1a"/>

      {/* Code on screen */}
      <rect x="90" y="245" width="70" height="4" rx="2" fill="#8b5cf6" opacity="0.9"/>
      <rect x="90" y="254" width="50" height="3" rx="2" fill="#e879f9" opacity="0.7"/>
      <rect x="97" y="262" width="80" height="3" rx="2" fill="#34d399" opacity="0.8"/>
      <rect x="97" y="270" width="60" height="3" rx="2" fill="#60a5fa" opacity="0.7"/>
      <rect x="90" y="278" width="40" height="3" rx="2" fill="#8b5cf6" opacity="0.6"/>
      <rect x="90" y="286" width="90" height="3" rx="2" fill="#f59e0b" opacity="0.7"/>
      <rect x="97" y="294" width="55" height="3" rx="2" fill="#e879f9" opacity="0.6"/>
      {/* Cursor blink */}
      <rect x="160" y="254" width="2" height="10" rx="1" fill="#e879f9" opacity="0.9">
        <animate attributeName="opacity" values="0.9;0;0.9" dur="1.2s" repeatCount="indefinite"/>
      </rect>

      {/* Headphones */}
      <path d="M109 128 Q108 105 160 102 Q212 105 211 128" stroke="#7c3aed" strokeWidth="5" fill="none" strokeLinecap="round"/>
      <rect x="103" y="126" width="14" height="20" rx="6" fill="#6d28d9"/>
      <rect x="203" y="126" width="14" height="20" rx="6" fill="#6d28d9"/>
    </svg>
  )
}

export default function Hero() {
  return (
    <section id="hero" className="min-h-screen flex items-center pt-20 pb-12 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-12 items-center">

        {/* Left: Text content */}
        <motion.div
          className="order-2 lg:order-1"
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, ease: 'easeOut' }}
        >
          {/* Badge */}
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-violet-500/30 bg-violet-500/5 mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="font-mono text-xs text-violet-300">Available for work</span>
          </motion.div>

          <motion.h1
            className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight mb-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Hi, I'm{' '}
            <span className="gradient-text block">Sonakshi</span>
          </motion.h1>

          <motion.div
            className="font-display text-2xl sm:text-3xl text-gray-300 mb-6 h-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <TypeAnimation
              sequence={[
                'Full Stack Developer', 2000,
                'React Enthusiast', 1500,
                'Node.js Engineer', 1500,
                'Problem Solver', 1500,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="gradient-text"
            />
          </motion.div>

          <motion.p
            className="font-body text-gray-400 text-lg leading-relaxed mb-8 max-w-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            I craft beautiful, performant web applications with modern technologies.
            Passionate about clean code, intuitive UX, and building things that matter.
          </motion.p>

          <motion.div
            className="flex flex-wrap gap-4 mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
          >
            <a
              href="#projects"
              className="px-7 py-3.5 rounded-xl font-body font-medium text-white transition-all duration-300 hover:scale-105 hover:shadow-lg"
              style={{
                background: 'linear-gradient(135deg, #8b5cf6, #d946ef)',
                boxShadow: '0 0 25px rgba(139,92,246,0.35)'
              }}
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="px-7 py-3.5 rounded-xl font-body font-medium text-violet-300 border border-violet-500/40 hover:border-violet-400 hover:bg-violet-500/10 transition-all duration-300 hover:scale-105"
            >
              Contact Me
            </a>
          </motion.div>

          {/* Social links */}
          <motion.div
            className="flex gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
          >
            {[
              { icon: Github, href: 'https://github.com/sonakshi', label: 'GitHub' },
              { icon: Linkedin, href: 'https://linkedin.com/in/sonakshi', label: 'LinkedIn' },
              { icon: Mail, href: 'mailto:sonakshi@email.com', label: 'Email' },
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-xl border border-white/10 flex items-center justify-center text-gray-400 hover:text-violet-400 hover:border-violet-500/50 hover:bg-violet-500/10 transition-all duration-300"
                aria-label={label}
              >
                <Icon size={18} />
              </a>
            ))}
          </motion.div>
        </motion.div>

        {/* Right: Avatar with floating icons */}
        <motion.div
          className="order-1 lg:order-2 flex items-center justify-center relative"
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, ease: 'easeOut' }}
        >
          {/* Avatar container */}
          <div className="relative w-72 h-80 sm:w-96 sm:h-[420px]">
            {/* Glow ring */}
            <motion.div
              className="absolute inset-0 rounded-full"
              style={{
                background: 'radial-gradient(circle, rgba(139,92,246,0.15) 0%, transparent 70%)',
              }}
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 4, repeat: Infinity }}
            />
            {/* Avatar */}
            <motion.div
              className="relative z-10 w-full h-full"
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
            >
              <DeveloperAvatar />
            </motion.div>

            {/* Floating tech icons */}
            {techIcons.map((item, i) => (
              <motion.div
                key={item.label}
                className="absolute left-1/2 top-1/2 z-20"
                style={{ marginLeft: item.x, marginTop: item.y }}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1, y: [0, -10, 0] }}
                transition={{
                  opacity: { delay: item.delay + 0.5, duration: 0.4 },
                  scale: { delay: item.delay + 0.5, type: 'spring' },
                  y: { duration: 3 + i * 0.5, repeat: Infinity, delay: item.delay, ease: 'easeInOut' }
                }}
              >
                <div className="gradient-border rounded-xl px-3 py-2 flex items-center gap-2 bg-dark-800/80 backdrop-blur-sm shadow-lg hover:scale-110 transition-transform cursor-default select-none">
                  <span className="text-lg">{item.icon}</span>
                  <span className="font-mono text-xs text-violet-300 hidden sm:block">{item.label}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.a
        href="#skills"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-500 hover:text-violet-400 transition-colors"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <span className="font-mono text-xs">scroll down</span>
        <ArrowDown size={16} />
      </motion.a>
    </section>
  )
}
