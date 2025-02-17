'use client'
import { useSession } from "next-auth/react";
import Link from "next/link";
import ButtonLogin from "./ui/buttonLogin";
import { FaUserShield } from "react-icons/fa";
import { FaCalendarAlt } from "react-icons/fa";
import { FaChartPie } from "react-icons/fa";
import { FaRegMoneyBillAlt } from "react-icons/fa";

const Navbar = () => {

	const { data: session } = useSession();
	// console.log("aqui navbar", session)

	return (
		<nav className="flex justify-between absolute bottom-0 items-center h-16 w-screen bg-inherit text-white border-solid border-red-500 border-2 ">
			<Link className='flex flex-col items-center justify-center' href="/admin">
				<FaUserShield />
				Admin
			</Link>
			<Link className='flex flex-col items-center justify-center' href="/dashboard">
				<FaChartPie />
				Dashboard
			</Link>
			<Link className='flex flex-col items-center justify-center' href="/eventos">
				<FaCalendarAlt />
				Eventos
			</Link>
			{/* <Link className='flex flex-col items-center justify-center' href="/gastos">
				<FaRegMoneyBillAlt />
				Gastos
			</Link>
			<Link className='flex flex-col items-center justify-center' href="/users">
				Usuarios
			</Link> */}

			{/* {session?.user &&
				<>
					<ButtonLogin action="logout" variant="primary" />
				</>
			} */}

		</nav>
	);
};

export default Navbar;