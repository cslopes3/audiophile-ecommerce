import { FieldError, UseFormRegisterReturn } from 'react-hook-form';

type CheckoutFieldProps = {
    inputText: string;
    inputId: string;
    error: FieldError | undefined;
    register: UseFormRegisterReturn;
};

export function CheckoutField({
    inputText,
    inputId,
    error,
    register,
}: CheckoutFieldProps) {
    return (
        <>
            <div className="flex justify-between">
                <label
                    className={`text-form-label text-paragraph ${
                        error ? 'text-red-500' : ''
                    }`}
                    htmlFor={inputId}
                >
                    {inputText}
                </label>
                {error && (
                    <p className="text-form-label text-red-500">{`${error.message}`}</p>
                )}
            </div>
            <input
                {...register}
                type="text"
                id={inputId}
                className={`h-14 px-6 text-form-input rounded-lg border border-solid border-[#CFCFCF] focus:outline-primary-default focus:caret-primary-default ${
                    error ? 'border-red-500 border-2 focus:caret-red-500' : ''
                }`}
            />
        </>
    );
}
