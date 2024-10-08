'use client';

import useScrollProgress from "@/hooks/useScrollProgress";
import { motion } from 'framer-motion';

const variants = {
    hidden: { opacity: 0 },
    enter: { opacity: 1 },
};

const Template = ({ children }) => {
    const completion = useScrollProgress();
    return (
        <>
            <motion.main variants={variants} initial='hidden' animate='enter'
                transition={{ type: 'linear', delay: 0.21, duration: 0.3 }}>
                {children}
            </motion.main>
            {/*completion bar*/}
            <span style={{ tranform: 'translateY($(completion-100)%)' }}
                className="fixed z-50 bg-primary w-1 top-0 right-0 bttom-0 transition-all duration-700">
            </span>
            <div className=""></div>
        </>
    );
};

export default Template;