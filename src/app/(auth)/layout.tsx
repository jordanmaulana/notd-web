import WelcomePage from "@/features/welcome/views/welcome_page";
import { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout(props: LayoutProps) {
  return (
    <main>
      <div className="flex">
        <div className="flex-[1]">
          <WelcomePage />
        </div>
        <div className="flex-[1]">{props.children}</div>
      </div>
      <footer className="absolute bottom-0 p-2 text-slate-100/20">
        Tes footer
      </footer>
    </main>
  );
}
