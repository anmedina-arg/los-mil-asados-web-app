'use client'
import { useState, useEffect } from "react";
import Form from "@/components/ui/form";
import Input from "@/components/ui/input";
import { newAsadoSchema } from "@/validationSchemas/newAsadoSchema";
import Button from "@/components/ui/buton";
import Select from "@/components/ui/select";
import { User } from '@/types/user';
import { useSession } from "next-auth/react";


const CrearEvento = () => {
	const { data: session } = useSession();
	const usuarioId = session?.user.id;

	console.log(session)

	const [usuarios, setUsuarios] = useState<User[]>([])

	const [asados, setAsados] = useState([]);
	const [page, setPage] = useState(1);
	const [totalPages, setTotalPages] = useState(1);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		const fetchData = async () => {
			setIsLoading(true);
			const response = await fetch(`/api/asados?page=${page}&limit=5`);
			const data = await response.json();

			setAsados(data.data);
			setTotalPages(data.totalPages);
			setIsLoading(false);

			if (page === 1 && data.defaultPage) {
				setPage(data.defaultPage);
			}
		};

		const fetchUsers = async () => {
			const responseUsers = await fetch('/api/users')
			const dataUsers: User[] = await responseUsers.json()

			setUsuarios(dataUsers)
		}

		fetchUsers();
		fetchData();
	}, [page]);

	const onSubmit = async (data: any) => {

		const dummyBody = {
			...data,
			asadoId: Number(data.asadoId),
			usuarioId: Number(usuarioId),
		};
		console.log("Dummy:", dummyBody);

		const response = await fetch("/api/eventos", {
			method: "POST",
			body: JSON.stringify(dummyBody),
			headers: { "Content-Type": "application/json" },
		});

		console.log(response);

		if (response.ok) {
			alert("Evento creado con éxito!");
		} else {
			alert("Error al crear evento");
		}
	};

	return (
		<>
			<Form onSubmit={onSubmit} validationSchema={newAsadoSchema}>
				<Input name="nombre" label="nombre" />
				<Input name="fecha" label="fecha" type="date" />
				<Input name="sede" label="sede" />

				{/* <InputNumber name="usuarioId" label="UsuarioId" control={control} /> */}

				<Select name="asadoId" label="Asado" options={asados.map(({ id, name }) => ({ value: id, label: name }))} />

				<Button variant="primary" label="Crear Evento" type="submit" />
			</Form>
		</>
	);
};

export default CrearEvento;