import Slider from "deco-sites/start/components/ui/Slider.tsx";
import SliderJS from "deco-sites/start/components/ui/SliderJS.tsx";

export interface Props {
  testimonial: string;
  author: string;
}

export default function Projects({ testimonial, author }: Props) {
  return (
    <section class="relative sm:col-start-2 sm:col-span-1 sm:row-start-1">
      <Slider class="bg-red-500 gap-6">
        <Slider.Item index={1} class="min-w-[100vw] sm:min-w-[40vw]">
          <h1>ASHUDASUHDSA</h1>
        </Slider.Item>
        <Slider.Item index={2} class="min-w-[100vw] sm:min-w-[40vw]">
          <h1>12312321321HDSA</h1>
        </Slider.Item>
      </Slider>

      <Slider.PrevButton class="absolute left-2 top-1/2">
        PREV
      </Slider.PrevButton>

      <Slider.NextButton class="absolute right-2 top-1/2">
        NEXT
      </Slider.NextButton>

      <SliderJS rootId="test"></SliderJS>
    </section>
  );
}
