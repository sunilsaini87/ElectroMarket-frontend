// import React from "react";
import { Text, Img } from "./..";
import PropTypes from "prop-types";

export default function HomepageCompleteyour({
  image = "images/img_image_7_318x421.png",
  title = "Complete your space",
  subtitle = "TechVolt Objet Collection",
  ...props
}) {
  return (
    <div {...props} className={`${props.className} flex flex-col w-full gap-6`}>
      <Img
        src={image}
        alt="complete_your"
        className="h-[318px] w-full rounded-[20px] object-cover md:h-auto"
      />
      <div className="flex flex-col items-start gap-1.5">
        <Text size="4xl" as="p" className="!text-black-900">
          {title}
        </Text>
        <Text size="xl" as="p" className="!text-gray-700">
          {subtitle}
        </Text>
      </div>
    </div>
  );
}

HomepageCompleteyour.propTypes = {
  image: PropTypes.string,
  title: PropTypes.node,
  subtitle: PropTypes.node,
  className: PropTypes.node,
};
