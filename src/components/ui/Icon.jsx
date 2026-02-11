import { motion } from 'framer-motion';
import { cn } from '../../utils/cn';

export default function Icon({
    icon: IconComponent,
    className,
    size = 24,
    animate = true,
    ...props
}) {
    const iconElement = <IconComponent size={size} strokeWidth={1.5} {...props} />;

    if (!animate) {
        return <div className={cn('text-accent', className)}>{iconElement}</div>;
    }

    return (
        <motion.div
            initial={{ scale: 0, rotate: -180 }}
            whileInView={{ scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{
                type: "spring",
                stiffness: 260,
                damping: 20
            }}
            whileHover={{ scale: 1.1, rotate: 5 }}
            className={cn('text-accent', className)}
        >
            {iconElement}
        </motion.div>
    );
}
