export type User = {
  id: number;
  created_at?: string;
  token?: string;
  password?: string;
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  username: string;
  image?: string;
};
