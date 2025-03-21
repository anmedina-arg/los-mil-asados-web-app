import ButtonLink from "@/components/ui/buttonLink";

const DashboardPage = () => {

	return (
		<div>
			<h1>Dashboard</h1>
			<ButtonLink to='/eventos/newEvent' label="crear evento" variant="primary" />
			<ButtonLink to='/eventos/newEvent' label="modificar un evento" variant="primary" />
			<ButtonLink to='/eventos/newEvent' label="ABM de usuarios" variant="primary" />
		</div>
	);
};

export default DashboardPage;