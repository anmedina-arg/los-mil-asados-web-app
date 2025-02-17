"use client";
import { useState, useEffect } from "react";
import { Card } from "@/components/card";

const EventosPage = () => {
	const [asados, setAsados] = useState([]);
	const [page, setPage] = useState(1);
	const [totalPages, setTotalPages] = useState(1);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		const fetchData = async () => {
			setIsLoading(true);
			const response = await fetch(`/api/asados?page=${page}&limit=10`);
			const data = await response.json();

			setAsados(data.data);
			setTotalPages(data.totalPages);
			setIsLoading(false);

			// 🔹 1️⃣ Establecer la página inicial basada en `defaultPage`
			if (page === 1 && data.defaultPage) {
				setPage(data.defaultPage);
			}
		};

		fetchData();
	}, [page]);

	return (
		<div>
			<h1>Listado de Asados</h1>
			{isLoading ? (
				<p>Cargando...</p>
			) : (
				<>
					<div className="flex flex-col">
						{asados.map((asado: any) => (
							<Card key={asado.name} number={asado.name} date={asado.date} />
						))}
					</div>

					{/* 🔹 2️⃣ Controles de paginación */}
					<div>
						<button
							disabled={page === 1}
							onClick={() => setPage(page - 1)}
						>
							Anterior
						</button>
						<span>Página {page} de {totalPages}</span>
						<button
							disabled={page === totalPages}
							onClick={() => setPage(page + 1)}
						>
							Siguiente
						</button>
					</div>
				</>
			)}
		</div>
	);
};

export default EventosPage;
