import { TagModel } from "./tag";


export interface PostPreviewModel {
    id: string,
    title: string,
    description: string,
    tags: TagModel[],
    createdAt: number,
}