import { useState } from "react";
import {
  Container,
  EditButton,
  Input,
  SaveButton,
  TextArea,
  TrashButton,
} from "./styles";

import { PencilSimple, Trash } from "@phosphor-icons/react";

type Props = {
  status: string;
  title: string;
  description?: string;
};

export function Task({ title, status, description }: Props) {
  const [editing, setEditing] = useState(false);
  const [input, setInput] = useState(title);
  const [descriptionUser, setDescriptionUser] = useState(description);

  return (
    <Container>
      <header>
        <Input
          type="text"
          readOnly={!editing}
          value={input}
          onChange={({ target }) => setInput(target.value)}
          $editing={editing}
        ></Input>
      </header>

      <TextArea
        readOnly={!editing}
        value={descriptionUser}
        onChange={({ target }) => setDescriptionUser(target.value)}
        $editing={editing}
      ></TextArea>

      <TrashButton>
        <Trash size={20} />
      </TrashButton>

      <EditButton onClick={() => setEditing(!editing)}>
        <PencilSimple size={20} />
      </EditButton>

      {editing && <SaveButton>Salvar</SaveButton>}
    </Container>
  );
}
