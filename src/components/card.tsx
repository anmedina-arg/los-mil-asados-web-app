import { useState } from "react";

type CardProps = {
	asadoId: number;
	number: string;
	date: string;
};

export const Card = ({ number, date, asadoId }: CardProps) => {
	const [expanded, setExpanded] = useState(false);
	const [eventData, setEventData] = useState<any>(null);
	const [loading, setLoading] = useState(false);

	console.log('number', number)

	const toggleExpand = async () => {
		setExpanded(!expanded);

		if (!expanded && !eventData) {
			setLoading(true);
			try {
				const response = await fetch(`/api/asados/${asadoId}`);
				const data = await response.json();
				setEventData(data);
			} catch (error) {
				console.error("Error fetching asado details:", error);
			} finally {
				setLoading(false);
			}
		}
	};

	console.log(eventData)

	const formattedDate = new Date(date)
		.toISOString()
		.split("T")[0]
		.split("-")
		.reverse()
		.join("/");

	return (
		<div className="flex flex-col text-white border-solid border-2 border-white p-2 rounded-md m-2">
			<div className="cursor-pointer" onClick={toggleExpand}>
				<span>Asado {number}</span>
			</div>

			{expanded && (
				<div className="mt-2 p-2 border-t border-gray-500">
					{loading ? (
						<p>Cargando detalles...</p>
					) : eventData ? (
						<div>
							<p>📅 Fecha del evento: {formattedDate}</p>
							<p>💰 Gasto total: {eventData.participantes.reduce((acc: number, p: any) => acc + p.montoDeberiaPagar, 0).toFixed(2)}</p>
							<p>👥 Participantes:</p>
							<ul>
								{eventData.participantes.map((p: any, index: number) => (
									<li key={index}>
										{p.nombre} - Debe pagar: ${p.montoDeberiaPagar.toFixed(2)}
									</li>
								))}
							</ul>
						</div>
					) : (
						<p>No hay información disponible.</p>
					)}
				</div>
			)}
		</div>
	);
};
