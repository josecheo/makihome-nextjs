import Head from "next/head";
import { useEffect } from "react";

export default function HeadTags({ title, description, url }) {
  useEffect(() => {
    window.initMap = () => {};
  });
  const rTitle = title
    ? title
    : "KUNA | Luxury made in Peru Alpaca and Vicuña Clothing";
  const rDescription = description
    ? description
    : "Shop online women and man clothing, accessories and home line made with the finest alpaca and vicuña natural fibers. Made in Peru.";

  return (
    <Head>
      <meta charSet="UTF-8" />
      <title>{rTitle}</title>
      <meta name="description" content={rDescription} />
      <meta property="og:title" content={rTitle} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:description" content={description} />

      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url} />
      <meta property="twitter:title" content={rTitle} />
      <meta property="twitter:description" content={description} />
    </Head>
  );
}
