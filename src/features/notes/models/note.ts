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
    content:
      "Music + Lofi + Coffee + Rain #cozy #life https://www.youtube.com/watch?v=2fQyuhzfBYk",
    user: dummyUser,
  },
  {
    id: "3",
    content: "bbb https://www.youtube.com/watch?v=gX0aT5SJNOs",
    user: dummyUser,
  },
  {
    id: "1",
    content: "ccc",
    user: dummyUser,
  },
];
