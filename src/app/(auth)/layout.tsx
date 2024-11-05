import { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout(props: LayoutProps) {
  return (
    <main>
      {props.children}
      <footer className="absolute bottom-0 p-2 text-slate-100/20">
        Tes footer
      </footer>
    </main>
  );
}
