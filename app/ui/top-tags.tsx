import TagList from "./tag-list";
import { TagModel } from "../lib/type.ts/tag";

export default function TopTags({ tagModels }: { tagModels: TagModel[] }) {
  return (
    <div className="w-full flex justify-center flex-wrap p-3">
      <TagList tagModels= {tagModels}/>
    </div>
  );
}
