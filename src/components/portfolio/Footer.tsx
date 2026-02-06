import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="py-8 border-t border-border/50">
      <div className="section-container px-6 md:px-8 lg:px-16 xl:px-24">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Shivam Jaiswal. Built with passion.
          </p>
          <p className="text-sm text-muted-foreground">
            Designed & Developed for Impact
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
