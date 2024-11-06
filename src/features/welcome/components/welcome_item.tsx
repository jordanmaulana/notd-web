import React from "react";

interface WelcomeItemProps {
  title: string;
  description: string;
}

export default function WelcomeItem(props: WelcomeItemProps) {
  const { title, description } = props;
  return (
    <div>
      <div className="font-bold">{title}</div>
      <div className="text-slate-100/40">{description}</div>
    </div>
  );
}
