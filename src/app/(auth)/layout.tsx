import Navbar from '@/components/navBar'

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<main className='h-screen w-screen flex flex-col' lang="en">
			<div className="flex flex-grow bg-green-400 w-screen">
				{children}
			</div>
			<Navbar />
		</main>
	)
}