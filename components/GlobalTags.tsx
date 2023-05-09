import { asset, Head } from "$fresh/runtime.ts";

function GlobalTags() {
  return (
    <Head>
      <style
        dangerouslySetInnerHTML={{
          __html: `
          @font-face {
            font-family: 'Inter';
            font-style: normal;
            font-weight: 400;
            font-display: swap;
            src: url(${asset("/fonts/InterRegular.ttf")}) format('ttf');
          }
          @font-face {
            font-family: 'Inter';
            font-style: normal;
            font-weight: 500;
            font-display: swap;
            src: url(${asset("/fonts/InterMedium.ttf")}) format('ttf');
          }
          @font-face {
            font-family: 'Manrope';
            font-style: normal;
            font-weight: 500;
            font-display: swap;
            src: url(${asset("/fonts/ManropeBold.ttf")}) format('ttf');
          }
          `,
        }}
      />
    </Head>
  );
}

export default GlobalTags;
