export interface Note {
  id: string;
  content: string;
  isPrivate: boolean;
  userId: string;
  user: User;
}

export interface User {
  id: string;
  name: string;
}
