import styled from 'styled-components';

export const SuggestionButton = styled.button`
  padding: 10px 15px;
  background-color: white;
  border: 2px solid #3575d3;
  outline: none;
  border-radius: 4px;
`;

export const QuickReplyWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 15px;
  text-align: left;
`;

export const QuickReplySuggestion = styled.div`
  cursor: pointer;
  padding: 12px;
  margin: 4px 0;
  border-radius: 25px;
  border: 1px solid #e0e0e0;

  &:hover {
    background-color: #f0f0f0;
  }
`;
