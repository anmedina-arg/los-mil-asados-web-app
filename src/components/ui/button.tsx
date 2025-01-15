"use client";
import { signIn, signOut } from "next-auth/react";

type ButtonProps = {
	label: string,
	variant: "loguin" | "logout"
}
const Button = ({ label, variant }: ButtonProps) => {
	const handleOnClick = async () => variant === "loguin" ? await signIn("google", { callbackUrl: "/admin" }) : await signOut({ callbackUrl: "/" })

	return (
		<button onClick={handleOnClick} className="text-white rounded-3xl border-solid border-2 border-white p-4">{label}</button>
	)
};

export default Button;