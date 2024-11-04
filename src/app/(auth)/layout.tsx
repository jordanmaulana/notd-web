import { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout(props: LayoutProps) {
  return (
    <main>
      {props.children}
      <footer className="absolute bottom-0 h-6 text-slate-100/20">
        Tes footer
      </footer>
    </main>
  );
}
