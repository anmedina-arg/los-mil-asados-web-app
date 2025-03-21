import Link from "next/link";

type ButtonLinkProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
	to: string;
	label: string;
	variant: "primary" | "secondary" | "disable";
};

const ButtonLink = ({ label, variant = 'primary', to }: ButtonLinkProps) => {
	const variantStyles: Record<ButtonLinkProps["variant"], string> = {
		primary: "text-black bg-white rounded-md border-solid border-2 border-gray-500 p-2 w-full first-letter:uppercase font-medium",
		secondary: "text-gray-700 bg-white rounded-md border-solid border-2 border-gray-700 p-4 first-letter:uppercase",
		disable: "text-gray-400 bg-gray-200 rounded-md border-solid border-2 border-gray-400 p-4 cursor-not-allowed first-letter:uppercase",
	};

	return (
		<Link href={to}>
			<button className={variantStyles[variant]}>{label}</button>
		</Link>
	);
};

export default ButtonLink;