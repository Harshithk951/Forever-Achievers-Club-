import { motion } from 'framer-motion';
import { cn } from '../../utils/cn';

export default function Button({
    children,
    variant = 'primary',
    size = 'md',
    className,
    ...props
}) {
    const variants = {
        primary: 'bg-gradient-to-r from-accent-secondary via-accent to-accent-light text-dark font-bold hover:shadow-2xl hover:shadow-accent/40 relative overflow-hidden btn-glow',
        secondary: 'bg-dark-lighter border-2 border-accent text-accent hover:bg-accent hover:text-dark font-semibold',
        outline: 'border-2 border-accent/50 text-accent hover:bg-accent/10 hover:border-accent font-medium',
    };

    const sizes = {
        sm: 'px-5 py-2.5 text-sm',
        md: 'px-7 py-3.5 text-base',
        lg: 'px-10 py-4 text-lg',
    };

    return (
        <motion.button
            whileHover={{ scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
            className={cn(
                'rounded-lg font-medium transition-all duration-300 shadow-lg',
                'hover:shadow-accent/20 active:shadow-accent/30',
                'relative z-10',
                variants[variant],
                sizes[size],
                className
            )}
            {...props}
        >
            <span className="relative z-10">{children}</span>
        </motion.button>
    );
}
