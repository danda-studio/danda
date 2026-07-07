import { TestimonialCard, TESTIMONIALS } from "@/entities/testimonial";

export function TestimonialsSection() {
  return (
    <>
      <div className="absolute top-[255.875rem] left-[1.5rem] h-[41.25rem] w-[87rem] rounded-[2rem] bg-black" />
      <div className="absolute top-[260.875rem] left-1/2 h-[31.25rem] w-[89.875rem] -translate-x-1/2 overflow-clip">
        <p className="absolute top-0 left-[44.9375rem] -translate-x-1/2 text-center font-[family-name:var(--font-manrope-sans)] text-[4.5rem] leading-none font-semibold tracking-[-0.135rem] whitespace-nowrap text-white [word-break:break-word]">
          Отзывы наших клиентов
        </p>

        <div className="absolute top-[12rem] left-[1.4375rem] h-[23.5625rem] w-[86.9375rem]">
          <div className="absolute top-[-0.00063rem] left-0 flex w-[86.9375rem] items-start justify-center">
            <div className="flex items-center gap-[0.625rem]">
              {TESTIMONIALS.map(testimonial => (
                <div key={testimonial.id} className="relative size-[3rem] shrink-0 overflow-hidden rounded-full">
                  <img alt="" src={testimonial.avatar} className="size-full object-cover" />
                </div>
              ))}
            </div>
          </div>

          <div className="absolute top-[5.25rem] left-0 flex w-[86.9375rem] items-start justify-center gap-[0.625rem] overflow-clip">
            {TESTIMONIALS.map(testimonial => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} />
            ))}
          </div>
        </div>

        <div className="absolute top-[calc(50%+8.625rem)] right-[1.5rem] h-[14rem] w-[21.125rem] -translate-y-1/2 bg-gradient-to-r from-[var(--color-fade-black-transparent)] to-[43.023%] to-black" />
      </div>
    </>
  );
}
