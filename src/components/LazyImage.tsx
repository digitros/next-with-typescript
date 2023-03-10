import { ImgHTMLAttributes, useEffect, useRef, useState } from "react";

type LazyImageProps = {
  src: string;
};
type ImageNativeTypes = ImgHTMLAttributes<HTMLImageElement>;

type Props = LazyImageProps & ImageNativeTypes;

export const LazyImage = (props: Props): JSX.Element => {
  const { src, ...imgProps } = props;
  const [currentSrc, setCurrentSrc] = useState(
    "data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs="
  );
  const ref = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setCurrentSrc(src);
        }
      });
    });

    if (ref.current) observer.observe(ref.current);

    return () => {
      observer.disconnect();
    };
  }, [src]);

  return <img ref={ref} src={currentSrc} {...imgProps} />;
};
