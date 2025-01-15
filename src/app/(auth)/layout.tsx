import Navbar from '@/components/navBar'

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<main lang="en">
			<Navbar />
			{children}
		</main>
	)
}