import SideNav from '@/app/components/sidenav';

export default function Layout({ children }: {children: React.ReactNode }) {
	return (
		<>
		<div className="overflow-hidden">
		<div className="flex rounded flex-row-reverse bg-black w-100">
                <span className="text-gray-50 p-2 mr-6">Salir</span>
                <span className="text-gray-50 p-2 mr-6">Usuario</span>
            </div>
		<div className="flex h-screen flex-col md:flex-row bg-gray-100 md:overflow-hidden">
			<div className="w-full flex-col flex-none md:w-64">
				<SideNav />
			</div>
			<div className="flex-grow w-100 overflow-y-auto max-h-screen">{children}</div>
		</div>
		</div>
		</>
	);
}
//md:overflow-hidden