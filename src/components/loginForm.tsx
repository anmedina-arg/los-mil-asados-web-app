'use client'
import { loginSchema } from "@/validationSchemas/loginSchema"
import Form from "./ui/form"
import Input from "./ui/input"
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";

const LoginForm = () => {
	const router = useRouter()

	const onSubmit = async (e: any) => {
		console.log("login", e)
		const res = await signIn('credentials', {
			email: e.email,
			password: e.password,
			redirect: false
		})
		console.log("la respuesta", res)

		if (res?.error) {
			alert('ideai')
		} else {
			router.push('/dashboard')
		}
	}

	return (
		<Form onSubmit={onSubmit} validationSchema={loginSchema}>
			<Input label="email" name="email" />
			<Input label="password" name="password" />

			<button className="text-white rounded-3xl border-solid border-2 border-white p-4" type="submit">Login</button>
		</Form>
	)
};

export default LoginForm;