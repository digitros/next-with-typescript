import { useEffect, useRef, useState } from "react";

type Props = {
  image: string;
};

export const RandomFox = (props: Props): JSX.Element => {
  const { image } = props;
  const [src, setSrc] = useState(
    "data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs="
  );
  const ref = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setSrc(image);
        }
      });
    });

    if (ref.current) observer.observe(ref.current);

    return () => {
      observer.disconnect();
    };
  }, [image]);

  return (
    <img
      ref={ref}
      src={src}
      width={320}
      height="auto"
      className="rounded-r bg-gray-300"
    />
  );
};
