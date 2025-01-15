import { GET as GetAllUsers } from "./api/users/route";
import { GET as GetAllAsados } from "./api/asados/route";
import LoginPage from "./login/page";


export default async function Home() {
  // console.log("response", await GetAllUsers());
  // console.log("asados", await GetAllAsados());

  // const obtenerDetallesAsado = async (asadoId: number) => {
  //   const response = await fetch(`/api/asados/${asadoId}`);
  //   const data = await response.json();
  //   console.log(data);
  // };

  // // Llamada a la función con el id del asado
  // obtenerDetallesAsado(1); // Por ejemplo, id = 1

  return (
    <main>
      <LoginPage />
    </main>
  )
}
