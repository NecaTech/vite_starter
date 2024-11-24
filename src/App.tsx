import { MainLayout } from '@/layouts/MainLayout';
import { Button } from '@/components/ui/Button';
import { Tutorial } from '@/components/features/Tutorial';

function App() {
  return (
    <MainLayout>
      <div className="space-y-12">
        <section className="text-center max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Starter Kit React
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Un kit de démarrage moderne avec Vite, React, TypeScript et Tailwind CSS.
            Tout ce dont vous avez besoin pour démarrer rapidement votre projet.
          </p>
          <div className="flex justify-center space-x-4">
            <Button size="lg">Commencer</Button>
            <Button variant="outline" size="lg">
              Documentation
            </Button>
          </div>
        </section>

        <section className="bg-gray-50 py-12">
          <Tutorial />
        </section>

        <section className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Fonctionnalités Principales
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'TypeScript',
                description: 'Développez avec confiance grâce au typage statique et aux fonctionnalités modernes de TypeScript.'
              },
              {
                title: 'Tailwind CSS',
                description: 'Créez des interfaces élégantes rapidement avec les utilitaires CSS de Tailwind.'
              },
              {
                title: 'Vite',
                description: 'Profitez d\'un serveur de développement ultra-rapide et d\'une construction optimisée.'
              }
            ].map((feature) => (
              <div
                key={feature.title}
                className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </MainLayout>
  );
}

export default App;
