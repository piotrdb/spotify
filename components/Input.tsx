import { forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, disabled, ...props }, ref) => {
    return (
      <input
        type={type}
        className={twMerge(
          `flex w-full rounded-md bg-neutral-700 border border-transparent px-3 py-2 text-sm 
          file:border-0 file:bg-neutral-500 file:text-sm file:font-medium file:rounded file:py-1 file:px-2 file:mr-3 file:cursor-pointer hover:file:bg-gray-400 file:duration-200
        placeholder:text-neutral-400 disabled:cursor-not-allowed disabled:opacity-50 focus:outline-none`,
          className
        )}
        disabled={disabled}
        ref={ref}
        {...props}
      />
    );
  }
);

Input.displayName = 'Input';

export default Input;
