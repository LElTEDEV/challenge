import { Section } from "./components/Section";
import { Container } from "./styles";

const sections = ["pending", "in_progress", "completed"];

const tasks = [
  {
    status: "pending",
    title: "Criar API com Express",
    description:
      "Lorem  dolor sit amet consectetur adipisicing elit. Modi sapiente nobis sequi laboriosam, commodi sunt eveniet quibusdam itaque porro optio impedit quam inventore architecto autem asperiores animi dignissimos voluptatum totam?",
  },
];

export function App() {
  return (
    <Container>
      {sections.map((section) => (
        <Section status={section} tasks={tasks} />
      ))}
    </Container>
  );
}
