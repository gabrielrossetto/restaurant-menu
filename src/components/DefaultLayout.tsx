import { ReactNode } from "react";
import NavBar from "./NavBar";
import Header from "./Header";

interface MobileLayoutProps {
  children: ReactNode;
}

function MobileLayout({ children }: MobileLayoutProps) {
  return (
    <div className="min-h-screen bg-background">
      <NavBar />
      <Header />
      {children}
    </div>
  );
}

export default MobileLayout;
