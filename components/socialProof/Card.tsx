import type { Image as ImageProps } from "deco-sites/std/components/types.ts";
import Image from "deco-sites/std/components/Image.tsx";

export interface CardProps {
  image: ImageProps;
  alt: string;
  content: string;
  author: string;
}

export default function Card({ card }: { card: CardProps }) {
  const { image, alt, content, author } = card;

  return (
    <div class="pt-[60px] pb-[120px] flex flex-col gap-[50px] md:(flex-row gap-[30px]) lg:(gap-[50px])">
      <Image
        class="md:(max-h-[300px] min-h-[300px] max-w-[250%] max-w-[250px]) lg:(max-h-[540px] min-h-[540px] max-w-[460%] max-w-[460px])"
        src={image}
        alt={alt}
        width={830}
      />
      <div class="md:(mt-[40px] mb-[10px])">
        <Image
          src="https://assets.website-files.com/63dff3904fd49bed9c9c3c19/63f730f013b5f15585b7baa0_ic-quote.svg"
          alt="Blockquote caracteres"
          width={25}
        />
        <div>
          {content && (
            <blockquote class="text-[22px] leading-[170%] font-medium pt-[6px] mb-[20px] md:text-[18px] lg:(text-[28px])">
              {content}
            </blockquote>
          )}
          {author && <p class="text-[#333] leading-[170%]">{author}</p>}
        </div>
      </div>
    </div>
  );
}
