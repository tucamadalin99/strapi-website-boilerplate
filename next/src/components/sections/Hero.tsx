import React from "react";
import { UrlContext } from "../../../constants";

type HeroProps = {
  title: string;
  subtitle?: string;
  image?: {
    url?: string;
    alternativeText?: string;
  };
};

const Hero: React.FC<HeroProps> = ({ title, subtitle, image }) => {
  // Handle image URL properly (Strapi returns relative path)
  const imageUrl = image?.url
    ? image.url.startsWith("http")
      ? image.url
      : `${UrlContext.baseWithoutApi}${image.url}`
    : null;

  return (
    <section className="w-full">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-4xl font-bold">{title}</h1>
        {subtitle && <p className="mt-2 text-lg text-gray-600">{subtitle}</p>}
        {imageUrl && (
          <img
            src={imageUrl}
            alt={image?.alternativeText || "Hero image"}
            className="mt-6 mx-auto rounded shadow-md max-h-[400px]"
          />
        )}
      </div>
    </section>
  );
};

export default Hero;
