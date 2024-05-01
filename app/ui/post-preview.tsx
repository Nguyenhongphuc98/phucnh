import Link from "next/link";
import { PostPreviewModel } from "../lib/type.ts/post-preview";
import TagList from "./tag-list";

export default function PostPreview({
  preview,
}: {
  preview: PostPreviewModel;
}) {

  const shortDate = new Date(preview.createdAt).toLocaleDateString();


  return (
    <div className="hover:bg-slate-50/70 p-3 m-2 max-w-screen-sm rounded-xl">
      <h3 className="text-slate-900 font-semibold tracking-tight">
        {preview.title}
      </h3>
       <TagList tagModels={preview.tags} />
      <div className="mt-2 mb-4 text-slate-900 text-justify">
        <p>{preview.description}</p>
      </div>
      <div className="text-sm text-slate-400">{shortDate}</div>
     
      <Link className="text-sky-500 flex flex-row align-bottom" href={`/post/${preview.id}`}>
        <span>Read more</span>
        <svg
          className="overflow-visible text-sky-500 p-2.5"
          width="3"
          height="6"
          viewBox="0 0 3 6"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path d="M0 0L3 3L0 6"></path>
        </svg>
      </Link>
    </div>
  );
}
