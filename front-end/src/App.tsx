import { Section } from "./components/Section";
import { Container } from "./styles";

const sections = ["pending", "in_progress", "completed"];

export function App() {
  return (
    <Container>
      {sections.map((section) => (
        <Section title={section} />
      ))}
    </Container>
  );
}
