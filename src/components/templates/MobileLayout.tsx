import { ReactNode } from "react";
import NavBar from "../NavBar";
import Header from "../Header";

interface MobileLayoutProps {
  children: ReactNode;
}

function MobileLayout({ children }: MobileLayoutProps) {
  return (
    <div className="min-h-screen bg-red-600">
      <NavBar />
      <Header />
      <div className="container py-8 mx-auto">
        {children}
      </div>
    </div>
  );
}

export default MobileLayout;
