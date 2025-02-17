"use client";
import Image from 'next/image';
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import logo from '../../assets/los1000png_logo.webp';
import ButtonLogin from '@/components/ui/buttonLogin';
import RegisterForm from '@/components/registerForm';
import { authOptions } from '../api/auth/[...nextauth]/route';

const RegisterPage = () => {
	const { data: session, status } = useSession();
	const router = useRouter();

	// console.log("session", session)

	const onSubmit = async (e: any) => {
		//console.log("data", e);
		const res = await fetch('/api/auth/register', {
			method: 'POST',
			body: JSON.stringify(e),
			headers: {
				'Content-Type': 'application/json'
			}
		})

		const resJSON = await res.json()
		// console.log(resJSON)
		if (res.ok) {
			router.push('./login')
		}
	}

	if (status === "loading") return (<div>Loading...</div>)

	if (session) {
		// console.log("aqui", session)
		onSubmit(session.user)
		router.push("/dashboard"); // Redirige a la página protegida tras iniciar sesión.
		return null;
	}


	return (
		<div className='bg-black flex flex-col min-h-screen items-center justify-center p-4 gap-4'>
			<Image src={logo} alt="logo" priority={true} />
			<RegisterForm />
			<span className='text-white first-letter:uppercase m-2'>Que paja... vamos con Google noma&apos;</span>
			<ButtonLogin action='loguin' variant='primary' />
		</div>
	);
};

export default RegisterPage;
