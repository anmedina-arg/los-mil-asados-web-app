import { registerSchema } from "@/validationSchemas/registerSchema"
import Form from "./ui/form"
import Input from "./ui/input"
import { useRouter } from "next/navigation";
import Button from "./ui/buton";

const RegisterForm = () => {
	const router = useRouter()

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
			router.push('/login')
		}
	}

	return (
		<Form onSubmit={onSubmit} validationSchema={registerSchema}>
			<Input label="userName" name="userName" />
			<Input label="email" name="email" />
			<Input label="password" name="password" />
			<br />
			<Button variant="primary" label="Submit" type="submit" />
		</Form>
	)
};

export default RegisterForm;