import { Task } from "../Task";
import { Container } from "./styles";

type Props = {
  status: string;
  tasks: {
    status: string;
    title: string;
    description: string;
  }[];
};

export function Section({ status, tasks }: Props) {
  return (
    <Container>
      <h1>{status}</h1>

      {tasks.map((task) => {
        if (status === task.status) {
          return <Task title={task.title} description={task.description} />;
        }
      })}
    </Container>
  );
}
