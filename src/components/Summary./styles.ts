import { styled } from 'styled-components';

export const SummaryContainer = styled.section`
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;
  padding: 0 1.5rem;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-top: -5rem;
`;

interface ISummaryCardProps {
  variant?: 'green';
}

export const SummaryCard = styled.div<ISummaryCardProps>`
  background-color: ${(props) => props.theme['gray-600']};
  border-radius: 6px;
  padding: 2rem;

  ${(props) =>
    props.variant === 'green' &&
    `background-color: ${props.theme['green-700']};`}

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: ${(props) => props.theme['gray-300']};
  }

  strong {
    display: block;
    margin-top: 1rem;
    font-size: 2rem;
  }
`;