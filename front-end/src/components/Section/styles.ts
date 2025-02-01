import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  padding: 2rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;

  background-color: ${({ theme }) => theme.COLORS.gray_800};

  border-radius: 10px;

  > h1 {
    text-transform: uppercase;
    font-weight: bold;
    color: ${({ theme }) => theme.COLORS.text};
  }
`;
