import Link from "next/link";
import React from "react";

export default function Navbar() {
	return (
		<main className='flex justify-between py-4 px-14 items-center'>
			<section>
				<h1 className='hidden'>Kabar Undangan</h1>
			</section>

			<section className='flex items-center gap-4'>
				<Link
					href='/'
					className='font-medium'>
					Masuk
				</Link>
				<Link
					href='/'
					className='font-semibold text-white bg-black py-2 px-4 rounded-lg text-sm'>
					Coba Gratis!
				</Link>
			</section>
		</main>
	);
}
