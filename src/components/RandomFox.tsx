import { useRef } from "react";

type Props = {
  image: string;
};

export const RandomFox = (props: Props): JSX.Element => {
  const { image } = props;
  const ref = useRef<HTMLImageElement>(null);

  return (
    <img
      ref={ref}
      src={image}
      width={320}
      height="auto"
      className="rounded-r"
    />
  );
};
