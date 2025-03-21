"use client";
import Image from 'next/image';
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import logo from '@/assets/los1000png_logo.webp';
import ButtonLogin from '@/components/ui/buttonLogin';
import LoginForm from '@/components/loginForm';
import Link from 'next/link';
import instagramIcon from '@/assets/instagram.png'
import { useEffect } from 'react';

const LoginPage = () => {
	const { data: session, status } = useSession();
	const router = useRouter();

	useEffect(() => {
		if (session) {
			const registerAndRedirect = async () => {
				await onSubmit(session.user);
				router.push("/dashboard");
			};
			registerAndRedirect();
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [session, router]);

	const onSubmit = async (e: any) => {
		const res = await fetch('/api/auth/register', {
			method: 'POST',
			body: JSON.stringify(e),
			headers: {
				'Content-Type': 'application/json'
			}
		})

		if (res.ok) {
			router.push('./dashboard')
		}
	}

	if (status === "loading") return (<div>Loading...</div>)

	return (
		<div className='flex flex-col h-dvh justify-center p-4 gap-4 items-center'>
			<Image src={logo} alt="logo" priority={true} />

			<LoginForm />

			<Link className="bg-white border-2 border-gray-500 border-solid p-2 rounded-md text-black text-center w-full first-letter:uppercase font-medium" href='/register'>
				Registrarse
			</Link>

			<ButtonLogin action='loguin' variant='primary' />

			<br />
			<br />

			<div className='flex flex-col justify-center text-[#E1306C] items-center'>
				<Link href="https://www.instagram.com/los1000asadostuc/" title="logotipo de instagram iconos" >
					<Image src={instagramIcon} alt='instagram logo' className='h-10 w-10 self-end' />
				</Link>
				<span>@los1000asadostuc</span>
			</div>

		</div>
	);
};

export default LoginPage;
