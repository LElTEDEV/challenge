import { ComponentProps } from "react";
import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  padding: 2rem 1.5rem;

  background-color: ${({ theme }) => theme.COLORS.gray_100};
  border-radius: 10px;

  position: relative;

  header {
    text-align: center;

    margin-bottom: 0.5rem;
  }
`;

export const TrashButton = styled.button`
  color: red;
  background-color: transparent;

  position: absolute;

  top: 10px;
  right: 10px;

  transition: filter 0.5s;

  cursor: pointer;
  transition: transform 0.5s;

  &:hover {
    transform: scale(1.2);
  }
`;

type InputProps = ComponentProps<"input"> & {
  $editing: boolean;
};

export const Input = styled.input<InputProps>`
  width: ${({ $editing }) => ($editing ? "80%" : "100%")};
  height: 50px;
  padding: 0 1rem;
  font-size: 1.2rem;
  font-weight: bold;

  border-radius: 10px;

  text-align: ${({ $editing }) => ($editing ? "start" : "center")};

  background-color: ${({ theme, $editing }) =>
    $editing ? theme.COLORS.gray_800 : "transparent"};
`;

type TextAreaProps = ComponentProps<"textarea"> & {
  $editing: boolean;
};

export const TextArea = styled.textarea<TextAreaProps>`
  width: 100%;
  height: 100px;
  max-height: 100px;

  border: 0;
  outline: 0;

  border: 1px solid ${({ theme }) => theme.COLORS.gray_800};

  border-radius: 10px;

  padding: 0.5rem;

  resize: none;

  font-size: 1rem;

  scrollbar-width: none;

  background-color: ${({ theme, $editing }) =>
    $editing ? theme.COLORS.gray_800 : "transparent"};

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const EditButton = styled.button`
  color: ${({ theme }) => theme.COLORS.text};
  background-color: transparent;

  position: absolute;

  top: 10px;
  right: 40px;

  cursor: pointer;

  transition: filter 0.5s;
  transition: transform 0.5s;

  &:hover {
    transform: scale(1.2);
  }
`;

export const SaveButton = styled.button`
  position: absolute;
  right: 10px;
  bottom: 0px;

  border-radius: 10px;

  background-color: ${({ theme }) => theme.COLORS.blue_500};
  color: ${({ theme }) => theme.COLORS.white};
  padding: 0.5rem;

  cursor: pointer;

  transition: filter 0.5s;

  &:hover {
    filter: brightness(0.7);
  }
`;
