export type TaskProps = {
  id?: string;
  title: string;
  description: string;
  status?: "pending" | "in_progress" | "completed";
};

export let dataBase: TaskProps[] = [];
