import Link from 'next/link'
import ProductCard from './components/ProductCard'

export default function Home() {
	return (
		<main className='flex gap-2'>
			<Link href='/users' className='btn btn-primary'>Users</Link>
			<ProductCard />
		</main>
	)
}
