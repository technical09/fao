import SideNav from '@/app/components/sidenav';

export default function Layout({ children }: {children: React.ReactNode }) {
	return (
		<>
		<div className="flex w-100 flex-row-reverse bg-black w-screen">
                <span className="text-gray-50 p-2 al">Usuario</span>
                <span className="text-gray-50 p-2 al">Salir</span>
            </div>
		<div className="flex h-screen flex-col md:flex-row md:overflow-hidden bg-gray-100">
			<div className="w-full flex-col flex-none md:w-64">
				<SideNav />
			</div>
			<div className="flex-grow w-100">{children}</div>
		</div>
		</>
	);
}