import { ReactNode } from "react";
import NavBar from "./NavBar";
import Header from "./Header";

interface DefaultLayoutProps {
  children: ReactNode;
}

function DefaultLayout({ children }: DefaultLayoutProps) {
  return (
    <div className="min-h-screen bg-background">
      <NavBar />
      <Header />
      {children}
    </div>
  );
}

export default DefaultLayout;
