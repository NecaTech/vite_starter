import { ReactNode } from 'react';
import { gsap } from 'gsap';
import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { CheckIcon, ClipboardIcon } from './icons';

interface TutorialStepProps {
  title: string;
  description: string;
  icon?: ReactNode;
  isActive: boolean;
  index: number;
  codeExample?: boolean;
  hint?: string;
  onCopy?: () => void;
  isCopied?: boolean;
}

export const TutorialStep = ({
  title,
  description,
  icon,
  isActive,
  index,
  codeExample,
  hint,
  onCopy,
  isCopied
}: TutorialStepProps) => {
  const stepRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isActive && stepRef.current) {
      gsap.fromTo(
        stepRef.current,
        {
          opacity: 0,
          y: 20,
          scale: 0.95
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.5,
          ease: 'back.out(1.7)'
        }
      );
    }
  }, [isActive]);

  return (
    <motion.div
      ref={stepRef}
      className={`p-6 rounded-lg transition-all duration-300 ${
        isActive ? 'bg-white shadow-lg' : 'bg-gray-50'
      }`}
      style={{ opacity: isActive ? 1 : 0.5 }}
      whileHover={{ scale: isActive ? 1.02 : 1 }}
      transition={{ duration: 0.2 }}
    >
      <div className="flex items-start space-x-4">
        <div className="flex-shrink-0">
          <motion.div 
            className={`w-10 h-10 rounded-full flex items-center justify-center ${
              isActive ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-500'
            }`}
            animate={{ 
              scale: isActive ? [1, 1.1, 1] : 1,
              rotate: isActive ? [0, 10, 0] : 0
            }}
            transition={{ duration: 0.5 }}
          >
            {icon || index + 1}
          </motion.div>
        </div>
        <div className="flex-1">
          <div className="flex items-start justify-between">
            <h3 className={`text-lg font-semibold mb-2 ${
              isActive ? 'text-gray-900' : 'text-gray-500'
            }`}>
              {title}
            </h3>
            {codeExample && (
              <motion.button
                className={`p-2 rounded-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 ${
                  isActive ? 'opacity-100' : 'opacity-0'
                }`}
                onClick={onCopy}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                title="Copier le code"
              >
                {isCopied ? (
                  <CheckIcon className="w-5 h-5 text-green-500" />
                ) : (
                  <ClipboardIcon className="w-5 h-5 text-gray-500" />
                )}
              </motion.button>
            )}
          </div>
          {codeExample ? (
            <motion.div
              initial={false}
              animate={{ height: isActive ? 'auto' : '100px' }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <pre className={`p-4 rounded-md bg-gray-800 text-gray-100 overflow-x-auto relative group ${
                isActive ? 'opacity-100' : 'opacity-50'
              }`}>
                <code className="text-sm font-mono whitespace-pre">
                  {description}
                </code>
                {hint && isActive && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="absolute bottom-2 right-2 text-xs text-gray-400 bg-gray-700 px-2 py-1 rounded"
                  >
                    {hint}
                  </motion.div>
                )}
              </pre>
            </motion.div>
          ) : (
            <p className={`text-sm ${
              isActive ? 'text-gray-600' : 'text-gray-400'
            }`}>
              {description}
            </p>
          )}
        </div>
      </div>
    </motion.div>
  );
};
