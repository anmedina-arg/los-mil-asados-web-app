import { FieldValues, Path, useFormContext } from "react-hook-form";

type InputProps<T extends FieldValues> = {
	label?: string;
	name: Path<T>;
	// [key: string]: any;
} & React.InputHTMLAttributes<HTMLInputElement>

const Input = <T extends FieldValues>({ label, name, ...rest }: InputProps<T>) => {

	const { register, formState: { errors } } = useFormContext<T>()

	return (
		<div className="flex flex-col">
			{label && <label htmlFor={name} className="text-white">{label}</label>}
			<input className="rounded-md p-2" {...register(name)} id={name} {...rest} />
			{errors[name] && <span style={{ color: "red" }}>{String(errors[name]?.message)}</span>}
		</div>
	);
};

export default Input;
