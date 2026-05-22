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
      <header className="sticky top-0 z-50 px-3 py-3">
        <TopBar />
        <Navbar />
      </header>
      {children}
      <Footer />
    </div>
  );
}
