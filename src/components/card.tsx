type CardProps = {
	number: string,
	date: string
}

export const Card = ({ number, date }: CardProps) => {
	// const formattedDate = new Date(date).toLocaleDateString("es-ES", {
	// 	day: "2-digit",
	// 	month: "2-digit",
	// 	year: "2-digit",
	// });

	const formattedDate = new Date(date) // Convertimos a objeto Date
		.toISOString() // Aseguramos formato UTC
		.split("T")[0] // Extraemos solo la fecha (YYYY-MM-DD)
		.split("-") // Dividimos en partes
		.reverse() // Reorganizamos como DD/MM/YY
		.join("/"); // Formato final DD/MM/YY

	return (
		<div className="flex text-white border-solid border-2 border-white p-2 rounded-md m-2">
			<span>Asado {number} - {formattedDate}</span>
		</div>
	)
};

