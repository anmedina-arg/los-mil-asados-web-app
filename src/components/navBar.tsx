'use client'
import { useSession } from "next-auth/react";
import Link from "next/link";
import Button from "./ui/button";

const Navbar = () => {

	const { data: session } = useSession();
	console.log(session)

	return (
		<nav className="flex justify-between items-center h-16 bg-inherit text-white relative w-full border-solid border-red-500 border-2 ">
			<Link href="/admin">
				Admin
			</Link>
			<Link href="/dashboard">
				Dashboard
			</Link>
			<Link href="/eventos">
				Eventos
			</Link>
			<Link href="/gastos">
				Gastos
			</Link>

			{session?.user &&
				<>
					<Button label="salir" variant="logout" />
				</>
			}

		</nav>
	);
};

export default Navbar;