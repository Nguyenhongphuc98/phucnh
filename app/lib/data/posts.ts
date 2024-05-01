import { PostPreviewModel } from "../type.ts/post-preview";
import { AllTags } from "./tags";

function fakePost() {
    const postPreviewModel: PostPreviewModel = {
        id: '1',
        title: "We're hiring a Design Engineer + Staff Engineer",
        description: "We’re hiring a Design Engineer and Staff Software Engineer to work on some ambitious new projects with us. Both roles are fully remote, with a salary of $275,000 USD.",
        createdAt: Date.now(),
        tags: [AllTags[Math.floor(Math.random() *AllTags.length)],AllTags[Math.floor(Math.random() *AllTags.length)]]
    };
    return postPreviewModel;
}


export const fakePostModels: PostPreviewModel[] = new Array(5).fill(fakePost()).map(fakePost);