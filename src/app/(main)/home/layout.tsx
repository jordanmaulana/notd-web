import Loading from "@/components/ui/loading";
import SearchBar from "@/features/tags/components/search_bar";
import { ReactNode, Suspense } from "react";

interface LayoutProps {
  profile: ReactNode;
  tagsection: ReactNode;
  children: ReactNode;
}

export default function Layout(props: LayoutProps) {
  return (
    <div className="flex">
      <aside className="sticky top-0 flex h-screen flex-[35] items-start justify-end px-8 py-3">
        <div className="flex flex-col gap-3">
          <div className="text-xl font-bold">Notd.</div>
          <div>A Not Note Taking App</div>
          <Suspense fallback={<Loading />}>{props.profile}</Suspense>
        </div>
      </aside>
      <main className="flex-[40]">
        <Suspense fallback={<Loading />}>{props.children}</Suspense>
      </main>
      <aside className="sticky top-0 flex h-screen flex-[45] flex-col gap-3 px-8 py-3">
        <Suspense>
          <SearchBar />
        </Suspense>
        <Suspense fallback={<Loading />}>{props.tagsection}</Suspense>
      </aside>
    </div>
  );
}
