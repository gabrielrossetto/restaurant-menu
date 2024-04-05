import { ReactNode } from "react";
import NavBar from "../NavBar";
import Header from "../Header";

interface DesktopLayoutProps {
  children: ReactNode;
}

function DesktopLayout({ children }: DesktopLayoutProps) {
  return (
    <div className="min-h-screen bg-background">
      <NavBar />
      <Header />
      {children}
    </div>
  );
}

export default DesktopLayout;
