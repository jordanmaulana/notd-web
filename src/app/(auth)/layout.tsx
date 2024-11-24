import WelcomePage from "@/features/welcome/views/welcome_page";
import Link from "next/link";
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
      <footer className="absolute bottom-0 flex w-full justify-center p-2 text-slate-100/20">
        <div>
          <span className="pointer-events-none">By </span>
          <Link
            href={"https://linktr.ee/jordanmaulana"}
            target="_blank"
            className="hover:text-blue-700"
          >
            Jordan Maulana
          </Link>
        </div>
      </footer>
    </main>
  );
}
