'use client';
import { useEffect, useState } from 'react';
import { useSession } from 'next-auth/react';
import Image from 'next/image';
import { User } from '@/types/user';

const UsersPage = () => {
	const { data: session } = useSession();
	const [usuario, setUsuario] = useState<User | null>(null);
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
