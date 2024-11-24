import { useState, useEffect, useRef, useCallback } from 'react';
import { TutorialStep } from './TutorialStep';
import { Button } from '@/components/ui/Button';
import { gsap } from 'gsap';
import { motion, AnimatePresence } from 'framer-motion';
import { useKey } from 'react-use';
import {
  ArrowLeftIcon,
  ArrowRightIcon,
  PlayIcon,
  PauseIcon,
} from '@heroicons/react/24/outline';

const tutorialSteps = [
  {
    title: 'Installation Rapide',
    description: `npm create vite@latest mon-projet -- --template react-ts
cd mon-projet
npm install`,
    codeExample: true,
    hint: 'Copiez cette commande pour créer un nouveau projet'
  },
  {
    title: 'Structure Optimisée',
    description: `Notre structure de projet est organisée pour la scalabilité :
    
/src
  /components
    /ui        → Composants réutilisables
    /features  → Fonctionnalités métier
    /common    → Composants partagés
  /layouts     → Mises en page
  /styles      → Styles globaux
  /utils       → Utilitaires`,
    codeExample: true,
    hint: 'Une structure claire pour une meilleure maintenabilité'
  },
  {
    title: 'Composants UI Prêts à l\'Emploi',
    description: `import { Button } from '@/components/ui/Button';

// Exemple d'utilisation
<Button variant="primary" size="lg">
  Mon Bouton
</Button>

// Variantes disponibles : primary, outline, ghost
// Tailles : sm, md, lg`,
    codeExample: true,
    hint: 'Des composants réutilisables et personnalisables'
  },
  {
    title: 'Styles avec Tailwind CSS',
    description: `// Exemple de composant stylisé
const Card = ({ title, content }) => (
  <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-600">{content}</p>
  </div>
);`,
    codeExample: true,
    hint: 'Utilisez Tailwind pour un style rapide et cohérent'
  },
  {
    title: 'Scripts Utilitaires',
    description: `// Générer un nouveau composant
npm run generate:component MonComposant

// Créer une nouvelle feature
npm run generate:feature MaFeature

// Lancer les tests
npm run test`,
    codeExample: true,
    hint: 'Des scripts pour automatiser les tâches courantes'
  }
];

export const Tutorial = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(false);
  const [copiedStates, setCopiedStates] = useState<boolean[]>(new Array(tutorialSteps.length).fill(false));
  const [isVisible, setIsVisible] = useState(false);
  const progressBarRef = useRef<HTMLDivElement>(null);
  const tutorialRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.2 }
    );

    if (tutorialRef.current) {
      observer.observe(tutorialRef.current);
    }

    return () => {
      if (tutorialRef.current) {
        observer.unobserve(tutorialRef.current);
      }
    };
  }, []);

  // Gestion des raccourcis clavier
  useKey('ArrowLeft', () => handlePrev());
  useKey('ArrowRight', () => handleNext());
  useKey(' ', (e) => {
    e.preventDefault();
    toggleAutoPlay();
  });

  useEffect(() => {
    if (isAutoPlaying) {
      const interval = setInterval(() => {
        setCurrentStep((prev) => (prev + 1) % tutorialSteps.length);
      }, 5000);

      return () => clearInterval(interval);
    }
  }, [isAutoPlaying]);

  useEffect(() => {
    if (progressBarRef.current) {
      gsap.fromTo(
        progressBarRef.current,
        { scaleX: 0 },
        {
          scaleX: 1,
          duration: 5,
          ease: 'none',
          repeat: isAutoPlaying ? -1 : 0,
        }
      );
    }
  }, [currentStep, isAutoPlaying]);

  const handleNext = useCallback(() => {
    if (currentStep < tutorialSteps.length - 1) {
      setCurrentStep(prev => prev + 1);
    }
  }, [currentStep]);

  const handlePrev = useCallback(() => {
    if (currentStep > 0) {
      setCurrentStep(prev => prev - 1);
    }
  }, [currentStep]);

  const toggleAutoPlay = useCallback(() => {
    setIsAutoPlaying(prev => !prev);
  }, []);

  const handleCopy = useCallback(async (text: string, index: number) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedStates(prev => {
        const newState = [...prev];
        newState[index] = true;
        setTimeout(() => {
          setCopiedStates(prev => {
            const newState = [...prev];
            newState[index] = false;
            return newState;
          });
        }, 2000);
        return newState;
      });
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  }, []);

  return (
    <div className="max-w-4xl mx-auto" ref={tutorialRef}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ 
          opacity: isVisible ? 1 : 0,
          y: isVisible ? 0 : 20
        }}
        transition={{ duration: 0.5 }}
        className="text-center mb-8"
      >
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Guide de Démarrage
        </h2>
        <p className="text-lg text-gray-600">
          Découvrez comment utiliser notre starter kit étape par étape
        </p>
        <div className="mt-4 text-sm text-gray-500">
          Utilisez les flèches ← → ou la barre d'espace pour naviguer
        </div>
      </motion.div>

      <div className="space-y-4 mb-8">
        <AnimatePresence mode="wait">
          {tutorialSteps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 20 }}
              animate={{ 
                opacity: currentStep === index ? 1 : 0.5,
                x: 0,
                scale: currentStep === index ? 1 : 0.98
              }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              <TutorialStep
                {...step}
                index={index}
                isActive={currentStep === index}
                onCopy={() => handleCopy(step.description, index)}
                isCopied={copiedStates[index]}
              />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      <motion.div 
        className="flex justify-between items-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <Button
          variant="outline"
          onClick={handlePrev}
          disabled={currentStep === 0}
          className="flex items-center space-x-2"
        >
          <ArrowLeftIcon className="w-4 h-4" />
          <span>Précédent</span>
        </Button>

        <div className="flex-1 mx-4">
          <div className="h-1 bg-gray-200 rounded-full overflow-hidden">
            <div
              ref={progressBarRef}
              className="h-full bg-blue-500 transform origin-left"
            />
          </div>
        </div>

        <div className="flex space-x-2">
          <Button
            variant="outline"
            onClick={toggleAutoPlay}
            className="flex items-center space-x-2"
          >
            {isAutoPlaying ? (
              <>
                <PauseIcon className="w-4 h-4" />
                <span>Pause</span>
              </>
            ) : (
              <>
                <PlayIcon className="w-4 h-4" />
                <span>Lecture</span>
              </>
            )}
          </Button>
          <Button
            onClick={handleNext}
            disabled={currentStep === tutorialSteps.length - 1}
            className="flex items-center space-x-2"
          >
            <span>Suivant</span>
            <ArrowRightIcon className="w-4 h-4" />
          </Button>
        </div>
      </motion.div>
    </div>
  );
};
