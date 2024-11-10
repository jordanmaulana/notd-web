export interface Note {
  id: string;
  content: string;
  isPrivate: boolean;
  user: User;
  createdAt: Date;
}

export interface User {
  id: string;
  name: string;
}
