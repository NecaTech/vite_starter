import { Button } from '@/components/ui/Button';

export const Header = () => {
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <span className="text-2xl font-bold text-blue-600">Mon Projet</span>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#" className="text-gray-700 hover:text-gray-900">
              Accueil
            </a>
            <a href="#" className="text-gray-700 hover:text-gray-900">
              Documentation
            </a>
            <a href="#" className="text-gray-700 hover:text-gray-900">
              Exemples
            </a>
          </nav>

          {/* Actions */}
          <div className="flex items-center space-x-4">
            <Button variant="outline">Documentation</Button>
            <Button>Démarrer</Button>
          </div>
        </div>
      </div>
    </header>
  );
};
