type EventsListProps = {
	asadoNumber: string
}
const EventsList = ({ asadoNumber }: EventsListProps) => {
	console.log(asadoNumber)
	return (
		<div>Soy los detalles</div>
	)
};

export default EventsList;