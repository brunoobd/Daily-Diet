import { CardStyleProps, Container, Subtitle, Title } from "./style";

type Props = {
  title: string;
  subtitle: string;
  variant?: CardStyleProps;
};

export const StatisticsCard = ({
  title,
  subtitle,
  variant = "DEFAULT",
}: Props) => {
  return (
    <Container variant={variant}>
      <Title>{title}</Title>
      <Subtitle>{subtitle}</Subtitle>
    </Container>
  );
};
