import type { Image as ImageProps } from "deco-sites/std/components/types.ts";
import Image from "deco-sites/std/components/Image.tsx";
import Card, { CardProps } from "./Card.tsx";

export interface Props {
  testimonial: CardProps[];
}
[];

export default function Projects({ testimonial }: Props) {
  return (
    <section class="pt-[60px] pb-[120px] px-[20px] mb-[80px] bg-[#d9e3db] md:(mb-[100px]) lg:(mb-[150px])">
      {testimonial.map((testimonial) => <Card card={testimonial} />)}
    </section>
  );
}
