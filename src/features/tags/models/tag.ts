export interface Tag {
  id: string;
  name: string;
  total: number;
}

export const dummyTags: Tag[] = [
  {
    id: "1",
    name: "lifestyle",
    total: 12,
  },
  {
    id: "2",
    name: "home",
    total: 10,
  },
  {
    id: "3",
    name: "lifestyle",
    total: 4,
  },
];
