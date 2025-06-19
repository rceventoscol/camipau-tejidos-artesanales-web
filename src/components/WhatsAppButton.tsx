
import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const WhatsAppButton = () => {
  const handleClick = () => {
    window.open("https://api.whatsapp.com/send?phone=573157192223", "_blank");
  };

  return (
    <Button
      onClick={handleClick}
      className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-2xl transition-all duration-300 hover:scale-110 animate-pulse"
      size="lg"
    >
      <MessageCircle className="h-6 w-6" />
    </Button>
  );
};

export default WhatsAppButton;
