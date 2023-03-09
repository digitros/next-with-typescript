type Props = {
  image: string;
};

export const RandomFox = (props: Props): JSX.Element => {
  const { image } = props;

  return <img src={image} width={320} height="auto" className="rounded-r" />;
};
