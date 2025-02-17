"use client";
import Image from 'next/image';
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import logo from '../../assets/los1000png_logo.webp';
import ButtonLogin from '@/components/ui/buttonLogin';
import LoginForm from '@/components/loginForm';
import Link from 'next/link';
import instagramIcon from '@/assets/instagram.png'

const LoginPage = () => {
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
			router.push('./dashboard')
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
		<div className='flex flex-col min-h-screen items-center justify-center p-4 gap-4'>
			<Image src={logo} alt="logo" priority={true} />

			<LoginForm />

			<Link className="text-black bg-white rounded-md border-solid border-2 border-gray-500 p-2 w-full first-letter:uppercase font-medium text-center" href='/register'>
				Registrarse
			</Link>

			<ButtonLogin action='loguin' variant='primary' />

			<br />
			<br />

			<div className='flex flex-col text-[#E1306C] items-center justify-center'>
				<Link href="https://www.instagram.com/los1000asadostuc/" title="logotipo de instagram iconos" >
					<Image src={instagramIcon} alt='instagram logo' className='self-end  w-10 h-10' />
				</Link>
				<span>@los1000asadostuc</span>
			</div>

		</div>
	);
};

export default LoginPage;
