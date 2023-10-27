import React from "react";

export default function Input({
	type,
	name,
	placeholder,
	label,
	value,
	onChange,
}) {
	return (
		<div>
			<div
				className={
					label == "true" ? "mb-2 font-semibold text-md" : "hidden"
				}>
				<label htmlFor={name}>{name}</label>
			</div>
			<input
				type={type}
				id={name}
				name={name}
				placeholder={placeholder}
				value={value}
				onChange={onChange}
				className='flex px-3 py-2 md:px-4 md:py-3 border-2 border-black rounded-lg font-medium placeholder:font-normal placeholder:text-sm'
			/>
		</div>
	);
}
