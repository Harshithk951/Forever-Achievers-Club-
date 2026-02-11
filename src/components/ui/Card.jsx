import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { cn } from '../../utils/cn';
import { useRef } from 'react';

export default function Card({ children, className, delay = 0, hover3d = true }) {
    const ref = useRef(null);

    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseXSpring = useSpring(x);
    const mouseYSpring = useSpring(y);

    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["7.5deg", "-7.5deg"]);
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-7.5deg", "7.5deg"]);

    const handleMouseMove = (e) => {
        if (!hover3d || !ref.current) return;

        const rect = ref.current.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;
        const xPct = mouseX / width - 0.5;
        const yPct = mouseY / height - 0.5;
        x.set(xPct);
        y.set(yPct);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.3, delay }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={hover3d ? { rotateX, rotateY, transformStyle: "preserve-3d" } : {}}
            className={cn(
                'glass-card group cursor-default',
                'hover:border-accent/30 transition-all duration-300',
                'hover:shadow-xl hover:shadow-accent/10',
                className
            )}
        >
            <div style={hover3d ? { transform: "translateZ(50px)" } : {}}>
                {children}
            </div>
        </motion.div>
    );
}
