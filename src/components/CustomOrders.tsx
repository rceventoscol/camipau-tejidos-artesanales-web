
import { Button } from "@/components/ui/button";
import { Scissors } from "lucide-react";

const CustomOrders = () => {
  const handleWhatsAppClick = () => {
    window.open("https://api.whatsapp.com/send?phone=573157192223", "_blank");
  };

  return (
    <section className="py-20 bg-gradient-to-br from-terracotta-50 to-beige-50">
      <div className="container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto space-y-8 animate-fade-in">
          <div className="space-y-4">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-olive-800">
              Encargos personalizados
            </h2>
            <div className="w-20 h-1 bg-terracotta-500 mx-auto"></div>
          </div>
          
          <p className="font-sans text-xl text-olive-700 leading-relaxed">
            ¿Tienes una idea especial en mente?<br />
            Podemos crear una pieza solo para ti, completamente personalizada.
          </p>
          
          <Button 
            onClick={handleWhatsAppClick}
            className="bg-olive-600 hover:bg-olive-700 text-white font-medium text-lg px-10 py-6 rounded-full shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl group"
          >
            <Scissors className="mr-3 h-5 w-5 group-hover:animate-pulse" />
            Encargar diseño personalizado
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CustomOrders;
