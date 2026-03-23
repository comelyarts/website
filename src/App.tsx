import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "@/components/Layout";
import Home from "@/pages/Home";
import { ROUTE_PATHS } from "@/lib/index";

/**
 * Initialize the React Query client for efficient data fetching and caching.
 */
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5, // 5 minutes
      refetchOnWindowFocus: false,
    },
  },
});

/**
 * Root App component managing global providers, routing, and layout.
 * Implements a single-page architecture with artistic design principles.
 */
export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner 
          position="top-center" 
          expand={false} 
          richColors 
          closeButton
        />
        <BrowserRouter>
          <Layout>
            <Routes>
              {/* Main Landing Page containing all sections */}
              <Route path={ROUTE_PATHS.HOME} element={<Home />} />
              
              {/* 
                Catch-all route for the single-page application.
                In a production landing page, we redirect unknown paths back to home 
                to ensure a seamless user experience within the artistic ecosystem.
              */}
              <Route path="*" element={<Home />} />
            </Routes>
          </Layout>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
}
