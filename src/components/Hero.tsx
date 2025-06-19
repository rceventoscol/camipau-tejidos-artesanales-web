
import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const handleWhatsAppClick = () => {
    window.open("https://api.whatsapp.com/send?phone=573157192223", "_blank");
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-beige-50 to-beige-100 relative overflow-hidden">
      {/* Decorative textile texture overlay */}
      <div className="absolute inset-0 opacity-5">
        <div className="w-full h-full bg-repeat" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23d4c0a8' fill-opacity='0.4'%3E%3Ccircle cx='7' cy='7' r='3'/%3E%3Ccircle cx='53' cy='53' r='3'/%3E%3Cpath d='M20 20h20v20H20z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>
      
      <div className="container mx-auto px-6 py-16 md:py-24 relative z-10">
        <div className="flex flex-col items-center text-center space-y-8 animate-fade-in">
          {/* Logo */}
          <div className="mb-8 animate-scale-in">
            <img 
              src="/lovable-uploads/7f9a26bb-f6a9-402a-ae1a-5c0bc84725af.png" 
              alt="CAMIPAU Logo" 
              className="h-32 md:h-40 w-auto mx-auto drop-shadow-lg"
            />
          </div>
          
          {/* Main heading */}
          <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold text-olive-800 leading-tight max-w-4xl">
            Tejido a mano, <br />
            <span className="text-terracotta-600 italic">con alma y memoria.</span>
          </h1>
          
          {/* Subtitle */}
          <p className="font-sans text-lg md:text-xl text-olive-700 max-w-3xl leading-relaxed">
            Desde 2017, CAMIPAU teje arte con historia. Cada pieza es única, hecha a mano, 
            y creada con la tradición que ha pasado de generación en generación.
          </p>
          
          {/* CTA Button */}
          <Button 
            onClick={handleWhatsAppClick}
            className="bg-terracotta-600 hover:bg-terracotta-700 text-white font-medium text-lg px-8 py-6 rounded-full shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl group"
          >
            <MessageCircle className="mr-3 h-5 w-5 group-hover:animate-pulse" />
            Encargar por WhatsApp
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
