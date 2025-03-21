import { loginSchema } from "@/validationSchemas/loginSchema"
import Form from "./ui/form"
import Input from "./ui/input"
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
import Button from "./ui/buton";

const LoginForm = () => {
	const router = useRouter()

	const onSubmit = async (e: { email: string, password: string }) => {
		console.log("entra")
		const res = await signIn('credentials', {
			email: e.email,
			password: e.password,
			redirect: false
		})

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
			<p className="text-end text-white text-xs mt-2">Olvidé mi contraseña</p>
			<br />
			<Button variant="primary" label="login" type="submit" />
		</Form>
	)
};

export default LoginForm;