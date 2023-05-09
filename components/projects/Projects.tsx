import Card, { CardProps } from "deco-sites/start/components/projects/Card.tsx";

export interface Props {
  auxiliaryText?: string;
  titleSection?: string;

  cards?: CardProps[];
}

export default function Projects({
  auxiliaryText,
  titleSection,
  cards,
}: Props) {
  return (
    <article class="max-w-[1336px] mx-auto pt-[50px] px-5 z-[-2]">
      <div class="mb-[20px] pb-[10px]">
        <div class="flex items-center">
          <div class="h-5 w-5 mr-[5px] bg-[#f4e486]" />
          <p class="text-sm leading-[170%]">{auxiliaryText}</p>
        </div>
        <h1 class="text-[35px] font-bold leading-[140%]">{titleSection}</h1>
      </div>

      <section class="grid grid-cols-1 gap-[40px] lg:(grid-cols-2 gap-[60px])">
        {cards && cards.map((card) => <Card card={card} />)}
      </section>
    </article>
  );
}
