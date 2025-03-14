import React from "react";
import { useForm, FormProvider, FieldValues, SubmitHandler, DefaultValues } from "react-hook-form";
import { zodResolver } from '@hookform/resolvers/zod';
import { ZodSchema } from "zod";

type FormProps<T extends FieldValues> = {
	defaultValues?: DefaultValues<T>;
	children: React.ReactNode;
	onSubmit: SubmitHandler<T>;
	validationSchema: ZodSchema<T>;
};

const Form = <T extends FieldValues>({ defaultValues, children, onSubmit, validationSchema }: FormProps<T>) => {
	const methods = useForm<T>({ resolver: zodResolver(validationSchema), defaultValues });
	const { handleSubmit, formState, reset, control } = methods;

	const handleFormSubmit: SubmitHandler<T> = async (data) => {
		await onSubmit(data);
		reset();
	};

	return (
		<FormProvider {...methods}>
			<form onSubmit={handleSubmit(handleFormSubmit)} className="w-full">
				{React.Children.map(children, (child) => {
					return React.isValidElement(child) && child.props.name
						? React.createElement(child.type, {
							...{
								...child.props,
								//register: methods.register, // <-- is not necessary to pass register methods, Input component could conect to register by itself
								key: child.props.name,
								error: formState.errors[child.props.name]?.message,
								control, // aqui le paso el control a los hijos
							},
						})
						: child;
				})}
			</form>
		</FormProvider>
	);
};

export default Form;
