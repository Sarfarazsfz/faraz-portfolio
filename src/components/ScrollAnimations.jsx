import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

// Clean, professional easing
const easing = [0.6, 0.01, 0.05, 0.95];

// Simple fade-up reveal
export function ScrollReveal({
    children,
    delay = 0,
    className = ''
}) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-50px' });

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay, ease: easing }}
            className={className}
        >
            {children}
        </motion.div>
    );
}

// Container for staggered children
export function ScrollRevealContainer({
    children,
    staggerDelay = 0.1,
    className = ''
}) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-50px' });

    return (
        <motion.div
            ref={ref}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            variants={{
                hidden: { opacity: 0 },
                visible: {
                    opacity: 1,
                    transition: { staggerChildren: staggerDelay, delayChildren: 0.1 }
                }
            }}
            className={className}
        >
            {children}
        </motion.div>
    );
}

// Item for staggered animations
export function ScrollRevealItem({ children, className = '' }) {
    return (
        <motion.div
            variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: easing } }
            }}
            className={className}
        >
            {children}
        </motion.div>
    );
}

// Two column grid with staggered reveal
export function TwoCardReveal({ leftCard, rightCard, className = '' }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-50px' });

    return (
        <div ref={ref} className={`grid md:grid-cols-2 gap-8 ${className}`}>
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, ease: easing }}
            >
                {leftCard}
            </motion.div>
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.15, ease: easing }}
            >
                {rightCard}
            </motion.div>
        </div>
    );
}

// Clean section header
export function SectionHeader({ label, title, subtitle, className = '' }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-30px' });

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: easing }}
            className={`text-center mb-16 ${className}`}
        >
            <span className="text-cyan-400 font-semibold text-sm tracking-widest uppercase">
                {label}
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-3 mb-4 text-white">
                {title}
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-cyan-500 to-purple-600 mx-auto rounded-full mb-4" />
            {subtitle && (
                <p className="text-slate-400 max-w-xl mx-auto">{subtitle}</p>
            )}
        </motion.div>
    );
}

// Simple animated card with hover
export function AnimatedCard({ children, className = '' }) {
    return (
        <motion.div
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
            className={`bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl ${className}`}
        >
            {children}
        </motion.div>
    );
}
