import React from "react";
import Image from "next/image";

type Props = {
  src: string;
  alt: string;
  className?: string;
};

const Emoji = ({src, alt, className} : Props) => {
    return (
      <Image
        src={src}
        width={"24"}
        height={"24"}
        alt={alt}
        className={className}
      />
  );
};

export default Emoji;
