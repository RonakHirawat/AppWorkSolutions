
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useLanguage } from "@/contexts/LanguageContext";
import { Code, Smartphone, Monitor, Globe, Palette, Search, Users, Headphones, Shield, Zap, Database, Cloud } from "lucide-react";

export default function Services() {
  const { t } = useLanguage();
  
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);
  
  // Helper function to get the appropriate icon for each service
  const getIcon = (categoryName: string, index: number) => {
    const icons = {
      web: [<Monitor key={0} />, <Globe key={1} />, <Database key={2} />, <Cloud key={3} />],
      mobile: [<Smartphone key={0} />, <Code key={1} />, <Zap key={2} />, <Search key={3} />],
      design: [<Palette key={0} />, <Users key={1} />, <Monitor key={2} />, <Smartphone key={3} />],
      consulting: [<Shield key={0} />, <Zap key={1} />, <Code key={2} />, <Headphones key={3} />]
    };
    
    return icons[categoryName as keyof typeof icons]?.[index] || <Code />;
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-r from-sea-light to-white dark:from-sea-dark dark:to-background">
          <div className="container relative z-10 pt-20">
            <div className="text-center max-w-3xl mx-auto">
              <span className="text-sm text-primary font-medium uppercase tracking-wider">
                AppWorkSolutions
              </span>
              <h1 className="text-4xl md:text-5xl font-bold mt-2 mb-6">
                {t.services.title}
              </h1>
              <p className="text-muted-foreground">
                {t.services.subtitle}
              </p>
            </div>
          </div>
          
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-1/3 h-full opacity-10">
            <div className="absolute top-10 right-10 w-64 h-64 rounded-full bg-primary/50 blur-3xl" />
            <div className="absolute bottom-10 right-40 w-48 h-48 rounded-full bg-sea-light blur-3xl" />
          </div>
        </section>
        
        {/* Categories Sections */}
        {Object.keys(t.services.categories).map((category, categoryIndex) => {
          const categoryData = t.services.categories[category as keyof typeof t.services.categories];
          const isEven = categoryIndex % 2 === 0;
          
          return (
            <section key={category} className={`py-16 ${isEven ? 'bg-card' : ''}`}>
              <div className="container">
                <div className="text-center max-w-3xl mx-auto mb-12">
                  <h2 className="text-3xl font-bold mb-4">
                    {categoryData.title}
                  </h2>
                  <p className="text-muted-foreground">
                    {categoryData.description}
                  </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                  {categoryData.items.map((item, index) => (
                    <div 
                      key={index} 
                      className="glass-card p-6 rounded-xl flex flex-col items-center text-center animate-fade-in"
                      style={{ animationDelay: `${(index + 1) * 100}ms` }}
                    >
                      <div className="mb-4 p-3 rounded-full bg-primary/10 text-primary">
                        {getIcon(category, index)}
                      </div>
                      <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                      <p className="text-muted-foreground">{item.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          );
        })}
        
        {/* Portfolio Gallery Section */}
        <section className="py-16">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl font-bold mb-4">
                {t.portfolio.title}
              </h2>
              <p className="text-muted-foreground">
                {t.portfolio.subtitle}
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {Array.from({ length: 8 }).map((_, index) => {
                const images = [
                  "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=400&fit=crop",
                  "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=400&fit=crop",
                  "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=400&fit=crop",
                  "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=400&h=400&fit=crop",
                  "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=400&h=400&fit=crop",
                  "https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=400&fit=crop",
                  "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=400&h=400&fit=crop",
                  "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=400&h=400&fit=crop"
                ];
                
                return (
                  <div 
                    key={index} 
                    className="aspect-square rounded-lg overflow-hidden shadow-md transition-transform hover:scale-105"
                  >
                    <img 
                      src={images[index]}
                      alt={`Project ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
