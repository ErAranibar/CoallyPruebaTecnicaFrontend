import { useSelector } from "react-redux";
import { RootState } from "../../store/index";
import TaskList from "./tasks/list";
import { NoAccount } from "./auth/noAccount";
import { logoutService } from "@/services/authService";
import { useEffect, useState } from "react";
import Spinner from "./utils/spinner";
export default function Home() {
	const isAuthenticated = useSelector((state: RootState) => state.auth.isAuthenticated);
	const [isLoading, setIsLoading] = useState(true);
	useEffect(() => {
		setIsLoading(false);
	}, []);
	const handleLogoutClick = () => {
		logoutService();
	}
	return (
		<div className="bg-white-bg w-100 h-100 min-h-screen">
			{
				isLoading ?
					<Spinner />
					: <>
						<div className="bg-gray-green text-white flex items-center justify-between gap-3 p-4">
							<div className="text-[8px] md:text-base">Gestor de Tareas</div>
							<div className="flex flex-col">
								<div className="text-[8px] md:text-base text-center">Coally Prueba Tecnica</div>
								<div className="text-[8px] md:text-base text-center">Erick Aranibar</div>
							</div>
							{
								isAuthenticated ? (
									<div className="text-[8px] md:text-base cursor-pointer text-end" onClick={handleLogoutClick}>Cerrar Sesion</div>
								) : (
									<div className="text-[8px] md:text-base text-end">Sin cuenta</div>
								)
							}
						</div>
						<div className="h-full">
							{
								isAuthenticated ? (
									<TaskList />
								) : (
									<NoAccount />
								)
							}
						</div>
					</>
			}
		</div>
	)
}