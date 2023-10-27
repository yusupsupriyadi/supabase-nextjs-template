import Link from "next/link";

export default function Home() {
	return (
		<div>
			<Link href='/login' className="text-4xl font-bold text-blue-500">Login</Link>
		</div>
	);
}
