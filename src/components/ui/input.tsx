import { FieldValues, Path, useFormContext } from "react-hook-form";

type InputProps<T extends FieldValues> = {
	label?: string;
	name: Path<T>;
	// [key: string]: any;
} & React.InputHTMLAttributes<HTMLInputElement>

const Input = <T extends FieldValues>({ label, name, ...rest }: InputProps<T>) => {

	const { register, formState: { errors } } = useFormContext<T>()

	const { type } = rest
	const inlineStyles = type === 'checkbox' || type === 'radio' ? '' : 'flex-col'

	return (
		<div className={`flex ${inlineStyles}`}>
			{label && <label htmlFor={name} className="text-white first-letter:uppercase">{label}</label>}
			<input className="rounded-md p-2 w-full" {...register(name)} id={name} {...rest} />
			{errors[name] && <span style={{ color: "red" }}>{String(errors[name]?.message)}</span>}
		</div>
	);
};

export default Input;
