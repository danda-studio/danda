"use client";

import { useForm } from "@tanstack/react-form";
import Image from "next/image";
import { useState } from "react";
import { Button } from "@/shared/ui/button";
import { BoxiconsSend } from "@/shared/ui/icons/boxicons";
import { TextField } from "@/shared/ui/text-field";
import { TextareaField } from "@/shared/ui/textarea-field";
import { BUDGET_OPTIONS, CONTACT_METHOD_OPTIONS, contactRequestSchema } from "../model/schema";

function formatFieldErrors(errors: unknown[]): string[] {
  return errors
    .filter(Boolean)
    .map(error => (typeof error === "string" ? error : ((error as { message?: string })?.message ?? String(error))));
}

function SelectablePill({ label, selected, onSelect }: { label: string; selected: boolean; onSelect: () => void }) {
  return (
    <button
      type="button"
      onClick={onSelect}
      className={`flex h-10 shrink-0 cursor-pointer items-center justify-center overflow-clip rounded-[2.5rem] px-5 font-(family-name:--font-manrope-sans) text-[1rem] font-medium tracking-[-0.0625rem] ${
        selected ? "bg-black text-white" : "bg-(--dd-gray-150) text-black"
      }`}
    >
      {label}
    </button>
  );
}

export function ContactRequestForm() {
  const [submitted, setSubmitted] = useState(false);

  const form = useForm({
    defaultValues: {
      name: "",
      message: "",
      budget: BUDGET_OPTIONS[0] as (typeof BUDGET_OPTIONS)[number],
      contactMethod: CONTACT_METHOD_OPTIONS[0] as (typeof CONTACT_METHOD_OPTIONS)[number],
      contact: "",
    },
    validators: {
      onSubmit: contactRequestSchema,
    },
    onSubmit: async ({ value }) => {
      // Бэкенда пока нет — фиксируем заявку локально.
      console.warn("contact request submitted", value);
      setSubmitted(true);
    },
  });

  return (
    <form
      className="mx-auto flex w-143 max-w-full flex-col items-start gap-6"
      onSubmit={(event) => {
        event.preventDefault();
        event.stopPropagation();
        void form.handleSubmit();
      }}
    >
      <div className="flex w-full flex-col items-start gap-3">
        <form.Field name="name">
          {field => (
            <TextField
              placeholder="Имя"
              name={field.name}
              value={field.state.value}
              onChange={e => field.handleChange(e.target.value)}
              onBlur={field.handleBlur}
              errors={formatFieldErrors(field.state.meta.errors)}
            />
          )}
        </form.Field>
        <form.Field name="message">
          {field => (
            <TextareaField
              placeholder="О задаче"
              name={field.name}
              value={field.state.value}
              onChange={e => field.handleChange(e.target.value)}
              onBlur={field.handleBlur}
              errors={formatFieldErrors(field.state.meta.errors)}
            />
          )}
        </form.Field>
        <div className="flex h-8 items-center gap-1.5 rounded-[1.875rem] bg-brand px-3 py-1.75 text-white">
          <span className="relative size-4 shrink-0">
            <Image alt="" fill src="/landing/desktop-6/boxicons1.svg" />
          </span>
          <span className="font-(family-name:--font-manrope-sans) text-[0.875rem] font-medium leading-[1.3]">Прикрепить файл</span>
        </div>
      </div>

      <div className="flex w-full flex-col items-start gap-4">
        <p className="w-full font-(family-name:--font-manrope-sans) text-[2rem] font-medium tracking-[-0.0625rem] text-black">Бюджет</p>
        <form.Field name="budget">
          {field => (
            <div className="flex flex-wrap items-center gap-3">
              {BUDGET_OPTIONS.map(option => (
                <SelectablePill
                  key={option}
                  label={option}
                  selected={field.state.value === option}
                  onSelect={() => field.handleChange(option)}
                />
              ))}
            </div>
          )}
        </form.Field>
      </div>

      <div className="flex w-full flex-col items-start gap-4">
        <p className="w-full font-(family-name:--font-manrope-sans) text-[2rem] font-medium tracking-[-0.0625rem] text-black">Контакт для связи</p>
        <form.Field name="contactMethod">
          {field => (
            <div className="flex flex-wrap items-center gap-3">
              {CONTACT_METHOD_OPTIONS.map(option => (
                <SelectablePill
                  key={option}
                  label={option}
                  selected={field.state.value === option}
                  onSelect={() => field.handleChange(option)}
                />
              ))}
            </div>
          )}
        </form.Field>
        <form.Field name="contact">
          {field => (
            <TextField
              placeholder="Телефон, @никнейм или почта"
              name={field.name}
              value={field.state.value}
              onChange={e => field.handleChange(e.target.value)}
              onBlur={field.handleBlur}
              errors={formatFieldErrors(field.state.meta.errors)}
            />
          )}
        </form.Field>
      </div>

      <form.Subscribe selector={state => state.isSubmitting}>
        {isSubmitting => (
          <Button
            type="submit"
            variant="primary"
            className="w-full"
            loading={isSubmitting}
            leadingIcon={<BoxiconsSend className="relative size-7 -rotate-90" />}
          >
            {submitted ? "Отправлено" : "Бесплатный аудит"}
          </Button>
        )}
      </form.Subscribe>
    </form>
  );
}
