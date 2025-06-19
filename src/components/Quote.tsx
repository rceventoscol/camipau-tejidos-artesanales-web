
const Quote = () => {
  return (
    <section className="py-16 bg-olive-800">
      <div className="container mx-auto px-6 text-center">
        <blockquote className="max-w-4xl mx-auto animate-fade-in">
          <p className="font-serif text-2xl md:text-3xl font-light text-beige-100 italic leading-relaxed mb-6">
            "Entre hilos, tejemos historias. Entre nudos, conservamos memorias."
          </p>
          <footer className="text-beige-300 font-sans">
            — Adriana, fundadora de CAMIPAU
          </footer>
        </blockquote>
      </div>
    </section>
  );
};

export default Quote;
