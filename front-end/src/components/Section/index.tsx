import { Container } from "./styles";

type Props = {
  title: string;
};

export function Section({ title }: Props) {
  return (
    <Container>
      <h1>{title}</h1>
    </Container>
  );
}
