import { caption } from "@/lib/captions";
import React from "react";
import WelcomeItem from "../components/welcome_item";

export default function WelcomePage() {
  return (
    <div className="flex h-screen w-full flex-col items-center justify-center gap-20">
      <div className="text-7xl font-bold">Notd.</div>
      <div className="flex max-w-xl flex-col gap-8">
        <WelcomeItem
          title={caption.welcome.title1}
          description={caption.welcome.description1}
        />
        <WelcomeItem
          title={caption.welcome.title2}
          description={caption.welcome.description2}
        />
        <WelcomeItem
          title={caption.welcome.title3}
          description={caption.welcome.description3}
        />
      </div>
    </div>
  );
}
