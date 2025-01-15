"use client";
import Image from 'next/image';
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import logo from '../../assets/los1000png_logo.webp';
import Button from '@/components/ui/button';
import RegisterForm from '@/components/registerForm';
import { authOptions } from '../api/auth/[...nextauth]/route';
import LoginForm from '@/components/loginForm';
import Link from 'next/link';

const LoginPage = () => {
	const { data: session, status } = useSession();
	const router = useRouter();

	console.log("session", session)

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
		console.log(resJSON)
		if (res.ok) {
			router.push('./dashboard')
		}
	}

	if (status === "loading") return (<div>Loading...</div>)

	if (session) {
		console.log("aqui", session)
		onSubmit(session.user)
		router.push("/dashboard"); // Redirige a la página protegida tras iniciar sesión.
		return null;
	}


	return (
		<div className='bg-black flex flex-col min-h-screen items-center justify-center p-4 gap-4'>
			<Image src={logo} alt="logo" priority={true} />
			<LoginForm />
			<Link className="text-white rounded-3xl border-solid border-2 border-white p-4" href='/register'>
				Registrarse
			</Link>
			<Button label='ingresar con google' variant='loguin' />
		</div>
	);
};

export default LoginPage;
