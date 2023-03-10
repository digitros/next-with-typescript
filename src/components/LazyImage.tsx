import { ImgHTMLAttributes, useEffect, useRef, useState } from "react";

type LazyImageProps = {
  src: string;
  onLazyLoad?: (img: HTMLImageElement) => void;
};
type ImageNativeTypes = ImgHTMLAttributes<HTMLImageElement>;

type Props = LazyImageProps & ImageNativeTypes;

export const LazyImage = (props: Props): JSX.Element => {
  const { src, onLazyLoad, ...imgProps } = props;
  const [isLazyLoaded, setIsLazyLoaded] = useState(false);
  const [currentSrc, setCurrentSrc] = useState(
    "data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs="
  );
  const ref = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (isLazyLoaded) return;
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && ref.current) {
          if (typeof onLazyLoad === "function") onLazyLoad(ref.current);
          setCurrentSrc(src);
          setIsLazyLoaded(true);
          observer.disconnect();
        }
      });
    });

    if (ref.current) observer.observe(ref.current);

    return () => {
      observer.disconnect();
    };
  }, [src, onLazyLoad, isLazyLoaded]);

  return <img ref={ref} src={currentSrc} {...imgProps} />;
};
