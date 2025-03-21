export interface User {
  id: number;
  nombre: string;
  correo: string;
  password?: string;
  image?: string;
  Role: 'user' | 'admin';
}
