import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Services from "./pages/Services";
import Commodities from "./pages/Commodities";

import HowItWorks from "./pages/HowItWorks";
import Suppliers from "./pages/Suppliers";
import Buyers from "./pages/Buyers";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Documentation from "./pages/Documentation";
import News from "./pages/News";
import Support from "./pages/Support";
import Legal from "./pages/Legal";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/commodities" element={<Commodities />} />
          <Route path="/how-it-works" element={<HowItWorks />} />
          <Route path="/suppliers" element={<Suppliers />} />
          <Route path="/buyers" element={<Buyers />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/documentation" element={<Documentation />} />
          <Route path="/news" element={<News />} />
          <Route path="/support" element={<Support />} />
          <Route path="/legal" element={<Legal />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
