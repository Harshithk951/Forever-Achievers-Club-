import { motion } from 'framer-motion';
import { cn } from '../../utils/cn';

export default function SectionHeading({
    title,
    subtitle,
    centered = true,
    className
}) {
    const words = title.split(' ');

    const container = {
        hidden: { opacity: 0 },
        visible: (i = 1) => ({
            opacity: 1,
            transition: { staggerChildren: 0.04, delayChildren: 0.02 * i },
        }),
    };

    const child = {
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                type: "spring",
                damping: 12,
                stiffness: 100,
            },
        },
        hidden: {
            opacity: 0,
            y: 20,
        },
    };

    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className={cn(
                'mb-12 md:mb-16',
                centered && 'text-center',
                className
            )}
        >
            {subtitle && (
                <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-accent font-bold text-sm md:text-base uppercase tracking-widest mb-3"
                >
                    {subtitle}
                </motion.p>
            )}
            <motion.h2
                variants={container}
                className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black gradient-text leading-tight"
                style={{ letterSpacing: '-0.02em' }}
            >
                {words.map((word, index) => (
                    <motion.span
                        variants={child}
                        key={index}
                        className="inline-block mr-2 md:mr-3"
                    >
                        {word}
                    </motion.span>
                ))}
            </motion.h2>
        </motion.div>
    );
}
