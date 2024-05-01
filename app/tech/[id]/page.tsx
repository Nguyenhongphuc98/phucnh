"use client";

import { TechPosts } from "@/app/lib/data/techs";
import { usePathname } from "next/navigation";

export default function TechPost() {
  const path = usePathname();
  const dirs = path.split('/');

  const data = TechPosts[dirs[dirs.length - 1]];
  return <>{data.refs.map((r) => r)}</>;
}
