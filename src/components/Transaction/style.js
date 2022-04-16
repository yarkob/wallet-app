import styled from 'styled-components'

export const Wrapper = styled.div`
  background: ${({ value }) => value < 0 ? '#e2e1e1' : '#fff'};
  border: 1px solid #bdbdbd;
  border-radius: 3px;
  padding: 5px;
  margin: 10px;
`;

Wrapper.displayName = 'TransactionWrapper';
