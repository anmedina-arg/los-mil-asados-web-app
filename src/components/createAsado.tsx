'use client';
import { useState, useEffect } from "react";
import Form from "./ui/form";
import Input from "./ui/input";
import { crearAsadoSchema } from "@/validationSchemas/crearAsadoSchema";
import Button from "./ui/buton";
import Select from "./ui/select";
import InputNumber from "./ui/inputNumber";
import { User } from '../types/user';

export const CrearEvento = () => {
	/*
id           Int           @id @default(autoincrement())
  nombre       String
  fecha        DateTime
  sede         String
  usuarioId    Int
  usuario      Usuario       @relation(fields: [usuarioId], references: [id])
  asadoId      Int?
  asado        Asado?        @relation(fields: [asadoId], references: [id])
  participantes Participante[]
  gastos       Gasto[]
	*/
	const usuarioId = '1'; // Temporalmente estático

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

			// 🔹 1️⃣ Establecer la página inicial basada en `defaultPage`
			if (page === 1 && data.defaultPage) {
				setPage(data.defaultPage);
			}
		};

		const fetchUsers = async () => {
			const responseUsers = await fetch('/api/users')
			const dataUsers: User[] = await responseUsers.json()
			console.log("dataUsers", dataUsers)

			setUsuarios(dataUsers)
		}

		fetchUsers();
		fetchData();
	}, [page]);

	// console.log("asados", asados);

	console.log('usuarios', usuarios)

	const handleSubmit = async (e: React.FormEvent) => {

		console.log("console.log de e", e)

		const dummyBody = {
			...e,
			usuarioId: parseInt(usuarioId),
		};

		const response = await fetch("/api/eventos", {
			method: "POST",
			body: JSON.stringify(dummyBody),
			headers: { "Content-Type": "application/json" },
		});

		console.log(response)

		if (response.ok) {
			alert("Evento creado con éxito!");
		} else {
			alert("Error al crear evento");
		}
	};

	return (
		<>
			<fieldset>
				<legend className="text-white">Crear evento</legend>
				<Form onSubmit={handleSubmit} validationSchema={crearAsadoSchema as any}>
					<Input name="nombre" label="Nombre del evento" />
					<Input name="fecha" label="Fecha" type="date" />
					<Input name="sede" label="Sede" />
					{/* <InputNumber name="usuarioId" label="UsuarioId" control={control} /> */}

					{/* <Select name="asadoId" label="Asado" options={asados.map(({ id, name }) => ({ value: id, label: name }))} /> */}

					{
						//no importa que no reconozca el id o en nombre
						usuarios.map((usuario) => <Input key={usuario.id} name="nombreUsuario" label={usuario.nombre} type="checkbox" />)
					}

					<Button type="submit" label="Crear Evento" variant="primary" />
				</Form>
			</fieldset>

			<fieldset>
				<legend>Usuarios</legend>
			</fieldset>
			{/* <form onSubmit={handleSubmit} className="flex flex-col">
				<input type="text" placeholder="Nombre del evento" value={nombre} onChange={(e) => setNombre(e.target.value)} />
				<input type="date" value={fecha} onChange={(e) => setFecha(e.target.value)} />
				<input type="text" placeholder="Sede" value={sede} onChange={(e) => setSede(e.target.value)} />
				<button type="submit">Crear Evento</button>
			</form> */}
		</>
	);
};
