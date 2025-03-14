import { FieldValues, Path, useFormContext } from "react-hook-form";

type SelectProps<T extends FieldValues> = {
	label?: string;
	name: Path<T>;
	options: { value: any; label: string }[];
} & React.SelectHTMLAttributes<HTMLSelectElement>;

const Select = <T extends FieldValues>({ label, name, options, ...rest }: SelectProps<T>) => {
	const {
		register,
		formState: { errors },
	} = useFormContext<T>();

	return (
		<div className="flex flex-col">
			{label && <label htmlFor={name} className="text-white first-letter:uppercase">{label}</label>}
			<select id={name} className="rounded-md p-2 w-full" {...register(name)} {...rest}>
				{options.map(({ value, label }) => (
					<option key={value} value={value}>
						{label}
					</option>
				))}
			</select>
			{errors[name] && <span style={{ color: "red" }}>{String(errors[name]?.message)}</span>}
		</div>
	);
};

export default Select;
