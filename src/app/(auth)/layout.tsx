import Navbar from '@/components/navBar'

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<main className='h-dvh w-screen flex flex-col' lang="en">
			<div className="flex flex-grow w-screen overflow-scroll">
				{children}
			</div>
			<Navbar />
		</main>
	)
}