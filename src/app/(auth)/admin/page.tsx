import { CrearEvento } from "@/components/createAsado";
import ButtonLogin from "@/components/ui/buttonLogin";

const AdminPage = () => {

	return (
		<>
			<div>soy admin page</div>
			<CrearEvento />
			{/* <ButtonLogin action="logout" variant="primary" /> */}
		</>
	)
};

export default AdminPage;