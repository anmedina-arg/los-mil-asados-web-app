import { NextResponse } from 'next/server';
import { getToken } from 'next-auth/jwt';
import type { NextRequest } from 'next/server';

export async function middleware(req: NextRequest) {
  const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });
  const { pathname } = req.nextUrl;

  // Permitir acceso a la página de login o a rutas de API sin autenticación.
  if (pathname === '/' || pathname.startsWith('/api/auth')) {
    return NextResponse.next();
  }

  // Si no hay token y está intentando acceder a una ruta protegida, redirigir a login.
  if (!token) {
    const loginUrl = new URL('/', req.url);
    return NextResponse.redirect(loginUrl);
  }

  // Permitir el acceso a rutas protegidas si el token está presente.
  return NextResponse.next();
}

// Especifica las rutas que deben ser protegidas.
export const config = {
  matcher: [
    '/dashboard', // Ajusta las rutas según tu estructura.
    '/admin',
    '/eventos',
    '/gastos',
  ],
};
