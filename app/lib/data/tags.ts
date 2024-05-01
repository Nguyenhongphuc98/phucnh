import { TagModel } from "../type.ts/tag";

export const TechTags: TagModel[] = [
    {
        id: 1,
        name: 'Perfomance',
        color: 'bg-red-400'
    },
    {
        id: 2,
        name: 'Design',
        color: 'bg-orange-400'
    },
    {
        id: 3,
        name: 'Network',
        color: 'bg-yellow-500'
    },
    {
        id: 4,
        name: 'OS',
        color: 'bg-lime-600'
    },
    {
        id: 5,
        name: 'Database',
        color: 'bg-green-600'
    },
    {
        id: 6,
        name: 'React',
        color: 'bg-indigo-500'
    }
];

export const AllTags = [...TechTags];
