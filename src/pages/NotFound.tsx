import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-float [animation-delay:1s]" />
      </div>
      
      <div className="text-center relative z-10">
        <h1 className="mb-4 text-8xl font-bold bg-gradient-accent bg-clip-text text-transparent animate-glow-pulse">404</h1>
        <p className="mb-4 text-xl text-foreground">Oops! Page not found</p>
        <a href="/" className="glass-card px-6 py-3 rounded-lg inline-block text-secondary hover-glow-secondary transition-all hover:-translate-y-1">
          Return to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
