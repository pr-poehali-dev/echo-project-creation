
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from '@/components/Layout'
import { Dashboard } from '@/pages/Dashboard'
import { Schedules } from '@/pages/Schedules'
import { Routes as RoutesPage } from '@/pages/Routes'
import { Stations } from '@/pages/Stations'
import { Dispatch } from '@/pages/Dispatch'
import { Help } from '@/pages/Help'
import { Settings } from '@/pages/Settings'
import { Reports } from '@/pages/Reports'
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/schedules" element={<Schedules />} />
            <Route path="/routes" element={<RoutesPage />} />
            <Route path="/stations" element={<Stations />} />
            <Route path="/dispatch" element={<Dispatch />} />
            <Route path="/help" element={<Help />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/reports" element={<Reports />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;