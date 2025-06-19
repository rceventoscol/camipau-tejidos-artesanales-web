
import { useState } from "react";

interface Product {
  id: number;
  image: string;
  title: string;
  category: string;
}

const products: Product[] = [
  { id: 1, image: "/lovable-uploads/58919b55-f686-47ed-8538-86fc4d1f7e9c.png", title: "Canasta artesanal", category: "hogar" },
  { id: 2, image: "/lovable-uploads/5c17f6dd-1562-4695-b0f9-c9ae2e357255.png", title: "Accesorios de madera", category: "moda" },
  { id: 3, image: "/lovable-uploads/d134fdd4-ad36-4bec-b041-5742bc3a0b97.png", title: "Decoración navideña", category: "hogar" },
  { id: 4, image: "/lovable-uploads/9818b2e7-7391-4866-ae66-a019ec35570a.png", title: "Empaques especiales", category: "moda" },
  { id: 5, image: "/lovable-uploads/a7abc8f8-30b7-4cef-af3e-884accaf099a.png", title: "Tapete verde", category: "hogar" },
  { id: 6, image: "/lovable-uploads/7aa4f0c7-6dd1-48ae-916d-6fff2b3d3008.png", title: "Centro de mesa", category: "hogar" },
  { id: 7, image: "/lovable-uploads/931050ec-6002-416e-a4ee-226263fc26f3.png", title: "Bases para tazas", category: "hogar" },
  { id: 8, image: "/lovable-uploads/d8fb4da0-5536-4f17-bd12-ee0544667048.png", title: "Portavasos artesanales", category: "hogar" },
  { id: 9, image: "/lovable-uploads/06ed09d3-2ecc-463e-922e-dac30f9c4980.png", title: "Accesorio decorativo tejido", category: "moda" },
  { id: 10, image: "/lovable-uploads/9c4757de-bf33-41a2-9e7d-3215988ed93a.png", title: "Conjunto tejido morado", category: "moda" },
  { id: 11, image: "/lovable-uploads/d6bf3460-bc75-422d-91b3-af0c2d92bb1e.png", title: "Vestido tejido morado", category: "moda" },
  { id: 12, image: "/lovable-uploads/7829083c-335a-46b6-a0c4-2b76ffbc33be.png", title: "Top tejido con mangas", category: "moda" }
];

const ProductGallery = () => {
  const [activeCategory, setActiveCategory] = useState<"hogar" | "moda">("hogar");

  const filteredProducts = products.filter(product => product.category === activeCategory);

  return (
    <section className="py-20 bg-beige-50">
      <div className="container mx-auto px-6">
        {/* Category Toggle */}
        <div className="text-center mb-16">
          <div className="inline-flex bg-white rounded-full p-2 shadow-lg">
            <button
              onClick={() => setActiveCategory("hogar")}
              className={`px-8 py-3 rounded-full font-medium transition-all duration-300 ${
                activeCategory === "hogar"
                  ? "bg-olive-600 text-white shadow-md"
                  : "text-olive-600 hover:text-olive-800"
              }`}
            >
              Colección Hogar
            </button>
            <button
              onClick={() => setActiveCategory("moda")}
              className={`px-8 py-3 rounded-full font-medium transition-all duration-300 ${
                activeCategory === "moda"
                  ? "bg-terracotta-600 text-white shadow-md"
                  : "text-terracotta-600 hover:text-terracotta-800"
              }`}
            >
              Moda y Accesorios
            </button>
          </div>
        </div>

        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-olive-800 mb-4">
            {activeCategory === "hogar" ? "Para espacios con alma" : "Vestir lo artesanal"}
          </h2>
          {activeCategory === "moda" && (
            <p className="font-sans text-lg text-olive-700 max-w-2xl mx-auto">
              Diseños únicos que realzan la belleza natural con texturas suaves, 
              colores cálidos y mucho carácter. Hechos para mujeres que valoran lo auténtico.
            </p>
          )}
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product, index) => (
            <div 
              key={product.id}
              className="group cursor-pointer animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden rounded-2xl shadow-lg bg-white">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="font-serif text-xl font-semibold">{product.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductGallery;
