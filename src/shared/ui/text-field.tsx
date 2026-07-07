import type { ChangeEventHandler, FocusEventHandler } from "react";
import { Field } from "@base-ui/react/field";
import { cn } from "@/shared/lib/cn";

export interface TextFieldProps {
  name?: string;
  placeholder?: string;
  value?: string;
  defaultValue?: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  onBlur?: FocusEventHandler<HTMLInputElement>;
  errors?: string[];
  className?: string;
}

export function TextField({ errors, className, ...props }: TextFieldProps) {
  return (
    <Field.Root className="flex w-full flex-col gap-[0.5rem]">
      <Field.Control
        className={cn(
          "h-[3.25rem] w-full rounded-[1.25rem] bg-[var(--color-gray-150)] px-[1rem] py-[0.75rem] text-[1rem] font-medium text-black outline-none placeholder:text-muted",
          className,
        )}
        {...props}
      />
      {errors?.map(error => (
        <Field.Error key={error} match className="text-[0.8125rem] text-red-600">
          {error}
        </Field.Error>
      ))}
    </Field.Root>
  );
}
