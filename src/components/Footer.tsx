import { Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background-secondary border-t border-card-border py-8">
      <div className="container mx-auto px-6">
        <div className="text-center">
          <div className="flex items-center justify-center space-x-2 text-foreground-secondary">
            <span>© {currentYear} Alex Johnson. Made with</span>
            <Heart className="h-4 w-4 text-primary animate-pulse" />
            <span>and lots of ☕</span>
          </div>
          <p className="mt-2 text-sm text-muted-foreground">
            Built with React, TypeScript & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;