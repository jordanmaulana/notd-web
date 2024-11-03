import { ReactNode } from "react";

interface LayoutProps {
  profile: ReactNode;
  tagsection: ReactNode;
  children: ReactNode;
}

export default function Layout(props: LayoutProps) {
  return (
    <div className="flex">
      <aside className="flex-[35] flex justify-end p-8 h-screen border-r items-start border-slate-50/20">
        {props.profile}
      </aside>
      <main className="flex-[40]">{props.children}</main>
      <aside className="flex-[45] border-l h-screen border-slate-50/20 p-8">
        {props.tagsection}
      </aside>
    </div>
  );
}
