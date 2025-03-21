"use client";
import { useState, useEffect } from "react";
import { Card } from "@/components/card";
import ButtonLink from "@/components/ui/buttonLink";

const EventosPage = () => {
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

		fetchData();
	}, [page]);

	return (
		<div>
			<h1 className="text-white">Listado de Asados</h1>
			<ButtonLink to='/eventos/newEvent' label="crear evento" variant="primary" />
			{isLoading ? (
				<p>Cargando...</p>
			) : (
				<>
					<div className="flex flex-col">
						{asados.map((asado: any) => (
							<Card key={asado.name} number={asado.name} date={asado.date} asadoId={asado.id} />
						))}
					</div>

					<div>
						<button
							className="border-2 border-solid border-white text-white px-2"
							disabled={page === 1}
							onClick={() => setPage(page - 1)}
						>
							Anterior
						</button>
						<span className="text-white px-2">Página {page} de {totalPages}</span>
						<button
							className="border-2 border-solid border-white text-white px-2"
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
