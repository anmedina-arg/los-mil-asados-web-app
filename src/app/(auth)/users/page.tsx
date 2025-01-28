'use client';
import { useEffect, useState } from 'react';
import { useSession } from 'next-auth/react';
import Image from 'next/image';

interface Usuario {
	id: number;         // Identificador único
	nombre: string;     // Nombre del usuario
	correo: string;     // Correo único del usuario
	password?: string;  // Contraseña (opcional)
	image?: string;     // Imagen (opcional)
	Role: 'user' | 'admin';  // Rol del usuario (asumiendo que solo hay 'user' y 'admin')
	//eventos: Evento[];  // Relación con la entidad Evento (si aplica)
}

const UsersPage = () => {
	const { data: session } = useSession();
	const [usuario, setUsuario] = useState<Usuario | null>(null);
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		const fetchUser = async () => {
			try {
				const res = await fetch('/api/user'); // Ruta del endpoint
				if (!res.ok) {
					throw new Error(`Error: ${res.status}`);
				}
				const data = await res.json();
				setUsuario(data);
			} catch (err: unknown) {
				// Comprobar si err es una instancia de Error
				if (err instanceof Error) {
					setError(err.message); // Accedemos de manera segura a 'message'
				} else {
					setError('Ha ocurrido un error desconocido.');
				}
			}
		};

		if (session) {
			fetchUser();
		}
	}, [session]);

	console.log('Sesión:', session);
	console.log('Usuario:', usuario);

	if (!session) {
		return <div className="text-white">Por favor, inicia sesión para ver esta página.</div>;
	}

	if (error) {
		return <div className="text-red-500">Error: {error}</div>;
	}

	return (
		<div className="text-white">
			<h1>Información del Usuario</h1>
			{usuario ? (
				<>
					<pre>{JSON.stringify(usuario, null, 2)}</pre>
					<Image src={`${usuario.image}`} width={100} height={100} alt="imagen de usuario" />
				</>
			) : (
				<p>Cargando información del usuario...</p>
			)}
		</div>
	);
};

export default UsersPage;
