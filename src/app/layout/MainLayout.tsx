import type { ReactNode } from "react";
import Footer from "../../shared/components/Footer";
import Navbar from "../../shared/components/Navbar";
import TopBar from "../../shared/components/TopBar";

type MainLayoutProps = {
  children: ReactNode;
};

export default function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="min-h-screen bg-brand-navy text-slate-800">
      <header className="sticky top-0 z-50 bg-brand-navy/95 shadow-sm shadow-blue-950/20 backdrop-blur">
        <TopBar />
        <Navbar />
      </header>
      {children}
      <Footer />
    </div>
  );
}
