import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState(null);
  const [loading, setLoading] = useState(false);
  const [ref, inView] = useInView({ triggerOnce: true });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      setStatus({ type: 'error', msg: 'Please fill all fields.' });
      return;
    }
    setLoading(true);
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      });

      const data = await res.json().catch(() => ({}));
      if (!res.ok || !data.success) {
        throw new Error(data.message || 'Something went wrong. Try again.');
      }

      setStatus({ type: 'success', msg: data.message || 'Message sent! I\'ll get back to you soon.' });
      setForm({ name: '', email: '', message: '' });
    } catch (err) {
      setStatus({ type: 'error', msg: err.message || 'Unable to send message right now.' });
    } finally {
      setLoading(false);
      setTimeout(() => setStatus(null), 4000);
    }
  };

  const inputStyle = {
    background: 'rgba(255,255,255,0.04)',
    border: '1px solid rgba(168,85,247,0.2)',
    color: '#e2e8f0',
    fontFamily: 'DM Sans',
    outline: 'none'
  };

  return (
    <section id="contact" className="py-24 relative" style={{ background: '#0a0a16' }}>
      <div className="absolute inset-0 opacity-5 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at 30% 70%, #ec4899, transparent 60%)' }} />

      <div className="relative z-10 max-w-5xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <span className="text-xs px-4 py-2 rounded-full mb-4 inline-block"
            style={{ background: 'rgba(168,85,247,0.1)', border: '1px solid rgba(168,85,247,0.3)', color: '#c084fc', fontFamily: 'JetBrains Mono' }}>
            // get in touch
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mt-4" style={{ fontFamily: 'Syne' }}>
            Let's{' '}
            <span style={{ background: 'linear-gradient(135deg, #a855f7, #ec4899)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
              Connect
            </span>
          </h2>
          <p className="text-slate-400 mt-4 max-w-xl mx-auto">Have a project in mind or just want to say hi? Drop me a message!</p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Left - Social links */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="lg:col-span-2 space-y-6"
          >
            <h3 className="text-xl font-bold text-white" style={{ fontFamily: 'Syne' }}>Reach Out</h3>

            {[
              { icon: '🐙', label: 'GitHub', href: 'https://github.com/24215a0525', handle: '@sonakshi' },
              { icon: '💼', label: 'LinkedIn', href: 'https://www.linkedin.com/in/tirunagari-sonakshi-238948330/', handle: 'sonakshi-dev' },
              { icon: '📧', label: 'Email', href: 'mailto:sonakshiramanujam2112@gmail.com', handle: 'sonakshiramaujam2112@gmail.com' },
            ].map(item => (
              <motion.a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noreferrer"
                whileHover={{ x: 8 }}
                className="flex items-center gap-4 p-4 rounded-xl group transition-all"
                style={{ background: 'rgba(19,19,31,0.8)', border: '1px solid rgba(168,85,247,0.15)' }}
              >
                <span className="text-2xl">{item.icon}</span>
                <div>
                  <div className="text-white font-semibold text-sm group-hover:text-purple-400 transition-colors" style={{ fontFamily: 'DM Sans' }}>
                    {item.label}
                  </div>
                  <div className="text-slate-500 text-xs" style={{ fontFamily: 'JetBrains Mono' }}>{item.handle}</div>
                </div>
                <span className="ml-auto text-slate-600 group-hover:text-purple-400 transition-colors">→</span>
              </motion.a>
            ))}

            {/* Response time */}
            <div className="p-4 rounded-xl" style={{ background: 'rgba(168,85,247,0.08)', border: '1px solid rgba(168,85,247,0.2)' }}>
              <div className="flex items-center gap-2 mb-1">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <span className="text-green-400 text-xs font-semibold" style={{ fontFamily: 'JetBrains Mono' }}>Available for work</span>
              </div>
              <p className="text-slate-400 text-xs">Usually responds within 24 hours</p>
            </div>
          </motion.div>

          {/* Right - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3 }}
            className="lg:col-span-3 rounded-2xl p-8"
            style={{ background: '#13131f', border: '1px solid rgba(168,85,247,0.2)' }}
          >
            <form className="space-y-5" onSubmit={handleSubmit}>
              <div>
                <label className="block text-sm text-slate-400 mb-2" style={{ fontFamily: 'DM Sans' }}>Your Name</label>
                <input
                  type="text"
                  required
                  value={form.name}
                  onChange={e => setForm({...form, name: e.target.value})}
                  placeholder="John Doe"
                  className="w-full px-4 py-3 rounded-xl text-sm transition-all duration-200"
                  style={{
                    ...inputStyle,
                    borderColor: 'rgba(168,85,247,0.2)'
                  }}
                  onFocus={e => e.target.style.borderColor = 'rgba(168,85,247,0.6)'}
                  onBlur={e => e.target.style.borderColor = 'rgba(168,85,247,0.2)'}
                />
              </div>

              <div>
                <label className="block text-sm text-slate-400 mb-2" style={{ fontFamily: 'DM Sans' }}>Email Address</label>
                <input
                  type="email"
                  required
                  value={form.email}
                  onChange={e => setForm({...form, email: e.target.value})}
                  placeholder="john@example.com"
                  className="w-full px-4 py-3 rounded-xl text-sm transition-all duration-200"
                  style={inputStyle}
                  onFocus={e => e.target.style.borderColor = 'rgba(168,85,247,0.6)'}
                  onBlur={e => e.target.style.borderColor = 'rgba(168,85,247,0.2)'}
                />
              </div>

              <div>
                <label className="block text-sm text-slate-400 mb-2" style={{ fontFamily: 'DM Sans' }}>Message</label>
                <textarea
                  required
                  value={form.message}
                  onChange={e => setForm({...form, message: e.target.value})}
                  placeholder="Tell me about your project..."
                  rows={5}
                  className="w-full px-4 py-3 rounded-xl text-sm resize-none transition-all duration-200"
                  style={inputStyle}
                  onFocus={e => e.target.style.borderColor = 'rgba(168,85,247,0.6)'}
                  onBlur={e => e.target.style.borderColor = 'rgba(168,85,247,0.2)'}
                />
              </div>

              {status && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-3 rounded-xl text-sm"
                  style={{
                    background: status.type === 'success' ? 'rgba(34,197,94,0.1)' : 'rgba(239,68,68,0.1)',
                    border: `1px solid ${status.type === 'success' ? 'rgba(34,197,94,0.3)' : 'rgba(239,68,68,0.3)'}`,
                    color: status.type === 'success' ? '#86efac' : '#fca5a5',
                    fontFamily: 'DM Sans'
                  }}
                >
                  {status.msg}
                </motion.div>
              )}

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                disabled={loading}
                className="w-full py-4 rounded-xl text-white font-semibold text-sm glow-btn disabled:opacity-50"
                style={{ fontFamily: 'DM Sans' }}
              >
                {loading ? '⏳ Sending...' : '✉️ Send Message'}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
