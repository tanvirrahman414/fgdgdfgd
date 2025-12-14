"use client";
import { useState } from "react";
import GlobalStyles from "../components/GlobalStyles";
import AnnouncementBar from "../components/AnnouncementBar";
import Navbar from "../components/Navbar";
import Lightbox from "../components/Lightbox";
import ProductDetailModal from "../components/ProductDetailModal";
import productsData from "../data/products";
import { useContentProtection } from "@/hooks/useContentProtection";
import { HeroSection } from "@/components/HomePage/HeroSection";
import { ServicesGrid } from "@/components/HomePage/ServicesGrid";
import { TrustSection } from "@/components/HomePage/TrustSection";
import { IndicatorsPage } from "@/components/IndicatorsPage/IndicatorsPage";
import { SourceCodesPage } from "@/components/SourceCodesPage/SourceCodesPage";
import { AIGeneratorPage } from "@/components/AIGeneratorPage/AIGeneratorPage";
import { VPSPage } from "@/components/VPSPage/VPSPage";
import { PythonBotsPage } from "@/components/PythonBotsPage/PythonBotsPage";
import { AIBotsPage } from "@/components/AIBotsPage/AIBotsPage";
import { Footer } from "@/components/Footer/Footer";

export default function TradingToolsWebsite() {
  const [activeSection, setActiveSection] = useState("home");
  const [lightboxImage, setLightboxImage] = useState(null);
  const [selectedProduct, setSelectedProduct] = useState(null);

  useContentProtection();

  const handlePurchase = (product) => {
    window.open(productsData.telegram.contact, "_blank");
  };

  const openProductDetail = (product) => {
    setSelectedProduct(product);
  };

  const HomeSection = () => (
    <div className="fade-in">
      <HeroSection onExploreProducts={() => setActiveSection("indicators")} />
      <ServicesGrid onNavigate={setActiveSection} />
      <TrustSection />
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <GlobalStyles />
      <AnnouncementBar />
      <Navbar onNavigate={setActiveSection} activeSection={activeSection} />

      <main>
        {activeSection === "home" && <HomeSection />}
        {activeSection === "indicators" && (
          <IndicatorsPage onPurchase={handlePurchase} />
        )}
        {activeSection === "sourceCodes" && (
          <SourceCodesPage
            onPurchase={handlePurchase}
            onOpenProductDetail={openProductDetail}
          />
        )}
        {activeSection === "aiGenerator" && (
          <AIGeneratorPage onPurchase={handlePurchase} />
        )}
        {activeSection === "vps" && <VPSPage onPurchase={handlePurchase} />}
        {activeSection === "pythonBots" && (
          <PythonBotsPage onPurchase={handlePurchase} />
        )}
        {activeSection === "aiBots" && (
          <AIBotsPage onPurchase={handlePurchase} />
        )}
      </main>

      <Footer />

      <Lightbox image={lightboxImage} onClose={() => setLightboxImage(null)} />
      <ProductDetailModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
        onPurchase={handlePurchase}
      />
    </div>
  );
}
