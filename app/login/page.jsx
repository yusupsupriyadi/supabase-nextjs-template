"use client";
import Input from "@/components/Input";
import { useState } from "react";

export default function Login() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [isSucces, setIsSucces] = useState(false);
	const [isError, setIsError] = useState(false);

	const handleToast = (status) => {
		if (status === "success") {
			toast({
				title: "Berhasil",
				message: "Silahkan cek email anda untuk melanjutkan",
				type: "success",
			});
		}

		if (status === "error") {
			toast({
				title: "Gagal",
				message: "Silahkan coba lagi",
				type: "error",
			});
		}
	};

	const handleEmailChange = (e) => {
		setEmail(e.target.value);
	};

	const handlePasswordChange = (e) => {
		setPassword(e.target.value);
	};
	return (
		<div className='container'>
			<section className='flex items-center justify-center h-screen'>
				<section className='p-8 shadow-md rounded-md'>
					<div className='flex flex-1 flex-col  justify-center space-y-5 max-w-md'>
						<div className='flex flex-col space-y-2 text-center'>
							<h2 className='text-3xl md:text-4xl font-bold'>
								Masuk
							</h2>
							<p className='text-md'>
								Silahkan masuk untuk melanjutkan
							</p>
						</div>
						<form
							action='/auth/login'
							method='post'
							className='flex flex-col max-w-md space-y-5'>
							<Input
								type='email'
								name='email'
								placeholder='your@email.com'
								label='true'
								value={email}
								onChange={handleEmailChange}
							/>
							<Input
								type='password'
								name='password'
								placeholder='Password'
								label='true'
								value={password}
								onChange={handlePasswordChange}
							/>
							<button className='flex items-center justify-center flex-none px-3 py-2 md:px-4 md:py-3 border-2 rounded-lg font-medium border-black bg-black text-white'>
								MASUK
							</button>
							<div className='flex justify-center items-center'>
								<span className='w-full border border-black' />
								<span className='px-4'>atau</span>
								<span className='w-full border border-black' />
							</div>
							<button
								formAction='/auth/sign-up'
								className='flex items-center justify-center flex-none px-3 py-2 md:px-4 md:py-3 border-2 rounded-lg font-medium border-black bg-black text-white'>
								Daftar
							</button>
							<button
								formAction='/auth/logout'
								className='mt-2 flex items-center justify-center flex-none px-3 py-2 md:px-4 md:py-3 border-2 rounded-lg font-medium border-black bg-black text-white'>
								Keluar
							</button>
						</form>
					</div>
				</section>
			</section>
		</div>

		//   <form action="/auth/login" method="post">
		// 	<label htmlFor="email">Email</label>
		// 	<input name="email" />
		// 	<label htmlFor="password">Password</label>
		// 	<input type="password" name="password" />
		// 	<button>Sign In</button>
		// 	<button formAction="/auth/sign-up">Sign Up</button>
		// 	<button formAction="/auth/logout">Sign Out</button>
		//   </form>
	);
}
