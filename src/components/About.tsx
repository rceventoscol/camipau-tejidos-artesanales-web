
const About = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-olive-800">
                Sobre CAMIPAU
              </h2>
              <div className="w-20 h-1 bg-terracotta-500"></div>
            </div>
            
            <div className="space-y-6 font-sans text-lg text-olive-700 leading-relaxed">
              <p>
                CAMIPAU nace en marzo del 2017, pero su origen se remonta al colegio, donde 
                Adriana descubrió su pasión por las manualidades. Inspirada por su abuela, 
                madre y tía, todas tejedoras, Adriana transformó ese gusto heredado en una 
                marca que honra lo hecho a mano y lo transforma en diseño contemporáneo.
              </p>
              
              <p>
                Aquí cada pieza es irrepetible. Tejemos con materiales nobles como trapillo, 
                cabulla, hilazas, hilos de algodón, cordones de seda, herrajes, asas y cadenas. 
                Cada diseño es una declaración de amor al detalle y a la tradición.
              </p>
            </div>
          </div>
          
          {/* Image */}
          <div className="relative animate-scale-in">
            <div className="absolute inset-0 bg-gradient-to-tr from-terracotta-200 to-olive-200 rounded-3xl transform rotate-3"></div>
            <img 
              src="/lovable-uploads/58919b55-f686-47ed-8538-86fc4d1f7e9c.png"
              alt="Productos artesanales CAMIPAU"
              className="relative z-10 w-full h-[400px] object-cover rounded-3xl shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
