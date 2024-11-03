import { ReactNode } from "react";

interface LayoutProps {
  profile: ReactNode;
  tagsection: ReactNode;
  children: ReactNode;
}

export default function Layout(props: LayoutProps) {
  return (
    <div className="flex">
      <aside className="flex h-screen flex-[35] items-start justify-end border-r border-slate-50/20 p-8">
        {props.profile}
      </aside>
      <main className="flex-[40]">{props.children}</main>
      <aside className="h-screen flex-[45] border-l border-slate-50/20 p-8">
        {props.tagsection}
      </aside>
    </div>
  );
}
