
import { Heart, MessageCircle } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-olive-900 text-beige-100 py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Logo and tagline */}
          <div className="text-center md:text-left">
            <img 
              src="/lovable-uploads/7f9a26bb-f6a9-402a-ae1a-5c0bc84725af.png" 
              alt="CAMIPAU Logo" 
              className="h-16 w-auto mx-auto md:mx-0 mb-3 opacity-90"
            />
            <p className="font-sans text-sm text-beige-300">
              Arte que se teje con amor
            </p>
          </div>
          
          {/* Contact info */}
          <div className="text-center">
            <h3 className="font-serif text-lg font-semibold mb-3">Contacto</h3>
            <a 
              href="https://api.whatsapp.com/send?phone=573157192223"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-beige-300 hover:text-white transition-colors duration-300"
            >
              <MessageCircle className="mr-2 h-4 w-4" />
              WhatsApp
            </a>
          </div>
          
          {/* Copyright */}
          <div className="text-center md:text-right">
            <p className="font-sans text-sm text-beige-300 flex items-center justify-center md:justify-end">
              © CAMIPAU 2025 • Hecho con 
              <Heart className="mx-1 h-4 w-4 text-terracotta-400" fill="currentColor" />
              en Colombia
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
