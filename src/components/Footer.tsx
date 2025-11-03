const Footer = () => {
  return (
    <footer className="py-8 glass border-t border-primary/20">
      <div className="container mx-auto px-4 text-center">
        <p className="text-muted-foreground">
          © {new Date().getFullYear()} Mothieram L.N | Built with{" "}
          <span className="text-accent">AI</span> and{" "}
          <span className="text-secondary">Data Science</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
