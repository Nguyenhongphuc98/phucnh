import { TagModel } from "../lib/type.ts/tag";

export default function Tag({ tagModels }: { tagModels: TagModel[] }) {
  return (
    <>
      {tagModels.map((model) => {
        return (
          <button
            key={model.id}
            className= {`${model.color} mt-1 mr-2 pr-1 pl-1 rounded-md text-white active:bg-blue-400 hover:bg-green-600`}
          >
            {model.name}
          </button>
        );
      })}
    </>
  );
}
