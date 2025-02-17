"use client";
import { signIn, signOut } from "next-auth/react";

type ButtonLoginProps = {
	action: "loguin" | "logout"
	variant: "primary" | "secondary" | "disable";
}

const ButtonLogin = ({ action, variant }: ButtonLoginProps) => {

	const variantStyles: Record<ButtonLoginProps["variant"], string> = {
		primary: "text-black bg-white rounded-md border-solid border-2 border-gray-500 p-2  first-letter:uppercase font-medium",
		secondary: "text-gray-700 bg-white rounded-md border-solid border-2 border-gray-700 p-4 first-letter:uppercase",
		disable: "text-gray-400 bg-gray-200 rounded-md border-solid border-2 border-gray-400 p-4 cursor-not-allowed first-letter:uppercase",
	};
	const handleOnClick = async () => action === "loguin" ? await signIn("google", { callbackUrl: "/dashboard" }) : await signOut({ callbackUrl: "/" })

	const label = action === "loguin" ? "Ingresar con Google" : "Salir"
	return (
		<button onClick={handleOnClick} className={variantStyles[variant]}>{label}</button>
	)
};

export default ButtonLogin;