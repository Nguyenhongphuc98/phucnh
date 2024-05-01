import Image from "next/image";
import { AllTags } from "./lib/data/tags";
import { fakePostModels } from "./lib/data/posts";
import PostPreview from "./ui/post-preview";
import TopTags from "./ui/top-tags";

export default function Home() {
  return (
    <main
      className="max-w-3xl"
    >
      <TopTags tagModels={AllTags}/>
      <div className=" flex flex-col justify-center">
      {
        fakePostModels.map(postPreview => {
          return <PostPreview key={postPreview.id} preview={postPreview}/>
        })
      }
      </div>
    </main>
  );
}
