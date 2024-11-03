export interface Note {
  id: string;
  content: string;
  user: User;
}

export interface User {
  username: string;
  avatar: string;
}

const dummyUser: User = {
  username: "Jordan Maulana",
  avatar: "",
};

export const dummyNote: Note[] = [
  {
    id: "2",
    content: "Music + Lofi + Coffee + Rain",
    user: dummyUser,
  },
  {
    id: "3",
    content: "bbb",
    user: dummyUser,
  },
  {
    id: "1",
    content: "ccc",
    user: dummyUser,
  },
];
