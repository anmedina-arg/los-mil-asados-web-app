"use client";
import Image from 'next/image';
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import logo from '../../assets/los1000png_logo.webp';
import ButtonLogin from '@/components/ui/buttonLogin';
import RegisterForm from '@/components/registerForm';

const RegisterPage = () => {
	const { data: session, status } = useSession();
	const router = useRouter();

	const onSubmit = async (e: any) => {
		const res = await fetch('/api/auth/register', {
			method: 'POST',
			body: JSON.stringify(e),
			headers: {
				'Content-Type': 'application/json'
			}
		})

		if (res.ok) {
			router.push('/')
		}
	}

	if (status === "loading") return (<div>Loading...</div>)

	if (session) {
		onSubmit(session.user)
		router.push("/dashboard");
		return null;
	}


	return (
		<div className='flex flex-col bg-black justify-center p-4 gap-4 items-center min-h-screen'>
			<Image src={logo} alt="logo" priority={true} />
			<RegisterForm />
			<span className='m-2 text-white first-letter:uppercase'>Que paja... vamos con Google noma&apos;</span>
			<ButtonLogin action='loguin' variant='primary' />
		</div>
	);
};

export default RegisterPage;
