import { GET as GetAllAsados } from "../../api/asados/route";

const EventosPage = async () => {
	// Llamar a GetAllAsados y extraer el JSON
	const response = await GetAllAsados();
	const asados = await response.json(); // Convertir la respuesta a JSON

	console.log("asados", asados);

	return (
		<>
			<div>soy eventos page</div>
			<div className="flex flex-col">

				{asados.map((asado: any) => <span key={asado.name}>{`Asado ${asado.name}`}</span>)}
			</div>
		</>
	)
};

export default EventosPage;