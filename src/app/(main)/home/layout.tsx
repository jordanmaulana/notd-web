import SearchBar from "@/features/tags/components/search_bar";
import { ReactNode } from "react";

interface LayoutProps {
  profile: ReactNode;
  tagsection: ReactNode;
  children: ReactNode;
}

export default function Layout(props: LayoutProps) {
  return (
    <div className="flex">
      <aside className="flex h-screen flex-[35] items-start justify-end border-r border-slate-50/20 px-8 py-3">
        <div className="flex flex-col gap-3">
          <div className="text-xl font-bold">Notd.</div>
          <div>A Not Note Taking App</div>
          {props.profile}
        </div>
      </aside>
      <main className="flex-[40]">{props.children}</main>
      <aside className="flex h-screen flex-[45] flex-col gap-3 border-l border-slate-50/20 px-8 py-3">
        <SearchBar />
        {props.tagsection}
      </aside>
    </div>
  );
}
