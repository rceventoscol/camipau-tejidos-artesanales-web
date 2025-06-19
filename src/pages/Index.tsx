
import Hero from "@/components/Hero";
import About from "@/components/About";
import ProductGallery from "@/components/ProductGallery";
import CustomOrders from "@/components/CustomOrders";
import Quote from "@/components/Quote";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <About />
      <ProductGallery />
      <CustomOrders />
      <Quote />
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
