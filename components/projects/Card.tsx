import type { Image as ImageProps } from "deco-sites/std/components/types.ts";
import Image from "deco-sites/std/components/Image.tsx";

export interface CardProps {
  href: string;
  image: ImageProps;
  title: string;
  client: string;
  location: string;
}

export default function Card({ card }: { card: CardProps }) {
  const { href, image, title, client, location } = card;

  return (
    <a href={href}>
      <Image
        src={image}
        width={620}
        class="object-cover align-middle max-h-[410px] inline-block"
      />

      <div class="flex items-center mt-2.5">
        <h2 class="w-full max-w-[50%] font-medium">{title}</h2>

        <div class="w-full max-w-[50%] pl-2.5 flex flex-col justify-end">
          <div class="flex justify-end flex-wrap">
            <p class="text-right text-sm leading-[150%]">Client: </p>
            <p class="text-right text-sm leading-[150%]">{client}</p>
          </div>
          <div class="flex justify-end flex-wrap">
            <p class="text-right text-sm leading-[150%]">Location: </p>
            <p class="text-right text-sm leading-[150%]">{location}</p>
          </div>
        </div>
      </div>
    </a>
  );
}
