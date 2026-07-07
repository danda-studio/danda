import type { ChangeEventHandler, FocusEventHandler } from "react";
import { Field } from "@base-ui/react/field";
import { cn } from "@/shared/lib/cn";

export interface TextareaFieldProps {
  name?: string;
  placeholder?: string;
  value?: string;
  defaultValue?: string;
  rows?: number;
  onChange?: ChangeEventHandler<HTMLTextAreaElement>;
  onBlur?: FocusEventHandler<HTMLTextAreaElement>;
  errors?: string[];
  className?: string;
}

export function TextareaField({ errors, className, rows = 3, ...props }: TextareaFieldProps) {
  return (
    <Field.Root className="flex w-full flex-col gap-[0.5rem]">
      <Field.Control
        render={<textarea rows={rows} />}
        className={cn(
          "h-[6rem] w-full resize-none rounded-[1.25rem] bg-[var(--color-gray-150)] px-[1rem] py-[0.75rem] text-[1rem] font-medium text-black outline-none placeholder:text-muted",
          className,
        )}
        {...(props as Record<string, unknown>)}
      />
      {errors?.map(error => (
        <Field.Error key={error} match className="text-[0.8125rem] text-red-600">
          {error}
        </Field.Error>
      ))}
    </Field.Root>
  );
}
