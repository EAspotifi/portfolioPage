import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { HiArrowDown } from 'react-icons/hi2';
import Button from '../ui/Button.jsx';
import { personal, social } from '../../data/portfolio.js';
import { useLang } from '../../context/LanguageContext.jsx';
import { translations } from '../../i18n/translations.js';

const iconMap = { FaGithub, FaLinkedin, FaEnvelope };
const fadeUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } };

export default function Hero() {
  const { lang } = useLang();
  const t = translations[lang].hero;

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden dark:bg-slate-900"
    >
      <video
        autoPlay={true}
        loop={true}
        muted={true}
        playsInline={true}
        className="absolute inset-0 w-full h-full object-cover opacity-30 dark:opacity-40 pointer-events-none"
      >
        <source src={`${import.meta.env.BASE_URL}travelicons.mp4`} type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-slate-50/90 dark:to-slate-900/90 pointer-events-none" />
      {/* Background grid */}
      <div
        className="absolute inset-0 opacity-40 dark:opacity-20"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgb(148 163 184 / 0.4) 1px, transparent 0)`,
          backgroundSize: '32px 32px',
        }}
      />
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-brand-400/20 dark:bg-brand-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-32 w-80 h-80 bg-brand-500/15 dark:bg-brand-700/10 rounded-full blur-3xl pointer-events-none" />

      <div className="container-max relative section-padding pt-28 md:pt-32">
        <motion.div
          className="max-w-3xl"
          initial="hidden"
          animate="visible"
          variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
        >
          {/* Availability badge */}
          <motion.div variants={fadeUp} className="mb-6">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full
              bg-brand-50 dark:bg-brand-900/30 border border-brand-200 dark:border-brand-800
              text-brand-600 dark:text-brand-400 text-sm font-medium">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              {t.availability}
            </span>
          </motion.div>

          <motion.p variants={fadeUp} className="text-slate-500 dark:text-slate-400 font-medium text-lg mb-2">
            {t.greeting}
          </motion.p>
          <motion.h1 variants={fadeUp} className="text-5xl md:text-7xl font-extrabold text-slate-900 dark:text-white leading-tight mb-2">
            Ernesto
            <span className="block text-gradient">Vílchez</span>
          </motion.h1>

          <motion.div variants={fadeUp} className="flex items-center gap-3 mb-6">
            <span className="font-mono text-lg md:text-2xl font-semibold text-slate-600 dark:text-slate-300">
              {t.role}
            </span>
          </motion.div>

          <motion.p variants={fadeUp} className="text-lg text-slate-500 dark:text-slate-400 max-w-xl leading-relaxed mb-10">
            {t.tagline}
          </motion.p>

          <motion.div variants={fadeUp} className="flex flex-wrap gap-3 mb-12">
            <Link to="projects" smooth duration={500} offset={-64}>
              <Button variant="primary" size="lg">{t.ctaProjects}</Button>
            </Link>
            <Link to="contact" smooth duration={500} offset={-64}>
              <Button variant="outline" size="lg">{t.ctaContact}</Button>
            </Link>
          </motion.div>

          <motion.div variants={fadeUp} className="flex items-center gap-4">
            <span className="text-sm text-slate-400 dark:text-slate-500">{t.socialLabel}</span>
            <div className="flex gap-2">
              {social.map(({ platform, url, icon }) => {
                const Icon = iconMap[icon];
                return Icon ? (
                  <a key={platform} href={url} target="_blank" rel="noopener noreferrer" aria-label={platform}
                    className="w-9 h-9 flex items-center justify-center rounded-xl
                      text-slate-500 dark:text-slate-400
                      hover:text-brand-600 dark:hover:text-brand-400
                      hover:bg-slate-100 dark:hover:bg-slate-800
                      transition-all duration-200">
                    <Icon className="w-4 h-4" />
                  </a>
                ) : null;
              })}
            </div>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
      >
        <span className="text-xs text-slate-400 dark:text-slate-600 tracking-widest uppercase">{t.scrollHint}</span>
        <motion.div animate={{ y: [0, 6, 0] }} transition={{ repeat: Infinity, duration: 1.6, ease: 'easeInOut' }}>
          <HiArrowDown className="w-4 h-4 text-slate-400 dark:text-slate-600" />
        </motion.div>
      </motion.div>
    </section>
  );
}
