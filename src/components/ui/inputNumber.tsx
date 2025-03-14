import React from "react";
import { Controller } from "react-hook-form";

type InputNumberProps = {
	name: string;
	label: string;
	control: any;
	error?: string;
	defaultValue?: number;
	min?: number;
	max?: number;
};

const InputNumber = ({
	name,
	label,
	control,
	error,
	defaultValue,
	min,
	max,
}: InputNumberProps) => (
	<div className="input-container">
		<label htmlFor={name}>{label}</label>
		<Controller
			name={name}
			control={control}
			defaultValue={defaultValue || 0}
			render={({ field }) => (
				<input
					{...field}
					type="number"
					id={name}
					min={min}
					max={max}
					className={`input ${error ? "input-error" : ""}`}
				/>
			)}
		/>
		{error && <p className="error-text">{error}</p>}
	</div>
);

export default InputNumber;
