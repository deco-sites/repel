import Button from "deco-sites/start/components/ui/Button.tsx";

export interface Props {
  title?: string;
  description?: string;
  textButton?: string;
}

export default function BannerAd({ title, description, textButton }: Props) {
  return (
    <article class="w-full bg-[#d9e3db] relative">
      <section class="max-w-[1336px] mx-auto px-5 z-[-2] py-[50px] bg-[#d9e3db] lg:py-[60px]">
        <div class="mb-[20px]">
          <p class="text-[34px] font-bold leading-[150%] text-center font-manrope mb-5 lg:text-[42px]">
            {title}
          </p>
          <h1 class="w-full mx-auto text-[20px] leading-[170%] text-center font-manrope mb-5 text-[#333] mb-10 lg:(mb-[50px] max-w-[40%])">
            {description}
          </h1>
        </div>

        {textButton && (
          <div class="flex justify-center">
            <Button href="#" arrow>{textButton}</Button>
          </div>
        )}
      </section>

      <div class="w-[50px] h-[50px] bg-[#f4e486] absolute bottom-0 right-0 md:(w-[70px] h-[70px]) lg:(w-[100px] h-[100px])" />
    </article>
  );
}
